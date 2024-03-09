import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const [visibleLetters, setVisibleLetters] = useState([]);

  useEffect(() => {
    const timeoutIds = strArray.map((letter, index) => {
      return setTimeout(() => {
        setVisibleLetters((prevVisibleLetters) => [...prevVisibleLetters, letter]);
      }, 200 * index); // Ajuste o tempo conforme necessário
    });

    // Limpeza dos timeouts para evitar vazamentos de memória
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [strArray]);

  return (
    <>
      {visibleLetters.map((letter, index) => (
        <span key={index} className={`${letterClass} _${idx + index}`}>
          {letter}
        </span>
      ))}
    </>
  );
};

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const jobArray = [
    'I',
    '',
    'A',
    'm',
    '',
    'a',
    '',
    'D',
    'a',
    't',
    'a',
    '',
    'A',
    'n',
    'a',
    'l',
    'y',
    's',
    't'
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _12`}>Hi,</span>
            <br />
            <span className={`${letterClass} _13`}>My Name's Daniel.</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Machine Learning Enthusiastic</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
