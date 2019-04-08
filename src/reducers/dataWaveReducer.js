import { GET_INITIALDATA,GET_DETAILEDVIEW,EVENT_DATA_CHANGE } from '../Actions/types';

const initialState={
    ecomData:[],
    eachCard:{},
    pathParams:{
        "base_view":"all_products",
        "api_key":"38430b87ac715c5858b7de91fb90b3f7",
        "filters":{"search":""},
        "limit":20
    }
};

export default function(state = initialState, action) {
    switch(action.type)
    {
        case GET_INITIALDATA: {
        if (!action.payload || !action.payload.data)
          return state;
        let { data}=action.payload
         return {...state,ecomData:data.data,count:data.count};
        }
        case EVENT_DATA_CHANGE :{
            let {path,data}=action.payload;
            let { pathParams } = state;
            path=path.split(".")
            if(path.length>1)
              pathParams[path[0]][path[1]]=data;
            else
             pathParams[path]=data;
            return  {...state,pathParams:pathParams}
        }
         case GET_DETAILEDVIEW:
         return {...state,eachCard:action.payload.data};
         default :
           return state;
    }

}