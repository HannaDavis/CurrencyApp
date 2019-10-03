import React from 'react';

const SelectFrom = props => {
  const options = props.currencyList.map((currency, index) => {
    return (
      <option value={currency.abbreviation}>{currency.name}</option>
    )
  })

  return (
    <select className=" browser-default custom-select" name="convert_from">
      {options}
    </select>
  );
}

export default SelectFrom;
