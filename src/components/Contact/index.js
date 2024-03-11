import React, { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    // Adicionar validações de formulário, se necessário

    emailjs
      .sendForm('service_eyrz1sx', 'template_6h0ma5t', form.current, 'fsxqf3mSrk4anlSC7')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          alert('Message successfully sent!');
          // Redirecionar o usuário para uma página de confirmação, se desejado
        },
        (error) => {
          console.error('Failed to send the message:', error);
          alert('Failed to send the message, please try again');
        }
      );

    // Limpar o formulário
    e.target.reset();
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            "I am excited about exploring opportunities in software development and data analysis,
            particularly in ambitious or large-scale projects but also open for new things. After
            completing my degree in Information Technology and earning Higher diploma in Data Science,
            I am ready to apply my knowledge and skills in a professional setting. I am eager to embark
            on my first professional experience, contributing to challenging projects and collaborating
            within innovative teams. If you have other requests or questions, please feel free to reach
            out to me using the form below. I am open to opportunities that allow me to grow and learn
            while contributing to project success. I look forward to embracing new challenges and making
            a positive impact on your team.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Daniel Santos,
          <br />
          Ireland,
          <br />
          <br />
          Chapelizod DUBLIN 20<br />
          <br />
          <span>danieldecooo@gmail.com</span>
        </div>
        <div className="map-wrap">
          {/* Seu mapa ou componente de mapa vai aqui */}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
