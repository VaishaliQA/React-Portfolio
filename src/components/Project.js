import React from "react";

import PlaceHolderOne from "../assets/images/placeholder.jpg";
import PlaceHolderTwo from "../assets/images/placeholder.jpg";
import PlaceHolderThree from "../assets/images/placeholder.jpg";
import LookUp from "../assets/images/project1.png";
import MakeAppoint from "../assets/images/project2.png";
import FinalProject from "../assets/images/project3.png";

function Portfolio() {
  return (
    <section class="portfolio">
      <div className="center" style={{ textAlign: "center" }}>
        <h1 id="about">My Portfolio</h1>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src={LookUp} alt="lookUp" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/VaishaliQA/PWA_Text_Editor"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://pwatexteditor-app.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={MakeAppoint} alt="Make A'Point" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/VaishaliQA/Whats-For-Dinner"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://verzo361219.github.io/Whats-For-Dinner/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={FinalProject} alt="Final Project" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/VaishaliQA/Weather_Dashboard"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://vaishaliqa.github.io/Weather_Dashboard/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={PlaceHolderOne} alt="Coming Soon" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/kara-krzystan"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/kara-krzystan"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={PlaceHolderTwo} alt="Coming Soon" class="card-img-top" />
            <div class="card-body">
              <a
                href="https://github.com/kara-krzystan"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/kara-krzystan"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderThree}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a
                href="https://github.com/kara-krzystan"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub</button>
              </a>
              <a
                href="https://github.com/kara-krzystan"
                target="_blank"
                rel="noreferrer"
              >
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
