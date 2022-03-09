import { useCallback, useState } from 'react';

function useBooleanToggle(initialState = false): [boolean, () => void] {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState(prevState => !prevState), []);

  return [state, toggle];
}

export default useBooleanToggle;
