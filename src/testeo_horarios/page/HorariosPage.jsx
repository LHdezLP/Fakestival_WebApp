import { useEffect, useState } from "react";
import HorarioCard from "../components/HorarioCard";
import "./HorariosPage.css";
import LineupCards from "../../components/list-items/lineup-cards/LineupCards";

function HorariosPage() {
  const [horarios, setHorarios] = useState([]);
  const [selectedBands, setSelectedBands] = useState([]);
  const [selectedHorarioId, setSelectedHorarioId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/horarios")
      .then((res) => res.json())
      .then((data) => setHorarios(data))
      .catch((err) => console.error("Error al obtener horarios:", err));
  }, []);

  const handleHorarioClick = async (id) => {
    try {
      const res = await fetch(`http://localhost:8080/api/horarios/${id}`);
      const data = await res.json();
      setSelectedBands(data.grupos || []);
      setSelectedHorarioId(id);
    } catch (err) {
      console.error("Error al obtener bandas:", err);
    }
  };

  return (
    <div className="horarios-wrapper">
      <div className="cards-grid">
        {horarios.map((horario) => (
          <div key={horario.id_horario} onClick={() => handleHorarioClick(horario.id_horario)}>
            <HorarioCard title={horario.name} />
          </div>
        ))}
      </div>

      {selectedBands.length > 0 && (
        <div className="bandas-horario-seleccionado">
          <h3 style={{ fontFamily: "MetalMania", color: "orange" }}>
            Bandas en el horario seleccionado
          </h3>
          {selectedBands
            .slice()
            .sort((a, b) => a.start_time.localeCompare(b.start_time))
            .map((banda) => (
              <LineupCards
                key={banda.id}
                previewImage={`/img/${banda.img}`}
                title={banda.name}
                stage={banda.stage}
                startTime={banda.start_time}
                endTime={banda.end_time}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default HorariosPage;
