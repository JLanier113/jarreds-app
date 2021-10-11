import React, { Component } from 'react';
class Content extends Component {
  state ={
    date : new Date().toLocaleString(),
  }
  render() {
    return(
      <div className="main">
        <h2>Sample text</h2>
        <h5>The current date is {this.state.date}</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>There is a blank image above this</p>
        <p>Not much to say about the above fake image, but if I did have anything to say it would go right here!</p>
        <br />
        <h2>Placerat vestibulum</h2>
        <h5>elementum integer enim neque, Sep 21, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Bibendum est ultricies..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum.</p>
      </div>
    );
  }
}

export default Content
