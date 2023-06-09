import React from "react";

const OurStory = () => {
  return (
    <div id="background" className="bgimg">
      <div id="about" className="ourstory">
        <h1>
          Spend less time worrying about logistics and more time enjoying your
          travels.
        </h1>
        <div id="about">
          <p>
            Welcome to BudgeVoyage, our innovative travel planning web app! We
            understand that planning a trip can be stressful, especially when it
            comes to staying within a budget. That's why we've designed a simple
            and easy-to-use platform that guides you through a set of questions
            and populates a set of cards with flights and hotel options that
            match your budget. You can then choose to like or dislike the cards
            presented. When satisfied with both BudgeVoyage will create a travel
            package you can then add to your Bucketlist. Bucketlist is where all
            your chosen packages are stored.
          </p>
          <p>
            Our goal is to help you plan the perfect getaway without breaking
            the bank. With our app, you can spend less time worrying about
            logistics and more time enjoying your travels. We're dedicated to
            making your trip planning experience as seamless and stress-free as
            possible.
          </p>
          <p>
            So why wait? Sign up today and start planning your dream vacation on
            a budget!
          </p>
          <p>checkout our users trips below</p>

          <div id="row" className="column">
            <img className="insta" src="./photogrid/1.png"></img>
            <img className="insta" src="./photogrid/2.png"></img>
            <img className="insta" src="./photogrid/3.png"></img>
            <img className="insta" src="./photogrid/4.png"></img>
            <img className="insta" src="./photogrid/5.png"></img>
            <img className="insta" src="./photogrid/6.png"></img>
            <img className="insta" src="./photogrid/7.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
