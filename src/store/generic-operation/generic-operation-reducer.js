import * as actions from './generic-operation-actions'
import {dashboardList} from '../../lib/dashboardList'

const initialState = {
    list: []
}

function genericOperationReducer(state = initialState,action){
    switch(action.type){
        case actions.GET_DASHBOARD_LIST:
            return {...state,list:dashboardList}
    }
}

export default genericOperationReducer;
