import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="orange darken-4">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo"></a>
            <a href="#" data-activates="main-menu" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-small-only">
              <li><Link to="/">Notes</Link></li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li><Link to="/">
              <i className="material-icons">comment</i>
              Notes</Link></li>
              <li><Link to="/notes/add"><i className="material-icons">edit</i>
              Add Note</Link></li>
              <li><Link to="/content"><i className="material-icons">question_answer</i>
              Content</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;