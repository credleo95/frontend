import React from 'react';

export default function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutImageContainer">
        <img
          src="https://i.pinimg.com/474x/13/31/97/133197463030cdaa084cf6d763594b4d.jpg"
          alt=""
        ></img>
      </div>

      <div class="vl"></div>

      <div className="aboutContent">
        <h1>Lorem, ipsum dolor.</h1>

        <h2>Why PinteReach is so Important</h2>
        <p>
          {' '}
          Tired of looking through your search history to find that article that
          you need for work or school? Pintereach can help anyone that gets lost
          in their research. It helps keep track of the sources that help people
          with work, school, or hobbies and interests. We created PinteReach to
          make sure your articles are in a safe place and can be easy tracked.
          You can categorize your articles if you have multiple interests or
          research topics and mark their importance! With only a couple clicks,
          you can research without the stress!
        </p>
      </div>
    </div>
  );
}
