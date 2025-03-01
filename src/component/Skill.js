import React from "react";

function Skill() {
  return (
    <div className="container">
    <h3 className="second text-center mb-4">Skill</h3>
    <div className="row d-flex flex-wrap justify-content-center">
      {[
        {
          name: "HTML",
          progress: 80,
          image: "./media/images/pngegg.png",
          color: "bg-danger", // Red
        },
        {
          name: "CSS",
          progress: 70,
          image: "./media/images/pngegg(2).png",
          color: "bg-primary", // Blue
        },
        {
          name: "JavaScript",
          progress: 70,
          image: "./media/images/pngegg(1).png",
          color: "bg-warning", // Yellow
        },
        {
          name: "Nodejs",
          progress: 75,
          image: "./media/images/nodejs.png",
          color: "bg-success", // Green
        },
        {
          name: "Expressjs",
          progress: 60,
          image: "./media/images/expressjs.png",
          color: "bg-secondary", // Gray
        },
        {
          name: "Reactjs",
          progress: 50,
          image: "./media/images/React.png",
          color: "bg-info", // Teal
        },
        {
          name: "MongoDB",
          progress: 50,
          image: "./media/images/mongodb.png",
          color: "bg-dark", // Black
        },
        {
          name: "SQL",
          progress: 40,
          image: "./media/images/sql.png",
          color: "bg-purple", // Custom Purple (You can define this in CSS)
        },
      ].map((skill, index) => (
        <div key={index} className="col-md-3 d-flex">
          <div className="cd p-3 shadow rounded text-center w-100">
            <img src={skill.image} alt={skill.name} width="80px" height="80px" />
            <p className="mt-2">
              <b>{skill.name}</b> - {skill.progress}%
            </p>
            <div className="progress">
              <div
                className={`progress-bar ${skill.color}`} // Dynamic color
                style={{ width: `${skill.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Skill;
