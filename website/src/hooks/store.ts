import React, { useContext, createContext, createElement, useEffect } from 'react';
import { getQuestionList } from '@/services';
import { Toast } from '@/components/toast';

export interface Store {
  keyword?: string;
  /**列表数据*/
  dataList: any[];
  /**当前页*/
  page: number;
  /**每页数*/
  pageSize: number;
  /**总数*/
  total: number;
  /**题目类型*/
  type?: string;
  loading?: boolean;
}

const InitalStore: Store = {
  dataList: [],
  pageSize: 20,
  page: 1,
  total: 0,
};
interface ProviderProps {
  children: React.ReactNode;
}

type StoreContextType = {
  store: Store;
  dispatch: React.Dispatch<Partial<Store>>;
  getList: (params: Partial<Store>) => Promise<unknown>;
};

const StoreContext = createContext<StoreContextType>({
  store: { ...InitalStore },
  dispatch: () => null,
  getList: async () => null,
});

export const reducer = (store: Store, action: Partial<Store>) => {
  return {
    ...store,
    ...action,
  };
};
export const useStore = () => useContext(StoreContext);

const Provider = (props: ProviderProps) => {
  const { children } = props;
  const [store, dispatch] = React.useReducer(reducer, { ...InitalStore });

  /**列表查询**/
  const getList = async (params: Partial<Store> = {}) => {
    const newStore = { ...store, ...params };
    const newParams = {
      page: newStore.page || 1,
      pageSize: newStore.pageSize || 20,
      type: newStore.type,
    };
    dispatch({ ...newStore, ...newParams, loading: true });
    try {
      const result = await getQuestionList(newParams);
      // 查询成功
      if (result.code === 1) {
        dispatch({ dataList: result.data.rows || [], total: result.data.total || 0, loading: false });
      } else {
        Toast.error(result.message);
      }
    } catch (err) {
      Toast.error((err as any).message);
      dispatch({ loading: false });
    }
  };

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createElement(StoreContext.Provider, {
    value: { store, dispatch, getList },
    children,
  });
};
export default Provider;
