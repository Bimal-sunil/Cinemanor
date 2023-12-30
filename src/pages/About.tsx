/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SubHeader from "../components/SubHeader";
import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      <img src="assets/logo.png" alt="" className="about-logo" />
      <div className="about">
        <SubHeader title={"About Us"} />
        <p className="about-content">
          Welcome to Cinemanor, <br />
          <br />
          At Cinemanor, we're passionate about movies. Our website is dedicated
          to bringing the magic of cinema right to your screen. Whether you're a
          casual moviegoer, a dedicated film enthusiast, or someone in search of
          the next cinematic masterpiece, Cinemanor is your ultimate
          destination. <br />
          <br /> Discovering your next favorite film has never been easier. With
          our intelligent search algorithms, we analyze a vast database of
          movies, ensuring accurate and relevant results with every search. From
          the latest Hollywood blockbusters to independent gems, classics, and
          cult favorites, Cinemanor has a wide selection to suit every taste.{" "}
          <br />
          <br />
          But we don't stop at search. Cinemanor personalizes your movie
          experience, providing tailored recommendations based on your unique
          preferences. Say goodbye to endless scrolling and wasted hours. Let us
          introduce you to captivating films that will entertain and inspire.{" "}
          <br />
          <br />
          Each film listing on Cinemanor is packed with essential information.
          From comprehensive synopses and cast details to trailers, ratings, and
          reviews, we provide everything you need to make an informed decision.
          Delve into the world of cinema with confidence, knowing that every
          choice you make is backed by reliable data and expert opinions. <br />
          <br />
          Cinemanor is designed to be accessible and convenient. Our website is
          optimized for desktop and mobile devices, allowing you to enjoy
          seamless browsing and movie exploration wherever you are. Whether
          you're at home, on the go, or planning a movie night with friends,
          Cinemanor ensures that you never miss a beat in the world of film.{" "}
          <br />
          <br />
          Join us on this cinematic journey and let Cinemanor be your trusted
          companion in the realm of movies. Start exploring, discovering, and
          experiencing the magic of cinema like never before. Cinemanor: Your
          gateway to a world of movies awaits.
        </p>
      </div>
      <div className="contact">
        <SubHeader title="Contact Us" />
        <div className="contact-content">
          <div className="address">
            <i className="uil uil-location-point"></i>
            <span>
              Cinemanor Inc. <br />
              123 Silver Screen Avenue <br />
              Cinemapolis, CA 98765 <br />
              United States
            </span>
          </div>
          <div className="social">
            <i className="uil uil-twitter-alt"></i>
            <i className="uil uil-instagram"></i>
            <i className="uil uil-facebook-f"></i>
            <i className="uil uil-linkedin-alt"></i>
          </div>
          <div className="primary-contact">
            <div className="email">
              <i className="uil uil-envelope-alt"></i>
              <span> info@cinemanor.com</span>
            </div>
            <div className="phone">
              <i className="uil uil-phone-alt"></i>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
