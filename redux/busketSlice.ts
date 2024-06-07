import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface BasketState {
  items: Product[];
}



const initialState: BasketState = {
    items:[]
};

export const busketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state: BasketState, action:PayloadAction<Product>) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state: BasketState, action:PayloadAction<{id:string}>) => {
            const index = state.items.findIndex((item:Product) => item._id === action.payload.id);
            let newBasket = [...state.items];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.payload.id}) as its not in basket!`);
            }
            state.items = newBasket;
        },
    
    },
}
)

export const selectBasketItems = (state:RootState) => state.basket.items;
export const selectBasketItemsWithId = (state: RootState,id:string) => {
    state.basket.items.filter((item:Product) => item._id===id)
};

export const selectBasketTotal = (state: RootState) => {
    return state.basket.items.reduce((total:number, item:Product) => total += item.price, 0)
};


export const { addToBasket, removeFromBasket } = busketSlice.actions;

export default busketSlice.reducer;

