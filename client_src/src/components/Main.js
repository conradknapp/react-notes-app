import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Notes from './Notes';
import Content from './Content';
import NoteDetails from './NoteDetails';
import AddNote from './AddNote';
import EditNote from './EditNote';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Notes} />
      <Route exact path="/content" component={Content} />
      <Route exact path="/notes/add" component={AddNote} />
      <Route exact path="/notes/edit/:id" component={EditNote} />
      <Route exact path="/notes/:id" component={NoteDetails} />
    </Switch>
  </main>
)

export default Main