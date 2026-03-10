import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartState= {
    [key: string]: number;
};

const initialState: CartState ={};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state,action: PayloadAction<string>) => {
            const item = action.payload;
            state[item] = (state[item] || 0) + 1;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const item = action.payload;

            if(!state[item]) return;
            state[item] -= 1;

            if(state[item] == 0) {
                delete state[item];
            }
        },
        
    },
});

export const { addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;