import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <section id="resume">
      <div className="about-container">
        <div className="title">
          <h1>Resume</h1>
          {/* <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p> */}

          <div className="row">
            <div className="column">
              {/* <div className="summary">
                <h1>Summary</h1>
                <div className="item">
                  <h3>Mickias Girma</h3>
                  <p>
                    Illustrator and design artist that is eager to work on any
                    artistic project. My portfolio includes Illustration,
                    Drawing, Graphic design layouts and Character design.
                  </p>
                  <ul>
                    <li>Ethiopia Addis Ababa</li>
                    <li>+251 923029041</li>
                    <li>mikcygir@gmail.com</li>
                  </ul>
                </div>
              </div> */}

              <div className="summary">
                <h1>Education</h1>
                <div className="column">
                  <div className="item">
                  <div className="company">
                    <h3>ArbaMinch University</h3>
                      <img className="amu" src="img/AMU'.png" alt="" />
                    </div>
                      <h4>BSc in Electrical & computer engrg</h4>
                    <h5>2016-2021</h5>
                    <p>
                    As an electrical and computer engineer, I possess expertise in circuit design, analysis, troubleshooting, and computer architecture. I am proficient in engineering software and programming languages, with experience in hardware and software solutions. With strong problem-solving abilities and interdisciplinary teamwork skills, I am well-equipped to contribute to diverse engineering projects.
                    </p>
                  </div>

                  <div className="item">
                    <h3>Google Digital Garage</h3>
                    <h5>June 2023</h5>
                    <div className="company">
                      <h4>The Fundamentals of Digital Marketing </h4>
                      <img className="logo" src="img/google.png" alt="" />
                    </div>
                    <p>
                    Completing courses on Google Digital Garage has equipped me with valuable skills in digital marketing, including SEO, social media marketing, content creation, and analytics. I can optimize website content, engage target audiences on social media, create compelling content, and analyze data to drive marketing success. These skills enable me to contribute effectively to marketing initiatives and achieve business growth in the digital landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="experience">
                <h1>Proffesional Experience</h1>
                <div className="column">
                  <div className="item">
                    <h3>Graphic Designer</h3>
                    <h5>June 2023-present</h5>
                    <div className="company">
                    <h4>Red Cloud | Full Time</h4>
                      <img className="logo" src="img/CNET.png" alt="" />
                    </div>
                    <ul>
                      <li>
                        Created visually appealing designs for a variety of
                        digital and print materials, including website graphics,
                        social media assets, infographics, presentations,
                        brochures, and advertisements.
                      </li>
                      <li>
                        Worked closely with the UI/UX team to ensure consistent
                        branding and visual aesthetics across all digital
                        platforms and products.
                      </li>
                      <li>
                        Collaborated with the marketing team to develop creative
                        concepts and design solutions that effectively
                        communicated our brand message and marketing campaigns.
                      </li>
                      <li>
                        Take ownership of Graphics and motion design projects
                        from concept to completion, ensuring timely delivery and
                        adherence to brand guidelines.
                      </li>
                      <li>
                      Created a Brand guideline for new projects.
                      </li>
                      <li>
                      Managed Junior Graphic Designers
                      </li>
                    </ul>
                  </div>

                  <div className="item">
                    <h3>StoryBoard Artist | Graphics Designer</h3>
                    <h5>March 2023 - Present</h5>
                    <div className="company">
                    <h4>G Media | Contract</h4>
                      <img className="logo" src="img/Gmedia.png" alt="" />
                    </div>
                    <ul>
                      <li>
                        Collaborated with marketing strategists and clients to
                        understand project requirements, target audience, and
                        brand guidelines.
                      </li>
                      <li>
                        Produced high-quality visual assets that maintained
                        brand consistency and adhered to project timelines.
                      </li>
                      <li>
                        Broke down the script with the director to identify key
                        scenes and planned them visually.
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Junior Graphics Designer | Illustrator</h3>
                    <h5>0ct 2022 - Present</h5>
                    <div className="company">
                    <h4>KODASTROPI Marketing solution| Remote</h4>
                      <img className="logo" src="img/Kodastropi.png" alt="" />
                    </div>
                    <ul>
                    <li className="bold">
                    Creative Content Design
                      </li>
                      <li>
                        Support the implementation of client marketing plan (in
                        accordance with company strategy)
                      </li>
                      <li>
                        Produce graphic content and digital illustrations for
                        various product from Brand development to internal and
                        external communications including product development
                      </li>
                      <li className="bold">
                      Support Project Management and Reporting
                      </li>
                      <li>
                        Support Creative Director to develop weekly or monthly
                        communications on current projects at hand with clear
                        timeline and progress as may be requested by the line
                        manager for management and client representatives.
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <h3>Illustrator | Sketch artist</h3>
                    <h5>Dec 2021 - Sep 2022</h5>
                    <div className="company">
                    <h4>Mama Care INC</h4>
                      <img className="logo" src="img/Mamacare.png" alt="" />
                    </div>
                    <ul>
                      <li>
                        Discussed project ideas and goals with each client, and
                        turn these visions into real visual designs that meet
                        the need using illustrations, artwork, design elements,
                        and fonts.
                      </li>
                      <li>
                        Developed illustration of characters starting from
                        conceptualization stages and sketchs to finalized
                        design.
                      </li>
                      <li>
                        Conducted research and studies relevant art style that
                        can bbe used as reference points for specific concepts,
                        ideas, and themes.
                      </li>
                      <li>
                      Ensured that printed Illustrations meet quality and color
standards.
                      </li>
                      <li>
                      Worked closely with copywriters and creative director to produce final design.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
