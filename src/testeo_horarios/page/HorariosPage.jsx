import { useEffect, useState } from "react";
import HorarioCard from "../components/HorarioCard";
import "./HorariosPage.css";
import LineupCards from "../../components/list-items/lineup-cards/LineupCards";
import CancelFloatingButtonton from "../../components/floating-buttons/cancel-button/CancelFloatingButton";
import BandSelector from "../../components/modals/band-selection/BandSelector";
import AddFloatingButtonton from "../../components/floating-buttons/add-button/AddFloatingButton";
import BottomMenu from "../../components/bottommenu/BottomMenu";
import NavBar from "../../components/navbar/NavBar";
import { LeftCircleOutlined } from "@ant-design/icons";

function HorariosPage() {
  const [horarios, setHorarios] = useState([]);
  const [selectedHorarioId, setSelectedHorarioId] = useState(null);

  const [selectedBandsSlots, setSelectedBandsSlots] = useState(() => {
    const END_HOUR = "22:00";
    const getNextHour = (hour) => {
      if (hour === END_HOUR) return null;
      const [h] = hour.split(":").map(Number);
      const next = h + 1;
      const formattedNext = `${next.toString().padStart(2, "0")}:00`;
      return formattedNext > END_HOUR ? null : formattedNext;
    };
    const slots = [];
    let hour = "16:00";
    while (hour <= END_HOUR) {
      slots.push({ start_time: hour, band: null });
      hour = getNextHour(hour);
      if (!hour) break;
    }
    return slots;
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null);

  const [allBands, setAllBands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/horarios")
      .then((res) => res.json())
      .then((data) => setHorarios(data))
      .catch((err) => console.error("Error al obtener horarios:", err));

    fetch("http://localhost:8080/api/grupos")
      .then((res) => res.json())
      .then((data) => setAllBands(data))
      .catch((err) => console.error("Error al obtener bandas:", err));
  }, []);

  const handleHorarioClick = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/horarios/${id}`);
      const data = await res.json();

      const END_HOUR = "22:00";
      const getNextHour = (hour) => {
        if (hour === END_HOUR) return null;
        const [h] = hour.split(":").map(Number);
        const next = h + 1;
        const formattedNext = `${next.toString().padStart(2, "0")}:00`;
        return formattedNext > END_HOUR ? null : formattedNext;
      };
      const slots = [];
      let hour = "16:00";
      while (hour <= END_HOUR) {
        const bandForSlot = (data.grupos || []).find(
          (b) => b.start_time === hour
        );
        slots.push({ start_time: hour, band: bandForSlot || null });
        hour = getNextHour(hour);
        if (!hour) break;
      }

      setSelectedBandsSlots(slots);
      setSelectedHorarioId(id);
    } catch (err) {
      console.error("Error al obtener bandas:", err);
    }
  };

  const handleDeleteHorario = async () => {
    if (!selectedHorarioId) return;
    try {
      await fetch(`http://localhost:8080/api/horarios/${selectedHorarioId}`, {
        method: "DELETE",
      });
      setHorarios((prev) =>
        prev.filter((h) => h.id_horario !== selectedHorarioId)
      );
      setSelectedBandsSlots([]);
      setSelectedHorarioId(null);
    } catch (err) {
      console.error("Error al eliminar horario:", err);
    }
  };

  const handleUpdateHorario = async () => {
    if (!selectedHorarioId) return;
    const bandasAActualizar = selectedBandsSlots
      .filter((slot) => slot.band !== null)
      .map((slot) => ({
        ...slot.band,
        start_time: slot.start_time,
      }));

    try {
      const res = await fetch(
        `http://localhost:8080/api/horarios/${selectedHorarioId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            grupos: bandasAActualizar,
          }),
        }
      );
      if (!res.ok) throw new Error("Error al actualizar horario");

      setHorarios((prev) =>
        prev.map((h) =>
          h.id_horario === selectedHorarioId
            ? { ...h, grupos: bandasAActualizar }
            : h
        )
      );

      alert("Horario actualizado correctamente");
    } catch (err) {
      console.error(err);
      alert("Error al actualizar horario");
    }
  };

  const handleOpenModal = (index) => {
    setSelectedSlotIndex(index);
    setModalOpen(true);
  };

  const handleSelectBand = (band) => {
    setSelectedBandsSlots((prev) => {
      const newSlots = [...prev];
      newSlots[selectedSlotIndex].band = band;
      return newSlots;
    });
    setModalOpen(false);
    setSelectedSlotIndex(null);
  };

  const handleRemoveBand = (index) => {
    setSelectedBandsSlots((prev) => {
      const newSlots = [...prev];
      newSlots[index].band = null;
      return newSlots;
    });
  };

  return (
    <>
      <div className="header">
        <NavBar />
      </div>

      <div className="horarios-wrapper">
        {!selectedHorarioId && (
          <>
            <h3 className="horarios-titulo">Seleccione un Horario</h3>
            <div className="cards-grid">
              {horarios.map((horario) => (
                <div
                  key={horario.id_horario}
                  onClick={() => handleHorarioClick(horario.id_horario)}
                >
                  <HorarioCard title={horario.name} />
                </div>
              ))}
            </div>
          </>
        )}

        {selectedHorarioId && (
          <div className="bandas-horario-seleccionado">
            <div className="bandas-header">
              <h3 className="horarios-titulo">
                <button
                  className="back-button"
                  onClick={() => {
                    setSelectedHorarioId(null);
                    setSelectedBandsSlots([]);
                  }}
                >
                  <LeftCircleOutlined />
                </button>
                Bandas en el horario seleccionado
              </h3>
            </div>

            <div className="selected-items">
              {selectedBandsSlots.map((slot, index) => (
                <div key={index} className="slot-container">
                  {slot.band ? (
                    <div className="band-card">
                      <LineupCards
                        previewImage={`/img/${slot.band.img}`}
                        title={slot.band.name}
                        stage={slot.band.stage}
                        startTime={slot.start_time}
                        endTime={slot.band.end_time}
                      />
                      <button
                        className="remove-button"
                        onClick={() => handleRemoveBand(index)}
                      >
                        <CancelFloatingButtonton />
                      </button>
                    </div>
                  ) : (
                    <div className="add-button-slot">
                      <p className="start-time">{slot.start_time} </p>
                      <button
                        className="floating-button"
                        onClick={() => handleOpenModal(index)}
                      >
                        <AddFloatingButtonton />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="button-group">
              <button
                className="delete-horario-button"
                onClick={handleDeleteHorario}
              >
                BORRAR
              </button>
              <button
                className="update-horario-button"
                style={{ marginLeft: "1rem" }}
                onClick={handleUpdateHorario}
                disabled={selectedBandsSlots.some((slot) => slot.band === null)}
              >
                ACTUALIZAR
              </button>
            </div>
          </div>
        )}

        <BandSelector isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <h2 style={{ textAlign: "center" }}>
            Bandas a las{" "}
            {selectedSlotIndex !== null
              ? selectedBandsSlots[selectedSlotIndex].start_time
              : ""}
          </h2>

          <div className="selector-content">
            {selectedSlotIndex !== null &&
            allBands.filter(
              (band) =>
                band.start_time ===
                selectedBandsSlots[selectedSlotIndex].start_time
            ).length === 0 ? (
              <p>
                No hay bandas programadas a las{" "}
                {selectedBandsSlots[selectedSlotIndex].start_time}.
              </p>
            ) : (
              selectedSlotIndex !== null &&
              allBands
                .filter(
                  (band) =>
                    band.start_time ===
                    selectedBandsSlots[selectedSlotIndex].start_time
                )
                .map((band, index) => (
                  <div
                    key={band.id}
                    onClick={() => handleSelectBand(band)}
                    style={{ cursor: "pointer" }}
                  >
                    <LineupCards
                      previewImage={`/img/${band.img}`}
                      title={band.name}
                      stage={band.stage}
                      startTime={band.start_time}
                      endTime={band.end_time}
                    />
                    {index !==
                      allBands.filter(
                        (b) =>
                          b.start_time ===
                          selectedBandsSlots[selectedSlotIndex].start_time
                      ).length -
                        1 && (
                      <p style={{ textAlign: "center", margin: "1rem 0" }}>
                        ~ OR ~
                      </p>
                    )}
                  </div>
                ))
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button onClick={() => setModalOpen(false)}>
              <CancelFloatingButtonton />
            </button>
          </div>
        </BandSelector>
      </div>

      <div className="bottom-menu">
        <BottomMenu />
      </div>
    </>
  );
}

export default HorariosPage;
