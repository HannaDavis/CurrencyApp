import React from 'react';

const SelectTo = props => {
  const options = props.currencyList.map((currency, index) => {
    return (
      <option value={currency.abbreviation}>{currency.name}</option>
    )
  })

  return (
    <select className=" browser-default custom-select" name="convert_to">
      {options}
    </select>
  );
}

export default SelectTo;
