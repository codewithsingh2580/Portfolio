import React from 'react'


function Education() {
    return ( 
  <div className="container">
  <h2 className="main-edu text-center mb-4">Education</h2>
  <div className="row">
    {[
      {
        school: "Bihar Public School",
        year: "2016-2017",
        degree: "10 class (CBSE)",
        grade: "8 CGPA",
        progress: 80,
      },
      {
        school: "Shree Mahendra Das Degree College",
        year: "2017-2019",
        degree: "12 class (BSEB)",
        grade: "50%",
        progress: 50,
      },
      {
        school: "RKDF University Bhopal",
        year: "2022-2025",
        degree: "Bachelor of Engineering",
        grade: "7.5 CGPA",
        progress: 75,
      },
    ].map((edu, index) => (
      <div key={index} className="col-md-4">
        <div className="edu-box p-3 shadow rounded d-flex flex-column">
          <h4 className="sc-name">{edu.school}</h4>
          <p className="">{edu.year}</p>
          <p>
            <b>{edu.degree}:</b> {edu.grade}
          </p>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              style={{ width: `${edu.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      //   <section className="main-sections">
      //   <h2 className="main-edu">Education</h2>
      //   <div className="main-div">
      //     {[{
      //       school: "Bihar Public School",
      //       year: "2016-2017",
      //       degree: "10 class (CBSE)",
      //       grade: "8 cgpa",
      //       progress: 80
      //     }, {
      //       school: "Shree Mahendra Das Degree College",
      //       year: "2017-2019",
      //       degree: "12 class (BSEB)",
      //       grade: "50%",
      //       progress: 50
      //     }, {
      //       school: "RKDF University Bhopal",
      //       year: "2022-2025",
      //       degree: "Bachelor of Engineering",
      //       grade: "7.5 cgpa",
      //       progress: 75
      //     }].map((edu, index) => (
      //       <div key={index} className="main">
      //         <div className="sc-name">
      //           {edu.school}
      //           <p>{edu.year}</p>
      //         </div>
      //         <li>
      //           <b>{edu.degree} :</b> {edu.grade}
      //         </li>
      //         <div className="progress digree">
      //           <div className="progress-bar bg-success" style={{ width: `${edu.progress}%` }}></div>
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      // </section>
     );
}

export default Education;