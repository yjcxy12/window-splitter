import React from 'react';
import { render } from '@testing-library/react';
import WindowSplitterPanel from './WindowSplitterPanel';

describe('<WindowSplitterPanel />', () => {
  it('should render the component', () => {
    const { getByTestId } = render(
      <WindowSplitterPanel>test</WindowSplitterPanel>
    );
    expect(getByTestId('window-splitter-panel')).toBeTruthy();
  });
});
