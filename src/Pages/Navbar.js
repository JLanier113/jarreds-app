import Component from 'react';

class Navbar extends Component {
  render() {
    return(
      <div className="Navbar">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#" className="right">Contact</a>
      </div>
    );
  }
}

export default Navbar
