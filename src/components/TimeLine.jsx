import React from "react";

const TimeLine = () => {
  return (
    <div className=" ">
      <div className="timeline-header">
        <div className="timeline-header-title">
          <h2>Timeline</h2>
          <p>
            Here is the breakdown of the time we anticipate using the upcoming
            event
          </p>
        </div>
        <NewsOdd
          title="Hachathon Annoucement"
          details="The getlinked tech hackathon 1.0 is formally announced to the general
          public and teams begin to get ready to register"
          date="November 18, 2023"
          index="1"
        />
        <NewsEven
          title="Teams Registration begins"
          details="Interested teams can now show their interest in the
getlinked tech hackathon 1.0 2023 by proceeding to register"
          date="November 18, 2023"
          index="2"
        />
        <NewsOdd
          title="Teams Registration ends"
          details="Interested Participants are no longer Allowed to
register"
          date="November 18, 2023"
          index="3"
        />
        <NewsEven
          title="Announcement of the accepted teams
          and ideas"
          details="All teams whom idea has been accepted into getlinked tech
hackathon 1.0 2023 are formally announced"
          date="November 18, 2023"
          index="4"
        />
        <NewsOdd
          title="Getlinked Hackathon 1.0 Offically Begins"
          details="Accepted teams can now proceed to build their
ground breaking skill driven solutions"
          date="November 18, 2023"
          index="5"
        />
        <NewsEven
          title="Demo Day"
          details="Teams get the opportunity to pitch their projects to judges.
The winner of the hackathon will also be announced on
this day"
          date="November 18, 2023"
          index="6"
        />
      </div>
      <div className="timeline-floating-line"></div>
    </div>
  );
};

export default TimeLine;

function NewsOdd({ title, details, date, index }) {
  return (
    <div className="even-timeline">
      <div className="even-left">
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
      <div className="even-center">
        <div className="solid-line"></div>
        <div className="index">{index}</div>
      </div>
      <div className="even-right">{date}</div>
    </div>
  );
}

function NewsEven({ title, details, date, index }) {
  return (
    <div className="odd-timeline">
      <div className="odd-left">{date}</div>
      <div className="odd-center">
        <div className="solid-line"></div>
        <div className="index">{index}</div>
      </div>
      <div className="odd-right">
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
}
