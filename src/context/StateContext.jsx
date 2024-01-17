import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCT", payload: productList });
    const filterProduct = productList.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
    dispatch({ type: "GET_PRODUCT", payload: filterProduct });
  }, [productList, search]);

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProductList(data);
  };

  const initialState = {
    products: [],
    carts: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch, search, setSearch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};
export const useContextCustom = () => useContext(StateContext);
