import React, { useState, useEffect } from "react";
import { FaBehance } from "react-icons/fa";
import "./portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio">
      <div className="about-container">
        <div className="title">
          <h1>Portfolio</h1>
          <p>
          I have a passion for projects that involve a graphic narrative and character design. From sketching to delivering final rendered design, characters, and animations, I'm able to offer a variety of styles such as Photomanipulation, vector artwork, cartoony style, realistic and highly detailed digital renders. I'm easily adaptable to your needs regarding the functionality and application of the Design.
          </p>
        </div>
      </div>
      <div className="filter-btn">
        <button
          className={filter === "all" || !filter ? "active" : "filter-button"}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "design" ? "active" : "filter-button"}
          onClick={() => setFilter("design")}
        >
          Design
        </button>
        <button
          className={filter === "illustration" ? "active" : "filter-button"}
          onClick={() => setFilter("illustration")}
        >
          Illustration
        </button>
        <button
          className={filter === "videos" ? "active" : "filter-button"}
          onClick={() => setFilter("videos")}
        >
          Videos
        </button>
      </div>
      
      <div className="portfolio-container">
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 9.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 9.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 1</h4>
              <p>Photomanipulation</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 12.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 12.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 2</h4>
              <p>Photomanipulation</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 13.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 13.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 3</h4>
              <p>Photomanipulation</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 11.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 11.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 4</h4>
              <p>Printable Postcard </p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 10.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 10.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 5</h4>
              <p>Photomanipulation</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 14.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 14.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 6</h4>
              <p>Printable Design</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 16.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 16.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 7</h4>
              <p>Social Media Design</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 17.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 17.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 8</h4>
              <p>Social Media Design</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 18.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 18.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 9</h4>
              <p>Billboard banner design</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 15.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 15.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 10</h4>
              <p>billboard banner Design</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 20.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 20.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 11</h4>
              <p>social media Design</p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 19.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 19.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 12</h4>
              <p>social media Design</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 1.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 1.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 13</h4>
              <p>social media Design</p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 2.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 14</h4>
              <p>Vector Illustration</p> 
              <p>Social media Design</p>
             
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 3.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 15</h4>
              
              <p>social media design</p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 5.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 5.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 16</h4>
              <p>Vector Illustration</p> 
              <p>Social media Design</p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 6.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 6.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 17</h4>
              <p>Vector Illustration</p> 
              <p>Social media Design</p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 8.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 8.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 18</h4>
              <p>Vector Illustration</p> 
              <p>Social media Design</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 7.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 7.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 19</h4>
              <p>3d render mokup</p>
              <p>social media Design</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Car Branding.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Car Branding.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4> Design 20</h4>
              <p>Car Branding</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Motorbike Branding.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Motorbike Branding.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
            <h4> Design 21</h4>
              <p>motor Branding</p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/illustration 2.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/illustration 2.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 22</h4>
              <p>
                character Illustration
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Brand Guidline.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Brand Guidline.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 23</h4>
              <p>
              Brand Guideline
              </p>
            </div>
          </div>
        </div>       
         <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Branding.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Branding.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 24</h4>
              <p>
                Branding 
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 22.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 22.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 25</h4>
              <p>
                Gradient logo design
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 27.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 27.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 26</h4>
              <p>
                Logo Desing
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 30.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 30.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 27</h4>
              <p>
                logo Desing
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 24.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 24.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 28</h4>
              <p>
                Billboard banner Desing
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 29.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 29.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 29</h4>
              <p>
              Billboard banner Desing
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Roll-up dedsign.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Roll-up dedsign.png"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 30</h4>
              <p>
              Roll-up Design
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 23.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 23.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 31</h4>
              <p>
                Book cover Design
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 4.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 4.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 32</h4>
              <p>
                social media Design
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 21.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 21.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 33</h4>
              <p>
                Printable Design
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 25.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 25.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 34</h4>
              <p>
                Character design
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/Design 26.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/Design 26.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 35</h4>
              <p>
                Character design
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/illustration 1.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/illustration 1.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 36</h4>
              <p>
                character Desing
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/illustration 7.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/illustration 7.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 37</h4>
              <p>
                Illustration
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/illustration 3.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/illustration 3.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 38</h4>
              <p>
                Digital paint
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/illustration 6.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/illustration 6.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 39</h4>
              <p>
                Digital paint  | Social media design
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/illustration 5.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/illustration 5.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 40</h4>
              <p>
                Digital Paint 
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("./img/portfolio/portfolio-1_files/Full/illustration 4.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src="./img/portfolio/portfolio-1_files/Thumbnail/illustration 4.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Design 41</h4>
              <p>
                Digital Paint 
              </p>
            </div>
          </div>
        </div>

        {selectedImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content">
              <img src={selectedImage} className="img-fluid" alt=""  />
            </div>
          </div>
        )}
        
      </div>
      <div className="behance">
          <h3>For More Projects Check on my Behance profile </h3>
          <a href="https://www.behance.net/mickiasgirma" className="be"><FaBehance /> </a>
        </div>
    </section>
  );
};

export default Portfolio;
