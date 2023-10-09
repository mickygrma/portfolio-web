import React, { useEffect, useState, useRef } from "react";
import "./about.css";
import { FaAngleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    AOS.init();
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, options);

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section id="about">
      <div className="about-container">
        <div className="title">
          <h1>About</h1>
          <p>
            I'm an illustrator, Graphics, and motion design artist with over 3
            years of experience in creating awesome artwork. I'm always excited
            to take on new artistic projects and bring my creativity to the
            table. With a solid background in design software and technical and
            communicational aspects of the creative process, I can adapt to many
            different styles according to what the project requires! this
            website include my latest artistic design projects
          </p>
        </div>
        <div className="content">
          <img
            src="img/profile-img.jpg"
            alt=""
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
          <div
            className="details"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h1>Illustrator | Designer</h1>
            <p>
              As a creative designer, I possess a diverse range of skills
              that empower me to deliver exceptional results. I thrive on the
              challenges presented by the ever-evolving digital landscape and
              continuously strive for excellence in every project I undertake.
            </p>
            <div className="info">
              <ul>
                <li>
                  <FaAngleRight />
                  <strong>Email :</strong>mickygir@gmial.com
                </li>
                <li>
                  <FaAngleRight />
                  <strong>Phone : </strong>+2519 23029041
                </li>
                <li>
                  <FaAngleRight />
                  <strong>Address :</strong>Addis Ababa, Ethiopia{" "}
                </li>
              </ul>
            </div>
            <p>
              Thank you for visiting my portfolio website. I would love to
              discuss your project ideas and collaborate on creating a
              remarkable designs for your brand. Feel free to reach out to me
              through the contact details provided. Let's bring your imagination
              to life!
            </p>
          </div>
        </div>
      </div>

      <section id="skill">
        <div className="about-container">
          <div className="title">
            <h1>Skills</h1>
            <p>
              As a creative designer, I possess a diverse range of skills that
              empower me to deliver exceptional results. I thrive on the
              challenges presented by the ever-evolving digital landscape and
              continuously strive for excellence in every project I undertake.
            </p>
          </div>
          <div className="skill">
            <div className="skill-list">
              <div className="skill-item photoshop">
                <div className="sktill-title">
                  <h4>Photoshop</h4>
                  <h4>100%</h4>
                </div>
                <div className="progressbar" ref={progressRef}>
                  <div  className={`percentage ${isVisible ? "potho" : ""}`}></div>
                </div>
              </div>
              <div className="skill-item illustrator">
                <div className="sktill-title">
                  <h4>Illustrator</h4>
                  <h4>85%</h4>
                </div>
                <div className="progressbar" ref={progressRef}>
                  <div className={`percentage ${isVisible ? "illust" : ""}`}></div>
                </div>
              </div>

              <div className="skill-item premiere-pro">
                <div className="sktill-title">
                  <h4>Premiere Pro</h4>
                  <h4>80%</h4>
                </div>
                <div className="progressbar" ref={progressRef}>
                  <div className={`percentage ${isVisible ? "premiere" : ""}`}></div>
                </div>
              </div>
            </div>

            <div className="skill-list">
              <div className="skill-item after-effects">
                <div className="sktill-title">
                  <h4>After Effects</h4>
                  <h4>70%</h4>
                </div>
                <div className="progressbar" ref={progressRef}>
                  <div className={`percentage ${isVisible ? "after" : ""}`}></div>
                </div>
              </div>
              <div className="skill-item blender">
                <div className="sktill-title">
                  <h4>Blender</h4>
                  <h4>70%</h4>
                </div>
                <div className="progressbar" ref={progressRef}>
                  <div className={`percentage ${isVisible ? "blend" : ""}`}></div>
                </div>
              </div>

              <div className="skill-item java">
                <div className="sktill-title">
                  <h4>Java</h4>
                  <h4>70%</h4>
                </div>
                <div className="progressbar" ref={progressRef}>
                  <div className={`percentage ${isVisible ? "ja" : ""}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
