import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice.js';
import waiversReducer from '../features/waiversSlice.js';
import yourstockReducer from '../features/yourStockSlice.js';
import leagueReducer from '../features/leagueSlice.js';
import ownerLeagueReducer from '../features/ownerLeagueSlice.js';
import scheduleReducer from '../features/scheduleSlice.js';

export default configureStore({
  reducer: {
    user: userReducer,
    waivers: waiversReducer,
    yourstock: yourstockReducer,
    league: leagueReducer,
    ownerLeague: ownerLeagueReducer,
    schedule: scheduleReducer
  }
});
