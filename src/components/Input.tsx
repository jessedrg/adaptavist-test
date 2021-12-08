import React, { useState } from 'react';
import { SortInput } from './sort-input';
import './Input.css';
const Input = () => {
  const [toSort, setToSort] = useState('');
  const [wordDisplay, setWordDisplay] = useState();
  let words = toSort.split(' ');
  let wordCount: any = {};
  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordCount[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordCount[words[i]] = count + 1;
  }

  return (
    <div className="box">
      <div className="container input-container">
        <div className="input-container">
          <textarea
            onChange={(e) => setToSort(e.target.value)}
            placeholder="Your text"
            className=" input"
            style={{ width: '450px' }}
          />

          <SortInput textArea={wordCount} />
        </div>
      </div>
    </div>
  );
};

export default Input;
