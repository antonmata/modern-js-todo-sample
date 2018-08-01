import FilterToggle from './FilterToggle';

it('should not crash', () => {
  const call = () => FilterToggle({ showAll: true, onFilter: s => {} });

  expect(call).not.toThrow();
});

it('should render as expected', () => {
  const expected = document.createElement('div');
  expected.className = 'filter-toggle';
  expected.innerHTML = `
    <input class="filter-toggle__checkbox" id="filterToggle" type="checkbox" checked />
    <label class="filter-toggle__label" for="filterToggle">
      <i class="far fa-check-square"></i>
    </label>
    <span class="filter-toggle__text">Show All</span>
  `;

  const actual = FilterToggle({ showAll: true, onFilter: s => {} });

  expect(actual.outerHTML).toEqual(expected.outerHTML);
});

it('should display the correct icon when showAll is true', () => {
  const actual = FilterToggle({ showAll: true, onFilter: s => {} });

  expect(actual.querySelector('i').className).toEqual('far fa-check-square');
});

it('should display the correct icon when showAll is false', () => {
  const actual = FilterToggle({ showAll: false, onFilter: s => {} });

  expect(actual.querySelector('i').className).toEqual('far fa-square');
});

it('should call the onFilter callback, with showAll value flipped, when label is clicked', () => {
  const mockOnFilterCallback = jest.fn();

  const actual = FilterToggle({
    showAll: false,
    onFilter: s => mockOnFilterCallback(s),
  });

  /**
   * @type {HTMLLabelElement}
   */
  const label = actual.querySelector('.filter-toggle__label');
  // label.dispatchEvent(new Event('click'));
  label.click();

  expect(mockOnFilterCallback.mock.calls.length).toBe(1);
  expect(mockOnFilterCallback.mock.calls[0][0]).toBe(true);
});
