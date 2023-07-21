import React, { createContext, useContext, useReducer } from "react";
const CartState = createContext();
const cartDispatch = createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          Qnt: action.Qnt,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];

    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case "UPDATE":
      let arr = [...state];
      arr.find((food, index) => {
        if (food.id === action.id) {
          arr[index] = {
            ...food,
            Qnt: parseInt(action.Qnt),
            price: action.price + food.price,
          };
        }
      });
      return arr;
    
    case "DROP" :
        let emptyArr = []
        return emptyArr;
        
    default:
      console.log("error in Reducer");
  }
};

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <cartDispatch.Provider value={dispatch}>
      <CartState.Provider value={state}>{children}</CartState.Provider>
    </cartDispatch.Provider>
  );
};

export const useCart = () => useContext(CartState);
export const useDispatchCart = () => useContext(cartDispatch);
