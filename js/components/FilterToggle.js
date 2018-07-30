export default class FilterToggle {
  constructor(elementId, onFilter, checked = false) {
    this._checked = checked;
    this._init(elementId, onFilter);
  }

  /**
   * @param {string} elementId The root element's ID.
   * @param {Function} onFilter
   */
  _init(elementId, onFilter) {
    /**
     * @type {HTMLDivElement}
     */
    const root = document.getElementById(elementId);
    /**
     * @type {HTMLInputElement}
     */
    const checkbox = root.getElementsByClassName('filter-toggle__checkbox')[0];
    const label = root.getElementsByClassName('filter-toggle__label')[0];
    const text = root.getElementsByClassName('filter-toggle__text')[0];

    const iconChecked = label.getElementsByClassName('fa-check-square')[0];
    const iconUnchecked = label.getElementsByClassName('fa-square')[0];

    iconUnchecked.classList.add('filter-toggle__icon--hidden');
    iconChecked.classList.remove('filter-toggle__icon--hidden');

    this._updateIcon(this._checked, iconChecked, iconUnchecked);

    checkbox.addEventListener('change', event => {
      this._toggle(onFilter, iconChecked, iconUnchecked);
    });

    text.addEventListener('click', event => {
      this._toggle(onFilter, iconChecked, iconUnchecked);
    });
  }

  /**
   * @param {Function} onFilter
   * @param {HTMLElement} iconChecked
   * @param {HTMLElement} iconUnchecked
   */
  _toggle(onFilter, iconChecked, iconUnchecked) {
    this._checked = !this._checked;
    this._updateIcon(this._checked, iconChecked, iconUnchecked);
    onFilter(this._checked);
  }

  _updateIcon(checked, iconChecked, iconUnchecked) {
    if (checked) {
      iconUnchecked.classList.add('filter-toggle__icon--hidden');
      iconChecked.classList.remove('filter-toggle__icon--hidden');
    } else {
      iconChecked.classList.add('filter-toggle__icon--hidden');
      iconUnchecked.classList.remove('filter-toggle__icon--hidden');
    }
  }
}
