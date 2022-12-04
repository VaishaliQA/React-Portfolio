import React from "react";
import Project from "./Project";

// Project section
function Portfolio() {
  return (
    <section class="portfolio">
      <div className="center" style={{ textAlign: "center" }}>
        <h1 id="about">My Portfolio</h1>
      </div>

      {<Project />}
    </section>
  );
}

export default Portfolio;
