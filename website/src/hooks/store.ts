import React, { useContext, createContext, createElement } from 'react';

const InitalStore: Store = {};
interface ProviderProps {
  children: React.ReactNode;
}

export interface Store {}

type StoreContextType = {
  store: Store;
  dispatch: React.Dispatch<Partial<Store>>;
};

const StoreContext = createContext<StoreContextType>({
  store: {},
  dispatch: () => null,
});

export const reducer = (store: Partial<Store>, action: Partial<Store>) => {
  return {
    ...store,
    ...action,
  };
};
export const useStore = () => useContext(StoreContext);

export const Provider = (props: ProviderProps) => {
  const { children } = props;
  const [store, dispatch] = React.useReducer(reducer, { ...InitalStore });
  return createElement(StoreContext.Provider, {
    value: { store, dispatch },
    children,
  });
};
