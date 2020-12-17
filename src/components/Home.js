import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <h1 style={{ color: this.props.color }}>
          {this.props.username} is a Web Developer from {this.props.city}
        </h1>
      </div>
    );
  }
}

export default Home;
