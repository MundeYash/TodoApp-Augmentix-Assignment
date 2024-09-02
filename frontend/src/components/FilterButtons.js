// client/src/components/FilterButtons.js

import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
        All
      </button>
      <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>
        Completed
      </button>
      <button onClick={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active' : ''}>
        Incomplete
      </button>
    </div>
  );
};

export default FilterButtons;
