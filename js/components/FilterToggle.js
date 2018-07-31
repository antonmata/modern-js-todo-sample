/**
 * @param {{ showAll: boolean, onFilter: function(boolean): void }} props
 */
const FilterToggle = props => {
  const { showAll, onFilter } = props;

  const root = document.createElement('div');
  root.className = 'filter-toggle';

  const elemId = `toggle_${Date.now()}`;
  const checked = showAll ? 'checked' : '';

  root.innerHTML = `
    <input class="filter-toggle__checkbox" id="${elemId}" type="checkbox" ${checked} />
    <label class="filter-toggle__label" for="${elemId}">
      ${
        showAll
          ? `<i class="far fa-check-square"></i>`
          : `<i class="far fa-square"></i>`
      }
    </label>
    <span class="filter-toggle__text">Show All</span>
  `;

  const checkbox = root.getElementsByClassName('filter-toggle__checkbox')[0];
  const text = root.getElementsByClassName('filter-toggle__text')[0];

  checkbox.addEventListener('change', event => {
    onFilter(showAll);
  });

  text.addEventListener('click', event => {
    onFilter(showAll);
  });

  return root;
};

export default FilterToggle;
