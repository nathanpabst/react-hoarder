import React from 'react';

import './Home.css';

class Home extends React.Component {
  render () {
    return (
      <div className="Home">
        <h1>
          The Arrogant Hoarder
        </h1>
        <h3 className="tagline">
          <span>No apologies...</span>
        </h3>
      </div>
    );
  }
}

export default Home;
