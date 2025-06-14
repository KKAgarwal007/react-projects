import { createSlice } from "@reduxjs/toolkit";

const LikedSlice = createSlice({
    name: "playlist",
    initialState: [],
    reducers: {
        AddLike: (state, action) => {
            let exist = state.find((song) => song.songindex == action.payload.songindex)
            if(exist){
                return 
            }
            else{
            state.push(action.payload)
                
            }
        }, 
        RemoveLike: (state, action) =>{
            return state.filter((song) => song.songindex !== action.payload)
        }
    }
})

export const {AddLike, RemoveLike} = LikedSlice.actions
export default LikedSlice.reducer