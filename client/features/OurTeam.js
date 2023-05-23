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
              <img
                src="./photogrid/vcis.png"
                alt="veronica"
                width="282px"
                height="280px"
              ></img>
              <div className="teamcontainer">
                <h2>Veronica Cisneros</h2>
                <p className="title">Fullstack Developer</p>
                <p>
                  {" "}
                  I enjoy software development because it allows me to combine
                  my creativity and problem solving skills. I made a career
                  change into the tech industry after being a program manager
                  for a software development apprenticeship program. I realized
                  then my skillset was a better match for software development
                  and it seemed more fun and mentally challenging.
                </p>
                <p>Fun fact: my first job was a wedding singer</p>
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
              <img
                src="./photogrid/luisS.png"
                alt="Luis Samboy"
                width="282px"
                height="280px"
              ></img>
              <div className="teamcontainer">
                <h2>Luis Samboy</h2>
                <p className="title">Fullstack Developer</p>
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
              <img
                src="./photogrid/jroe.png"
                alt="Jesiah Roe"
                width="282px"
                height="280px"
              ></img>
              <div className="teamcontainer">
                <h2>Jesiah Roe</h2>
                <p className="title">Fullstack Developer</p>
                <p>
                  The reason for my transfer to the tech world is because of my
                  passion to build things. In the middle of the process of
                  building my own motorcycle and tech plays into that as I have
                  the dream of building my own sufficient homestead and I can
                  use code to help achieve that from using blueprinting software
                  to building my own automated hydroponics system.
                </p>
                <p>
                  Fun Fact about me: I Treated and saved both foreign and
                  domestic lives at just the age of 19..
                </p>
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
              <img
                src="./photogrid/jackiec.png"
                alt="Jackie Chung"
                width="282px"
                height="280px"
              ></img>
              <div className="teamcontainer">
                <h2>Jackie Chung</h2>
                <p className="title">Fullstack Developer</p>
                <p>
                  I like being a software developer because of how much you can
                  constantly learn. You’ll learn new programming languages and
                  use old languages with new tools to develop programs.
                  Successfully creating and implementing software brings
                  personal fulfillment.
                </p>
                <p>
                  Fun fact about myself is that my family runs a korean fried
                  chicken business.
                </p>
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
