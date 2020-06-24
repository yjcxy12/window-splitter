import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import WindowSplitterContext from './WindowSplitterContext';

const WindowSplitterPanel = ({
  className,
  children,
  component: Component,
  style,
  ...rest
}) => {
  const { extraPanelStyle } = useContext(WindowSplitterContext);

  return (
    <Component
      className={classnames('window-splitter__panel', className)}
      data-testid="window-splitter-panel"
      {...rest}
      style={{ style, ...extraPanelStyle }}
    >
      {children}
    </Component>
  );
};

WindowSplitterPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
};

WindowSplitterPanel.defaultProps = {
  className: undefined,
  component: 'div',
  style: undefined,
};

export default WindowSplitterPanel;
