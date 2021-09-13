import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, userRegisterReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducers'
import { applicationListReducer, applicationDetailReducer, applicationCommentsReducer, applicationLogsReducer, applicationUpdateReducer } from './reducers/applicationReducers'
import { equipmentListReducer } from './reducers/equipmentReducers'
import { batchListReducer, batchApplicationReducer, batchCurrentReducer} from './reducers/batchReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister:userRegisterReducer,
    userList:userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    applicationList: applicationListReducer,
    applicationDetail: applicationDetailReducer,
    applicationComments: applicationCommentsReducer,
    applicationLogs:applicationLogsReducer,
    applicationUpdate:applicationUpdateReducer,

    batchList: batchListReducer,
    batchApplication: batchApplicationReducer,
    batchCurent: batchCurrentReducer,

    equipmentList: equipmentListReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: {userInfo:userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))


export default store