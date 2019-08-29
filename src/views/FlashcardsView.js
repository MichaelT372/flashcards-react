import React from 'react';
import axios from 'axios';
import Flashcard from '../components/Flashcard';

class FlashcardsView extends React.Component {
  state = {
    /**
     * @param flashCards         The flashcards data for this card set
     * @param flashcards.side_a  The data for side a
     * @param flashCards.side_b  The data for side b
     */
      flashCards: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/cardsets/${id}/flashcards`)
      .then(res => {
        this.setState({ flashCards: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="flashcard-container">
        {this.state.flashCards.map((card) =>
          <Flashcard
            key={card.id}
            a={card.side_a}
            b={card.side_b} />
        )}
      </div>
    )
  }
}

export default FlashcardsView;