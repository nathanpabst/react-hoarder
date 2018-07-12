import React from 'react';

import './Home.css';

class Home extends React.Component {
  render () {
    return (
      <div className="Home">
        <div className="catch-of-the-day">
          <div className="menu">
            <header className="top">
              <h1>
                The Arrogant Hoarder
              </h1>
              <h3 className="tagline">
                <span>No apologies...</span>
              </h3>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
