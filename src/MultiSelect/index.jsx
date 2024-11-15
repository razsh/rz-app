import React, { useState, useEffect, useMemo } from 'react';

import OptionCard from './OptionCard';
import DropdownCard from './DropdownCard';
import InputCard from './InputCard';

import './styles.scss';


const getPrefix = (value) => {
  if (value.length < 2) return null;
  const match = value.match(/\w\w/);
  if (match) {
    return match[0].toLowerCase();
  } else {
    return 'other';
  }
};

const MultiSelect = ({
  values = [],
  options = [],
}) => {
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // We use inputValuePrefix in hope it changes less often
  const [inputValuePrefix, setInputValuePrefix] = useState(null);

  const optionsChunks = useMemo(() => {
    const chunks = {};
    options.forEach((option) => {
      const prefix = getPrefix(option.label);
      if (chunks[prefix]) {
        chunks[prefix].push(option);
      } else {
        chunks[prefix] = [option]; 
      }
    });
    return chunks;
  }, [options]);

  useEffect(() => {
    setInputValuePrefix(getPrefix(inputValue));
  }, [inputValue]);

  useEffect(() => {
    setDropdownOptions(
      inputValuePrefix && optionsChunks[inputValuePrefix]
      ? optionsChunks[inputValuePrefix].filter(opt => !values.map(val => val.id).includes(opt.id))
      : []
    );
  }, [optionsChunks, values, inputValuePrefix]);

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  return (
    <div className="multi-select-container">
      <div className="multi-select">
        <div className="option-cards">
          {values.map((option) => (
            <OptionCard key={option.value} value={option.value} label={option.label} />
          ))}
          <InputCard
            placeholder="Add new tag"
            value={inputValue}
            onChange={setInputValue}
          />
        </div>
        <div className="multi-select-control">V</div>
      </div>
      <div className="dropdown">
        {dropdownOptions.map((option) => (
          <DropdownCard key={option.value} value={option.value} label={option.label} />
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
