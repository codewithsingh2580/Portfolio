import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './component/Header';
import Education from './component/Education';
import Skill from './component/Skill';
import Hobbies from './component/Hobbies';
import Achivement from './component/Achivement';
import Footer from './component/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div>
      <Header />
      <Education />
      <Skill />
      <Hobbies />
      <Achivement/>
      <Footer />
    </div>
  </>
);

