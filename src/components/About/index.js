import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faReact, faCss3Alt, faHtml5, faJs, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello! I'm a dynamic Front-End Developer and Data Analyst with an insatiable passion for crafting engaging user experiences and extracting insights from data.
            I am actively seeking exciting opportunities within an established IT company, where I can leverage cutting-edge technologies and tackle diverse challenges.
            My approach is marked by ambition and a genuine enthusiasm for Front-End development, constantly refining my skills in design and problem-solving.
          </p>
          <p align="LEFT">
            As a Data Analyst, my work is driven by a natural curiosity, delving into data to uncover valuable insights and empower informed decision-making.
            If I were to sum myself up in one sentence? A dedicated professional, a research enthusiast, and committed to devising innovative solutions!
          </p>
          <p>
            I'm eager to contribute to impactful projects and collaborate with teams on challenging endeavors. Let's create something extraordinary together! 🚀
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJava} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
