import React from 'react';
import { WindowSplitter, WindowSplitterPanel } from '../WindowSplitter';
import '../styles/global.css';

export default {
  title: 'Window Splitter',
  Component: WindowSplitter,
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
