import { useCallback } from 'react';

export default (handler, handlerProp) => {
  return useCallback(
    e => {
      if (handler) handler(e);
      if (handlerProp) handlerProp(e);
    },
    [handler, handlerProp]
  );
};
