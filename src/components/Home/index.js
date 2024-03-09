import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const nameArray = ['D', 'A', 'N', 'I', 'E', 'L']
  const jobArray = [
    'I',
    '',
    'A',
    'M',
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
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

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
  )
}

export default Home