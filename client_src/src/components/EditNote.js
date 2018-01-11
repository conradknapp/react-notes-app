import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      date: '',
      description: '',
      content: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getNoteDetails();
  }

  getNoteDetails() {
    const noteId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/notes/${noteId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          date: response.data.date,
          description: response.data.description,
          content: response.data.content
        }, () => console.log(this.state));
      })
      .catch(err => console.error(err))
  }

  editNote(newNote) {
    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/notes/${this.state.id}`,
      data: newNote
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.error(err));
  }

  onSubmit(e) {
    const newNote = {
      title: this.refs.title.value,
      date: this.refs.date.value,
      description: this.refs.description.value,
      content: this.refs.content.value
    }
    this.editNote(newNote);
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <Link className="btn grey" to="/">Back</Link>
        <h1>Edit Note</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="title" ref="title" value={this.state.title} onChange={this.handleInputChange} />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field">
            <input type="text" name="date" ref="date" value={this.state.date} onChange={this.handleInputChange} />
            <label htmlFor="date">Date</label>
          </div>
          <div className="input-field">
            <input type="text" name="description" ref="description" value={this.state.description} onChange={this.handleInputChange} />
            <label htmlFor="description">Description</label>
          </div>
          <div className="input-field">
            <textarea className="materialize-textarea" type="text" name="content" ref="content" value={this.state.content} onChange={this.handleInputChange} />
            <label htmlFor="content">Content</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditNote;