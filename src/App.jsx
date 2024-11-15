import React, { useState } from 'react';
import Select from 'react-select';
import MultiSelect from "./MultiSelect";
import tags from "./tags";


const rsOptions = [
  { value: 112, label: 'test' },
  { value: 113, label: 'foo' },
  { value: 114, label: 'bar' },
  { value: 115, label: 'cat' },
  { value: 116, label: 'dog' },
  { value: 117, label: 'raz' }
];

const values = [];

const options = tags.map((tag) => ({
  value: tag.id,
  label: tag.display_name,
}));




const App = () => {
  const [rsValues, setRsValues] = useState([{ value: 125, label: 'tac' }]);

  const onChange = (values) => {  
    setRsValues(values)
  };

  return (
    <div>
      <h2>Hello from App</h2>
      <div style={{width: '300px'}}>
        <Select
          options={rsOptions}
          isMulti={true}
          value={rsValues}
          onChange={onChange}
        />
      </div>
      <MultiSelect values={values} options={options} />
    </div>
  );
};

export default App;
