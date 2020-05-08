import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startSetClue} from '../actions/gameActions';

const HintInput = () => {
  const dispatch = useDispatch();
  const [hintWord, setHintWord] = useState('');
  const [hintNumber, setHintNumber] = useState(0);
  const {turnColor} = useSelector((state) => state.game.gameState);

  const handleHintWordChange = (e) => {
    const newWord = e.target.value;
    if (/^[A-Za-z]*$/.test(newWord)) {
      setHintWord(newWord.toLowerCase());
    }
  };

  const handleHintNumberChange = (e) => {
    const newNumber = e.target.value;
    if (newNumber >= -1 && newNumber <= 9) {
      setHintNumber(newNumber);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (hintWord && hintNumber >= -1 && hintNumber <= 9) {
      dispatch(startSetClue(hintWord, Number(hintNumber)));
    }
  };

  return (
    <form className="hint__form" onSubmit={handleFormSubmit}>
      <div className="hint__input-container">
        <input
          className={`hint__input--word hint__input--${turnColor}`}
          type="text"
          value={hintWord}
          onChange={handleHintWordChange}
          placeholder="Hint Word"
        />
        <input
          className={`hint__input--number hint__input--${turnColor}`}
          type="number"
          value={hintNumber}
          onChange={handleHintNumberChange}
          placeholder="hint number"
        />
      </div>
      <button className="hint__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default HintInput;
