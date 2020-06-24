import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { WindowSplitter, WindowSplitterPanel } from '../WindowSplitter';
import '../styles/global.css';

export default {
  title: 'Window Splitter',
  Component: WindowSplitter,
  decorators: [withA11y],
};

export const main = () => (
  <WindowSplitter>
    <WindowSplitterPanel>
      <div>First Panel</div>
    </WindowSplitterPanel>
    <WindowSplitterPanel>
      <div>Second Panel</div>
    </WindowSplitterPanel>
  </WindowSplitter>
);
