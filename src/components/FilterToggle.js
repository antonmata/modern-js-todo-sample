import './FilterToggle.css';

import React from 'react';
import { observer } from 'mobx-react';

const FilterToggle = props => {
  const { showAll, onFilter } = props;

  const icon = showAll ? (
    <i className="far fa-check-square" />
  ) : (
    <i className="far fa-square" />
  );

  return (
    <div className="filter-toggle">
      <input
        className="filter-toggle__checkbox"
        id="filterToggle"
        type="checkbox"
        checked={showAll}
        onChange={() => onFilter(!showAll)}
      />
      <label className="filter-toggle__label" htmlFor="filterToggle">
        {icon}
      </label>
      <span className="filter-toggle__text" onClick={() => onFilter(!showAll)}>
        Show All
      </span>
    </div>
  );
};

export default observer(FilterToggle);
