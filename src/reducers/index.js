import { combineReducers } from 'redux';
import dataWaveReducer from './dataWaveReducer'

export default combineReducers({
    itemsData: dataWaveReducer
})