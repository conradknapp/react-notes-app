import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddNote extends Component {
  addNote(newNote) {
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/notes',
      data: newNote
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.error(err))
  }

  onSubmit(e) {
    const newNote = {
      title: this.refs.title.value,
      date: this.refs.date.value,
      description: this.refs.description.value,
      content: this.refs.content.value
    }
    this.addNote(newNote);
    e.preventDefault();
  }
  
  render() {
    return (
      <div>
        <Link className="btn grey" to="/">Back</Link>
        <h1>Add Note</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="title" ref="title" />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <input type="text" name="date" ref="date" />
            <label htmlFor="date">Date</label>
          </div>
          <div className="input-field">
            <input type="text" name="description" ref="description" />
            <label htmlFor="description">Description</label>
          </div>
          <div className="input-field">
            <textarea className="materialize-textarea" type="text" name="content" ref="content" />
            <label htmlFor="content">Content</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddNote;