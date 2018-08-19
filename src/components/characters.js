import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';

class Characters extends Component {
  constructor(props){
    super(props)
  }
  state = {
    isLoading: true
  }
  render() {
    return (
      <div>
        {this.props.characters.map(
          (character) => (
            <div key= {character.url}>
              {character.name}
            </div>
          ) 
        )}
      </div>
    );
  }
  
  componentDidMount() {
    this.loadCharacters()
  }
  
  async loadCharacters() {
   await this.props.fetchCharacters();
  }
}

function mapStateToProps({characters}) {
  return {
    characters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCharacters: () => dispatch(fetchCharacters)
  }
}

async function fetchCharacters(dispatch) {
  let response = await fetch('https://www.anapioficeandfire.com/api/characters');
  let characters =   await response.json();
  dispatch(actions.populateCharacters(characters));
}

export default connect(mapStateToProps,mapDispatchToProps)(Characters);
