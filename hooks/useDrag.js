import { useCallback, useRef } from 'react';

export default ({ isDragging, setIsDragging, onDrag }) => {
  // Drag handlers
  const screenX = useRef(null);
  const onMouseDown = useCallback(e => {
    // Not left click
    if (e.buttons !== 1) return;
    screenX.current = e.screenX;
  }, []);
  const onMouseMove = useCallback(
    e => {
      // Not left click
      if (e.buttons !== 1 || !isDragging) return;
      const delta = e.screenX - screenX.current;
      if (Math.abs(delta) > 1) {
        if (onDrag) onDrag(delta);
      }
    },
    [isDragging]
  );
  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return { onMouseDown, onMouseMove, onMouseUp };
};
