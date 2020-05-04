import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {startSetClue} from '../actions/gameActions';

const HintInput = () => {
  const dispatch = useDispatch();
  const [hintWord, setHintWord] = useState('');
  const [hintNumber, setHintNumber] = useState(0);

  const handleHintWordChange = (e) => {
    const newWord = e.target.value;
    if (/^[A-Za-z]+$/.test(newWord)) {
      setHintWord(newWord.toLowerCase());
    }
  };

  const handleHintNumberChange = (e) => {
    setHintNumber(e.target.value);
  };

  const handleFormSubmit = () => {
    if (hintWord && hintNumber) {
      dispatch(startSetClue(hintWord, hintNumber));
    }
  };

  return (
    <div>
      <p>Give a hint oh great hint master</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={hintWord}
          onChange={handleHintWordChange}
          placeholder="Hint Word"
        />
        <input
          type="number"
          value={hintNumber}
          onChange={handleHintNumberChange}
          placeholder="hint number"
        />
      </form>
    </div>
  );
};

export default HintInput;
