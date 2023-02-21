import { useState, useEffect } from "react";
import { AreaOfChoiceFilter } from "./AreaOfChoiceFilter";
import { MeetupsList } from "./MeetupsList";
import './Meetups.css'


export const AllMeetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [filteredAreas, setFilteredAreas] = useState([]);
  const [areaOfTowns, setAreaOfTowns] = useState([]);

  const [areaChoice, setAreaChoice] = useState(0);

  useEffect(() => {
    
    fetch(`http://localhost:8088/meetups`)
      .then((res) => res.json())
      .then((meetupsArray) => {
        setMeetups(meetupsArray);
      });

    fetch("http://localhost:8088/areaOfTown")
      .then((res) => res.json())
      .then((data) => {
        setAreaOfTowns(data);
      });
  }, []);

  useEffect(() => {
    if (areaChoice === 0) {
      setFilteredAreas(meetups);
    } else {
      const chosenMeetupAreas = meetups.filter(
        (meetup) => meetup.areaOfTownId === areaChoice
      );
      setFilteredAreas(chosenMeetupAreas); //[]
    }
  }, [areaChoice, meetups]);

  return (
    <>
      <AreaOfChoiceFilter
        areaChoice={areaChoice}
        setAreaChoice={setAreaChoice}
        areaOfTowns={areaOfTowns}
      />
      <MeetupsList
        areaChoiceArray={areaOfTowns}
        filteredAreasArray={filteredAreas}
      />
    </>
  );
};
