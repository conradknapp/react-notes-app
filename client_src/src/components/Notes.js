import React, {Component} from 'react';
import axios from 'axios';
import NoteItem from './NoteItem';

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentWillMount() {
   this.getNotes(); 
  }

  getNotes() {
    axios.get('http://localhost:3000/api/notes')
      .then(response => this.setState({notes: response.data}))
  }

  render() {
    const noteItems = this.state.notes.map((el, i) => {
      return (
        <NoteItem key={el.id} item={el} />
      )
    });
    return (
      <div>
        <h1>Notes</h1>
        <ul className="collection">{noteItems}</ul>
      </div>
    )
  }
}

export default Notes;