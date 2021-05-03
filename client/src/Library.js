import React from 'react';
import './Library.css';

export default class Library extends React.Component {

  state = {
    library: []
  }

  async componentDidMount() {
    await fetch('/library', {
      headers: {},
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => this.setState({ library: data }))
  }

  render() {
    const library = this.state.library

    if (this.props.isLog === false) {
      return (
        <div className="library">
          <h2>LibraryPage</h2>
          <hr className="separator"></hr>
          <h3>Veuillez vous identifier pour profiter de cette page</h3>
        </div>
      );
    }
    else {
      return (
        <div className="library">
          <h2>LibraryPage</h2>
          <hr className="separator"></hr>
          <h3>Voici votre bibliothèque</h3>
          <ul>
            {library.map((mg,idx) => {
              return (
                <li key={idx}>{mg.manga_name}</li>

              );
            })
            }
          </ul>

        </div>
      );
    }
  }
}