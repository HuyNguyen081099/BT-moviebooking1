import { combineReducers } from 'redux'
import { baiTapMovieBookingReducer } from './baiTapMoviebooking/slice'


export const rootReducer = combineReducers({

    baiTapMovieBooking: baiTapMovieBookingReducer,
 
})
