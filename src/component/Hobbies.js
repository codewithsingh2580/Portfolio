import React from "react";

function Hobbies() {
  return (
    <div className="container">
      <div className="row">
        <h3 class="hobby-title text-center">Hobbies & Interests</h3>
        <div class="hobby-container">
          <div class="hobby-box">
            <i class="fas fa-cricket-bat-ball"></i>
            <p>Playing Cricket</p>
          </div>
          <div class="hobby-box">
            <i class="fas fa-music"></i>
            <p>Listening to Songs</p>
          </div>
          <div class="hobby-box">
            <i class="fas fa-film"></i>
            <p>Watching Movies</p>
          </div>
          <div class="hobby-box">
            <i class="fas fa-book"></i>
            <p>Reading Books</p>
          </div>
          <div class="hobby-box">
            <i class="fas fa-code"></i>
            <p>Coding & Learning Tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
