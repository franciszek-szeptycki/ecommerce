import React from "react";

import "./styles/about.css";
export default function About() {
  return (
    <>
      <header>
        <h2>
          <strong>About as</strong>
        </h2>
      </header>
      <div className="main-conatiner">
        <section id="descryption-box">
          <div>
            <p className="descryption-title">Kim jesteśmy ?</p>
            <p className="descryption-text">
              lorem lorem ipsum ipsum lorem lore lorem lorem ipsum ipsum lorem
              lore lorem lorem ipsum ipsum lorem lore
            </p>
          </div>
          <div id="second-tile">
            <p className="descryption-title">Co nas wyróżnia ?</p>
            <p className="descryption-text">
              lorem lorem ipsum ipsum lorem lore lorem lorem ipsum ipsum lorem
              lore lorem lorem ipsum ipsum lorem lore lorem lorem ipsum ipsum
              lorem lore
            </p>
          </div>
        </section>
        <section id="team-box">
          <header id="team-box-header">
            <p>Kto należy do zespołu ?</p>
          </header>
          <div className="team-box-teamate-grid">
            <div className="teamate-box">
              <div className="teammate-header">
                <p>Tomek</p>
              </div>
              <div className="teamate-descryption">
                <p>Projektant-Grafik-Menager</p>
              </div>
            </div>
            <div className="teamate-box">
              <div className="teammate-header">
                <p>Piotr</p>
              </div>
              <div className="teamate-descryption">
                <p>Developer-designer-projektant</p>
              </div>
            </div>
            <div className="teamate-box">
              <div className="teammate-header">
                <p>Ania</p>
              </div>
              <div className="teamate-descryption">
                <p>Projektantka-designer-grafik</p>
              </div>
            </div>
            <div className="teamate-box">
              <div className="teammate-header">
                <p>Łukasz</p>
              </div>
              <div className="teamate-descryption">
                <p>Informatyk-developer-designer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
