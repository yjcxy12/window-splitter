import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import WindowSplitter from './WindowSplitter';
import WindowSplitterPanel from './WindowSplitterPanel';

describe('<WindowSplitter />', () => {
  it('should render children correctly', () => {
    const { getByTestId, getAllByTestId } = render(
      <WindowSplitter>
        <WindowSplitterPanel>
          <div>First Panel</div>
        </WindowSplitterPanel>
        <WindowSplitterPanel>
          <div>Second Panel</div>
        </WindowSplitterPanel>
      </WindowSplitter>
    );
    expect(getByTestId('window-splitter')).toBeTruthy();
    expect(getByTestId('window-splitter-divider')).toBeTruthy();
    expect(getAllByTestId('window-splitter-panel')).toHaveLength(2);
  });

  it('should render multiple <WindowSplitterPanel /> correctly with divider', () => {
    const { getByTestId, getAllByTestId } = render(
      <WindowSplitter>
        <WindowSplitterPanel>
          <div>First Panel</div>
        </WindowSplitterPanel>
        <WindowSplitterPanel>
          <div>Second Panel</div>
        </WindowSplitterPanel>
        <WindowSplitterPanel>
          <div>Third Panel</div>
        </WindowSplitterPanel>
      </WindowSplitter>
    );
    expect(getByTestId('window-splitter')).toBeTruthy();
    expect(getAllByTestId('window-splitter-divider')).toHaveLength(2);
    expect(getAllByTestId('window-splitter-panel')).toHaveLength(3);
  });

  it('should handle dragging divider correctly', () => {
    const { getByTestId, getAllByTestId } = render(
      <WindowSplitter>
        <WindowSplitterPanel>
          <div>First Panel</div>
        </WindowSplitterPanel>
        <WindowSplitterPanel>
          <div>Second Panel</div>
        </WindowSplitterPanel>
      </WindowSplitter>
    );

    const [leftPanel, rightPanel] = getAllByTestId('window-splitter-panel');
    expect(leftPanel).toHaveStyle({ width: 'calc(50% + 0px)' });
    expect(rightPanel).toHaveStyle({ flexGrow: 1 });

    const root = getByTestId('window-splitter');
    const divider = getByTestId('window-splitter-divider');
    fireEvent.mouseDown(root, { buttons: 1, screenX: 0 });
    fireEvent.mouseDown(divider);
    fireEvent.mouseMove(root, { buttons: 1, screenX: 5 });
    fireEvent.mouseUp(root);
    expect(leftPanel).toHaveStyle({ width: 'calc(50% + 5px)' });
  });
});
