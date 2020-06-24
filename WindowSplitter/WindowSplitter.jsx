import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import WindowSplitterContext from './WindowSplitterContext';
import useDrag from '../hooks/useDrag';
import useChainHandlerProp from '../hooks/useChainHandlerProp';

const DividerDiv = styled.div`
  cursor: col-resize;
  border-right: solid 1px black;
  height: 100%;
  left: -2px;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: inline-block;
    position: relative;
    height: 100%;
    width: 2px;
  }
`;

const style = css`
  display: flex;
  height: 100%;
  position: relative;
`;

const WindowSplitter = ({
  className,
  children,
  component: Component,
  onMouseDown: onMouseDownProp,
  onMouseMove: onMouseMoveProp,
  onMouseUp: onMouseUpProp,
  ...rest
}) => {
  const [dividerPosition, setDividerPosition] = useState(0);
  const widthString =
    dividerPosition < 0
      ? `- ${Math.abs(dividerPosition)}`
      : `+ ${Math.abs(dividerPosition)}`;

  const [isDragging, setIsDragging] = useState(false);

  const onDividerMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const onDrag = useCallback(
    delta => setDividerPosition(dividerPosition + delta),
    [dividerPosition]
  );

  const {
    onMouseDown: onMouseDownDrag,
    onMouseMove: onMouseMoveDrag,
    onMouseUp: onMouseUpDrag,
  } = useDrag({
    isDragging,
    setIsDragging,
    onDrag,
  });
  const onMouseDown = useChainHandlerProp(onMouseDownDrag, onMouseDownProp);
  const onMouseMove = useChainHandlerProp(onMouseMoveDrag, onMouseMoveProp);
  const onMouseUp = useChainHandlerProp(onMouseUpDrag, onMouseUpProp);

  return (
    <Component
      className={classnames('window-splitter', className)}
      data-testid="window-splitter"
      {...rest}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {React.Children.map(children, (child, index) => (
        <WindowSplitterContext.Provider
          value={{
            extraPanelStyle:
              index === 0
                ? { width: `calc(50% ${widthString}px)` }
                : { flexGrow: 1 },
          }}
        >
          {index === 0 ? (
            child
          ) : (
            <>
              <DividerDiv
                className="window-splitter__divider"
                data-testid="window-splitter-divider"
                onMouseDown={onDividerMouseDown}
              />
              {child}
            </>
          )}
        </WindowSplitterContext.Provider>
      ))}
    </Component>
  );
};

WindowSplitter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  component: PropTypes.elementType,
  onMouseDown: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseUp: PropTypes.func,
};

WindowSplitter.defaultProps = {
  className: undefined,
  component: 'div',
  onMouseDown: undefined,
  onMouseMove: undefined,
  onMouseUp: undefined,
};

export default styled(WindowSplitter)`
  ${style}
`;
