import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    }
  }

  render() {
    return (
      <li className="collection-item"><Link to={`/notes/${this.state.item.id}`}>{this.state.item.title}</Link></li>
    )
  }
}

export default NoteItem;