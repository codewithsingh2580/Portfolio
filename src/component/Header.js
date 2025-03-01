import React from 'react'

function Header() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 text-center fw-bold fs-3 firstbox">
          <p>
              "I’m <span className="name">Sonu Singh</span>, a passionate developer who loves
              building creative and efficient web solutions. Every line of code I
              write is a step toward innovation, turning ideas into reality."
            </p>
          </div>
          <div className="col-6 second">
             <img src="./media/images/bg-removebg.png" alt="" className='hdimage' />
          </div>
        </div>
      </div>
     );
}

export default Header;