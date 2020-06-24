import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import WindowSplitterContext from './WindowSplitterContext';

const WindowSplitterPanel = ({ className, children, ...rest }) => {
  const { extraPanelStyle } = useContext(WindowSplitterContext);

  return (
    <div
      className={classnames('window-splitter__panel', className)}
      style={extraPanelStyle}
      {...rest}
    >
      {children}
    </div>
  );
};

WindowSplitterPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  component: PropTypes.elementType,
};

WindowSplitterPanel.defaultProps = {
  className: undefined,
  component: 'div',
};

export default WindowSplitterPanel;
