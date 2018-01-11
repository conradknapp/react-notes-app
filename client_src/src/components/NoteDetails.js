import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ''
    }
  }

  componentWillMount() {
    this.getNote();
  }

  getNote() {
    const noteId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/notes/${noteId}`)
      .then(response => {
        this.setState({details: response.data})
      })
      .catch(err => console.error(err))
  }

  onDelete() {
    const noteId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/notes/${noteId}`).then(response => {
      this.props.history.push('/');
    }).catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <Link className="btn grey" to="/">Back</Link>
        <h1>{this.state.details.title}</h1>
        <p>{this.state.details.date}</p>
        <p>{this.state.details.content}</p>
        <Link className="btn" to={`/notes/edit/${this.state.details.id}`}>Edit</Link>

        <button onClick={this.onDelete.bind(this)} className="btn red">Delete</button>
      </div>
    )
  }
}

export default NoteDetails;