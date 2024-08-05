import { createSlice } from "@reduxjs/toolkit";
import addToStorages from "../utils/addToStorages";
import getStorage from "../utils/getStorage";

const storageItem = getStorage('basket') ?
    getStorage('basket').items :
    []

const storageInvoice = getStorage('basket') ?
    getStorage('basket').invoice :
    { totalPrice: 0 }

const initState = {
    items: storageItem,
    invoice: storageInvoice
}

const basketSlice = createSlice({
    name: 'basket',
    initialState: initState,
    reducers: {
        addItem(state, action) {

            const alreadyExist = state.items.some((item) => item.id === action.payload.id)

            state.invoice = {
                ...state.totalPrice, totalPrice: state.invoice.totalPrice + action.payload.price
            }
            if (alreadyExist) {

                state.items = state.items.map(item => {

                    if (item.id === action.payload.id) {
                        return { ...item, quantity: item.quantity + 1 }
                    }

                    return item
                })

            } else {

                state.items = [
                    ...state.items,
                    { ...action.payload, quantity: 1 }
                ]
            }

            addToStorages('basket', state)


        },
        removeItem(state, action) {

            state.invoice = {
                ...state.invoice,
                totalPrice: state.invoice.totalPrice - action.payload.price
            }

            const shoudRemove = action.payload.quantity === 1

            if (shoudRemove) {

                state.items = state.items.filter(item => item.id !== action.payload.id)

            } else {

                state.items = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...action.payload, quantity: action.payload.quantity - 1 }
                    }

                    return item
                })
            }

            addToStorages('basket', state)

        }

    }
})

const { actions, reducer } = basketSlice

export const { addItem, removeItem } = actions
export const basketState = (state) => state.basket
export default reducer 
