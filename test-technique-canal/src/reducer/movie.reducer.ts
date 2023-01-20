import {createEntitySlice, EntityState, serializeAxiosError} from "./reducer.utils";
import {defaultValue} from "../models/Result.model";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

import {Movie} from "../models/Movie.model";

const initialState: EntityState<Movie> = {
    loading: false,
    errorMessage: null,
    entities: [],
    entity: defaultValue,
    links: { next: 0 },
    updating: false,
    totalItems: 0,
    updateSuccess: false,
};

const apiUrl = 'https://api.themoviedb.org/3/' ;
const apiKey = '?api_key=92b418e837b833be308bbfb1fb2aca1e'
const langKey = '&language=fr-FR';

// Actions

export const getEntity = createAsyncThunk(
    'movie/fetch_entity',
    async (id: string | number) => {
        const requestUrl = `${apiUrl}/movie/${id}${apiKey}${langKey}`;
        return axios.get<Movie>(requestUrl);
    },
    { serializeError: serializeAxiosError }
);

// slice
export const MovieSlice = createEntitySlice({
    name: 'movie',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(getEntity.fulfilled, (state, action) => {
                state.loading = false;
                state.entity = action.payload.data;
            })
    },
});

export const { reset } = MovieSlice.actions;

// Reducer
export default MovieSlice.reducer;