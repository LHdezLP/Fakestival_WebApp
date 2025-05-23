/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import BottomMenu from "../../components/bottommenu/BottomMenu";
import DayLineupBar from "../../components/day-lineup-bar/DayLineupBar";
import Footer from "../../components/footer/Footer";
import LineupCards from "../../components/list-items/lineup-cards/LineupCards";
import NavBar from "../../components/navbar/NavBar";
import "./LineUp.css";
import { Link } from "react-router-dom";

function LineUp() {
  const [bands, setBands] = useState([]);
  const [days, setDays] = useState([]);
  const [currentDayId, setCurrentDayId] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bandsResponse, daysResponse] = await Promise.all([
          fetch("http://localhost:8080/api/grupos"),
          fetch("/data/days-data.json"),
        ]);

        if (!bandsResponse.ok || !daysResponse.ok) {
          throw new Error("Error al cargar los datos");
        }

        const bandsData = await bandsResponse.json();
        const daysData = await daysResponse.json();

        const sortedBands = bandsData.sort((a, b) =>
          a.start_time.localeCompare(b.start_time)
        );

        setBands(sortedBands);
        setDays(daysData);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      } finally {
        setLoading(false);
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

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="lineup-wrapper">
        <div className="day-lineup-container">
          <DayLineupBar
            currentDay={days.find((day) => day.id === currentDayId.toString())}
            changeDay={changeDay}
          />
        </div>

        <div className="lineup-cards-grid">
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

              {bands
                .filter((band) => band.day.toString() === day.id.toString())
                .map((band) => (
                  <div
                    className="band-schedule-container"
                    key={`${band.name}-${band.start_time}`}
                  >
                    <LineupCards
                      previewImage={`/img/${band.img}`}
                      title={band.name}
                      stage={band.stage}
                      startTime={band.start_time}
                      endTime={band.end_time}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
        <div className="custom-lineup-button">
          <Link to="/custom-lineup" className="button-link">
            <p className="custom-button-text">CREA TU PROPIO HORARIO</p>
          </Link>
        </div>

        <Footer className="lineup-footer" />
      </div>
      <div className="bottom-menu">
        <BottomMenu />
      </div>
    </>
  );
}

export default LineUp;
