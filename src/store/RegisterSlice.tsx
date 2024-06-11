import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { create } from 'domain'

export const registerSlice = createSlice({
  name: "telValue",
  initialState: {
    lastName: "",
    firstName: "",
    mail: "",
    address: "",
    tel: "",
    zip: "",
    password: "",
    gender: "男性",
    confirmPassword: ""
  },
  reducers:{
    lastNameInput: (state,action) => {
      state.lastName = action.payload;
    },
    firstNameInput: (state,action) => {
      state.firstName = action.payload;
    },
    mailInput: (state,action) => {
      state.mail = action.payload;
    },
    addressInput: (state,action) => {
      state.address = action.payload;
    },
    telInput: (state,action) => {
      state.tel = action.payload;
    },
    zipInput: (state,action) => {
      state.zip = action.payload;
    },
    genderInput: (state,action) => {
      state.gender = action.payload;
    },
    passwordInput: (state,action) => {
      state.password = action.payload;
    },
    confirmPasswordInput: (state,action) => {
      state.confirmPassword = action.payload;
    }
  }
})

export const {lastNameInput,firstNameInput,mailInput,addressInput,telInput,passwordInput,confirmPasswordInput,zipInput,genderInput} = registerSlice.actions;
export default registerSlice.reducer;
