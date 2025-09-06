// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchCartItems, deleteFromCartThunk } from './cartThunk';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exists = state.items.find(i => i.id === item.id);
      if (exists) {
        exists.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteFromCartThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(i => i.id !== action.payload);
      });
  }
});

export const { addToCart, updateCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
