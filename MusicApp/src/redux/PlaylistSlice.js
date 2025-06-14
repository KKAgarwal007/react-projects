import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
    name: "playlist",
    initialState: [],
    reducers: {
        AddSong: (state, action) => {
            let exist = state.find((song) => song.songindex == action.payload.songindex)
            if(exist){
                return 
            }
            else{
            state.push(action.payload)
                
            }
        }, 
        RemoveSong: (state, action) =>{
            return state.filter((song) => song.songindex !== action.payload)
        }
    }
})

export const {AddSong, RemoveSong} = playlistSlice.actions
export default playlistSlice.reducer