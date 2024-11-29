import React, { useEffect, useState } from "react";
import BottomMenu from "../../components/bottommenu/BottomMenu";
import DayLineupBar from "../../components/day-lineup-bar/DayLineupBar";
import Footer from "../../components/footer/Footer";
import LineupCards from "../../components/list-items/lineup-cards/LineupCards";
import NavBar from "../../components/navbar/NavBar";
import "./LineUp.css";

function LineUp() {
  const [bands, setBands] = useState([]);
  const [days, setDays] = useState([]);
  const [currentDayId, setCurrentDayId] = useState(1); 
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bandsResponse, daysResponse] = await Promise.all([
          fetch("/data/bands-data.json"),
          fetch("/data/days-data.json"),
        ]);

        if (!bandsResponse.ok || !daysResponse.ok) {
          throw new Error("Error al cargar los archivos JSON");
        }

        const bandsData = await bandsResponse.json();
        const daysData = await daysResponse.json();

        
        const sortedBands = bandsData.sort((a, b) =>
          a["start-time"].localeCompare(b["start-time"])
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

  
  const filteredBands = bands.filter(
    (band) => band["playing-day"] === currentDayId.toString()
  );

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

        
        {filteredBands.map((band) => (
          <div className="band-schedule-container" key={band.id}>
            <LineupCards
              previewImage={band["preview-image"]}
              title={band.title}
              stage={band.stage}
              startTime={band["start-time"]}
              endTime={band["end-time"]}
            />
          </div>
        ))}

        <Footer />
      </div>

      <div className="bottom-menu">
        <BottomMenu />
      </div>
    </>
  );
}

export default LineUp;
