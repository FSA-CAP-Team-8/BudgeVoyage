import React from "react";

const OurTeam = () => {
  return (
    <div id="theteam" className="theteam">
      <h1>Meet the Team</h1>
      <div id="ourteam">
        <p>
          Hello, we are the team behind BudgeVoyage, an innovative application
          to help you travel within your budget. We all had one thing in common,
          we love to travel, but hate the planning process. We wanted to create
          an WebApp that worked as a travel advisor and focused on our users
          budget. Our application allows users to focus on the fun and leave the
          financial calculations to BudgeVoyage. Take our quiz and enjoy the
          stress free experience of finding the right travel package for your
          financial needs.
        </p>
        <div className="teamrow">
          <div className="column">
            <div className="card">
              <img id="profilefoto" src="" alt="veronica"></img>
              <div class="teamcontainer">
                <h2>Veronica Cisneros</h2>
                <p className="title">Fullstack Developer</p>
                <p>some text that descries me lorem ipsum ipsum lorem.</p>
                <p>vcisneroshdz@gmail.com</p>
                <p>
                  <button className="teambtn">contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="teamrow">
          <div className="column">
            <div className="card">
              <img src="" alt="Luis"></img>
              <div class="teamcontainer">
                <h2>Luis Samboy</h2>
                <p className="title">add role here</p>
                <p>some text that descries me lorem ipsum ipsum lorem.</p>
                <p></p>
                <p>
                  <button className="teambtn">contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="teamrow">
          <div className="column">
            <div className="card">
              <img src="" alt="Jesia"></img>
              <div class="teamcontainer">
                <h2>Jesiah Roe</h2>
                <p className="title">add role here</p>
                <p>some text that descries me lorem ipsum ipsum lorem.</p>
                <p></p>
                <p>
                  <button className="teambtn">contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="teamrow">
          <div className="column">
            <div className="card">
              <img src="" alt="Jackie"></img>
              <div class="teamcontainer">
                <h2>Jackie Chung</h2>
                <p className="title">add role here</p>
                <p>some text that descries me lorem ipsum ipsum lorem.</p>
                <p></p>
                <p>
                  <button className="teambtn">contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
