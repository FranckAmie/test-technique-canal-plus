import {createEntitySlice, EntityState, serializeAxiosError} from "./reducer.utils";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {Root, defaultValue} from "../models/Root.model";

const initialState: EntityState<Root> = {
    loading: false,
    errorMessage: null,
    entities: [],
    entity: defaultValue,
    links: { next: 0 },
    updating: false,
    totalItems: 0,
    updateSuccess: false,
};

const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=92b418e837b833be308bbfb1fb2aca1e&language=fr-FR';
const pageNumber = '&page=1';

// Actions

export const getEntities = createAsyncThunk(
    'movie/fetch_entity_list',
    async (type: string | number) => {
        const requestUrl = `${apiUrl}/${type}${pageNumber}`;
        return axios.get<Root>(requestUrl);
    },
    { serializeError: serializeAxiosError });

// slice

export const MoviesSlice = createEntitySlice({
    name: 'page',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(getEntities.fulfilled, (state, action) => {
                state.loading = false;
                state.entity = action.payload.data;
            })
    },
});

export const { reset } = MoviesSlice.actions;

// Reducer
export default MoviesSlice.reducer;