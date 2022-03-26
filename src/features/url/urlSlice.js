import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit";
import {API_URL, CREATE_LINK} from "../../utils/config";
import axios from "axios";

/* ✨ Initializing the state of the slice. */
const initialState = {
    items: [],
    status: "idle"
}

/* It creates a new slice. */
export const createShortLink = createAsyncThunk(CREATE_LINK, async (url, {rejectWithValue}) => {
        try {
            const {data} = await axios.post(`${API_URL}${url}`)
            return data
        } catch (e) {
            const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
            return rejectWithValue(message)
        }
    }
)

/* ✨ It creates a new slice. */
export const urlSlice = createSlice({
    name: "url",
    initialState,
    reducers: {
        resetState: (state) => {
            state.items = []
            state.status = "idle"
        }
    },
    extraReducers: {
        [createShortLink.pending]: (state) => {
            state.status = "loading"
        },
        [createShortLink.fulfilled]: (state, {payload}) => {
            const {ok, result} = payload
            let copy = JSON.parse(JSON.stringify(current(state).items))
            copy.push(result)
            const arrayUniqueByKey = [...new Map(copy.map(item => [item["code"], item])).values()]
            if (ok) {
                state.items = arrayUniqueByKey
                state.status = "idle"
            } else {
                state.status = "error"
            }
        },
        [createShortLink.rejected]: ({payload}) => {
            state.status = payload
        },
    }
})

/* Exporting the `resetUsers` action from the slice. */
export const {resetState} = urlSlice.actions
/* Exporting the reducer. */
export default urlSlice.reducer