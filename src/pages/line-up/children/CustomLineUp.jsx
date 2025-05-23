import React, { useState, useEffect } from "react";
import BottomMenu from "../../../components/bottommenu/BottomMenu";
import DayLineupBar from "../../../components/day-lineup-bar/DayLineupBar";
import AddFloatingButtonton from "../../../components/floating-buttons/add-button/AddFloatingButton";
import NavBar from "../../../components/navbar/NavBar";
import BandSelector from "../../../components/modals/band-selection/BandSelector";
import LineupCards from "../../../components/list-items/lineup-cards/LineupCards";
import CancelFloatingButtonton from "../../../components/floating-buttons/cancel-button/CancelFloatingButton";
import "./CustomLineUp.css";
import { CheckCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


function CustomLineUp() {
  const [isFinalModalOpen, setFinalModalOpen] = useState(false);
  const [scheduleName, setScheduleName] = useState("");
  const navigate = useNavigate();

  const [bands, setBands] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [days, setDays] = useState([]);
  const [currentDayId, setCurrentDayId] = useState(1);
  const [selectedBands, setSelectedBands] = useState([]);
  const [currentHour, setCurrentHour] = useState("16:00");
  const END_HOUR = "23:00";

  const getNextHour = (hour) => {
    if (hour === END_HOUR) return null;
    const [h] = hour.split(":").map(Number);
    const next = h + 1;
    const formattedNext = `${next.toString().padStart(2, "0")}:00`;
    return formattedNext > END_HOUR ? null : formattedNext;
  };

  const nextHour = getNextHour(currentHour);
  const showAddButton = nextHour !== null;
  const isScheduleComplete = currentHour === null || nextHour === null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bandsResponse, daysResponse] = await Promise.all([
          fetch("http://localhost:8080/api/grupos"),
          fetch("/data/days-data.json"),
        ]);
        if (!bandsResponse.ok || !daysResponse.ok)
          throw new Error("Error al cargar bandas");
        const bandsData = await bandsResponse.json();
        const daysData = await daysResponse.json();
        setBands(bandsData);
        setDays(daysData);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };
    fetchData();
  }, []);

  const changeDay = (direction) => {
    setCurrentDayId((prev) => {
      const newDayId = prev + direction;
      return newDayId < 1 ? days.length : newDayId > days.length ? 1 : newDayId;
    });
  };

  const handleSelectBand = (band) => {
    setSelectedBands((prev) => [...prev, band]);
    if (nextHour) setCurrentHour(nextHour);
    setModalOpen(false);
  };

  const bandsFilteredByTime = bands.filter(
    (band) => band["start_time"] === currentHour
  );

  const handleFinalizeSchedule = () => {
    if (!isScheduleComplete) {
      alert("Debes completar el horario antes de guardarlo.");
    } else {
      setFinalModalOpen(true);
    }
  };

  const handleSaveSchedule = async () => {
  const payload = {
    name: scheduleName,
    grupos: selectedBands.map((band) => ({ id: band.id })),
  };

  console.log(
    "Payload que se enviará al backend:",
    JSON.stringify(payload, null, 2)
  );

  try {
    const response = await fetch("http://localhost:8080/api/horarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert("Horario guardado con éxito");
      setFinalModalOpen(false);
      setSelectedBands([]);
      setScheduleName("");
      setCurrentHour("16:00");

      navigate("/saved-lineup");
    } else {
      alert("Error al guardar el horario.");
    }
  } catch (error) {
    console.error("Error al guardar el horario:", error);
  }
};

  return (
    <>
      <div className="header">
        <NavBar />
      </div>

      <div className="lineup-wrapper">
        <div className="lineup-container">
          <div className="day-lineup-container">
            <DayLineupBar
              currentDay={days.find(
                (day) => day.id === currentDayId.toString()
              )}
              changeDay={changeDay}
            />
          </div>

          <div className="selected-bands">
            {days.map((day) => (
              <div
                className={`day-column ${
                  currentDayId.toString() === day.id ? "active" : ""
                }`}
                key={day.id}
              >
                <h4
                  role="heading"
                  className="day-title"
                  style={{
                    fontFamily: "MetalMania, sans-serif",
                    color: "RGB(239, 176, 98)",
                  }}
                >
                  {day.day}
                </h4>
              </div>
            ))}

            {selectedBands.map((band) => (
              <LineupCards
                previewImage={`/img/${band.img}`}
                title={band.name}
                stage={band.stage}
                startTime={band.start_time}
                endTime={band.end_time}
              />
            ))}
          </div>

          {showAddButton && (
            <div className="floating-button-wrapper">
              <button
                className="floating-button"
                onClick={() => setModalOpen(true)}
              >
                <AddFloatingButtonton />
              </button>
            </div>
          )}

          <BandSelector
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          >
            <h2 style={{ textAlign: "center" }}>Bandas a las {currentHour}</h2>

            {bandsFilteredByTime.length === 0 ? (
              <p>No hay bandas programadas a las {currentHour}.</p>
            ) : (
              bandsFilteredByTime.map((band, index) => (
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
                  {index !== bandsFilteredByTime.length - 1 && (
                    <p style={{ textAlign: "center", margin: "1rem 0" }}>
                      ~ OR ~
                    </p>
                  )}
                </div>
              ))
            )}

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button onClick={() => setModalOpen(false)}>
                <CancelFloatingButtonton />
              </button>
            </div>
          </BandSelector>
        </div>
        <div className="buttons-container">
          <a href="/line-up">
            <LeftCircleOutlined />
          </a>

          <button onClick={handleFinalizeSchedule}>
            <CheckCircleOutlined />
          </button>

        </div>
      </div>

      <div className="bottom-menu">
        <BottomMenu />
      </div>

      {isFinalModalOpen && (
        <div className="final-modal">
          <div className="final-modal-content">
            <h2>Nombre del horario</h2>
            <input
              type="text"
              value={scheduleName}
              onChange={(e) => setScheduleName(e.target.value)}
              placeholder="Introduce un nombre"
            />

            <div className="final-modal-buttons">
              <button onClick={() => setFinalModalOpen(false)}>
                <CancelFloatingButtonton />
              </button>
              <button onClick={handleSaveSchedule}>
                <CheckCircleOutlined />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomLineUp;
