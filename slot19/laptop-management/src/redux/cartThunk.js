// src/redux/cartThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
  const res = await axios.get('http://localhost:3001/Laptops');
  return res.data.map(item => ({ ...item, name: `${item.brand} ${item.model}`, quantity: 1 }));
});

export const deleteFromCartThunk = createAsyncThunk('cart/deleteFromCartThunk', async (id) => {
  return id;
});