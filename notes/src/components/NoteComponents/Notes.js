import React from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../../actions/noteActions";
import { withAuthorization } from "../Session";
import { compose } from "recompose";

import NoteCard from "./NoteCard";
import Search from "./Search";

import styled from "styled-components";

const Container = styled.div`
  min-width: 100vw;
`;

const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 15px;
  min-width: 100vw;
  overflow: hidden;
`;

const NoteContainer = styled.div`
  flex: 0 1 20%;
  min-width: 275px;
  height: 300px;
  background-color: white;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  margin: 20px 25px 20px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SearchContainer = styled.div`
  display: flex;
  align-content: center;
  /* width: 100vw; */
  margin: 20px 0;
`;

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  filterNotes = note => {
    const lowerCase = this.state.search.toLowerCase();

    if (
      note.title.toLowerCase().includes(lowerCase) ||
      note.textBody.toLowerCase().includes(lowerCase)
    ) {
      return note;
    }
  };

  // TODO: Fix search
  render() {
    const filtered = this.props.notes.filter(note => this.filterNotes(note));

    return (
      <Container>
        <SearchContainer>
          <Search search={this.props.search} inputHandler={this.inputHandler} />
        </SearchContainer>
        <NotesContainer>
          {filtered.map(note => {
            return (
              <NoteContainer key={note.id}>
                <NoteCard key={note.id} note={note} />
              </NoteContainer>
            );
          })}
        </NotesContainer>
      </Container>
    );
  }
}

Notes.defaultProps = {
  notes: []
};

const mapStateToProps = state => {
  return {
    notes: state.noteReducer.notes,
    loading: state.noteReducer.loading,
    error: state.noteReducer.error
  };
};

const condition = authUser => !!authUser;

const NoteComp = compose(
  withAuthorization(condition),
  connect(
    mapStateToProps,
    { fetchNotes }
  )
)(Notes);

export default NoteComp;
