import { createContext, useMemo, useState } from "react";

export function createCustomContext(defaultState) {
  const Context = createContext(defaultState);

  function Provider({ children }) {
    const [state, setState] = useState(defaultState);

    const contextObj = useMemo(() => {
      return { state, setState };
    }, [state, setState]);
    return <Context.Provider value={contextObj}>{children}</Context.Provider>;
  }

  return { Context, Provider };
}
