export default class FilterToggle {
  constructor(parentElement, onFilter) {
    this._parentElement = parentElement;
    this._onFilter = onFilter;
  }

  render(showAll) {
    const elemId = `toggle_${Date.now()}`;
    const checked = showAll ? 'checked' : '';

    this._parentElement.innerHTML = `
      <div class="filter-toggle">
        <input class="filter-toggle__checkbox" id="${elemId}" type="checkbox" ${checked} />
        <label class="filter-toggle__label" for="${elemId}">
          ${
            showAll
              ? `<i class="far fa-check-square"></i>`
              : `<i class="far fa-square"></i>`
          }
        </label>
        <span class="filter-toggle__text">Show All</span>
      </div>
    `;

    const checkbox = this._parentElement.getElementsByClassName(
      'filter-toggle__checkbox'
    )[0];
    const text = this._parentElement.getElementsByClassName(
      'filter-toggle__text'
    )[0];

    checkbox.addEventListener('change', event => {
      this._onFilter(showAll);
    });

    text.addEventListener('click', event => {
      this._onFilter(showAll);
    });
  }
}
