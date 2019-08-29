import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class CardsetsView extends React.Component {
  state = {
    /**
     * @param cardsets             The sets of flashcards
     * @param cardsets.title       The set's title
     * @param cardsets.description The set's description
     */
    cardsets: []
  };

  componentDidMount() {
    axios.get('/cardsets')
      .then(res => {
        this.setState({ cardsets: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="flashcard-container">
        {this.state.cardsets.map((set) =>
          <Link
            key={set.id}
            to={`/${set.id}/flashcards`}>
            <div>
              <h1>{set.title}</h1>
              <p>{set.description}</p>
            </div>
          </Link>
        )}
      </div>
    )
  }
}

export default CardsetsView;