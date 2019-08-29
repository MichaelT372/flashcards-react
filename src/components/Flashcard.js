import React from 'react';

class Flashcard extends React.Component {
  state = {
    flipped: false,
  };

  flip = () => {
    this.setState(state => ({
      flipped: !state.flipped
    }));
  };

  render() {
    return (
      <div className="flashcard" onClick={this.flip}>
        <div className={this.state.flipped ? 'flashcard-inner flashcard-inner--flipped' : 'flashcard-inner'}>
          <div className="flashcard-front">
            <div>{this.props.a}</div>
          </div>
          <div className="flashcard-back">
            <div>{this.props.b}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flashcard;