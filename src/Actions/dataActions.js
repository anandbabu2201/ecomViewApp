import { GET_INITIALDATA,GET_DETAILEDVIEW, EVENT_DATA_CHANGE} from './types';
import axios from 'axios';
import store from '../store';

export const getInitialData=()=> async dispatch =>{
    let params= buildParameters();
    const res = await axios.get(`https://app.dataweave.com/v6/app/retailer/bundles/?&${params}`);
    let eachCard={}
    if(res.data && res.data.data && res.data.data.length){
     let params= buildParameters().split('&')[0];
     eachCard= await axios.get(`https://app.dataweave.com/v6/app/retailer/bundle_overview/?&api_key=38430b87ac715c5858b7de91fb90b3f7&${params}&bundle_id=${res.data.data[0].bundle_id}`)
    }
    dispatch({
        type:GET_INITIALDATA,
        payload:{data:res.data}
    })
    dispatch({
        type:GET_DETAILEDVIEW,
        payload:eachCard.data || {}
    })
}

export const getDataChangeEvent=(path, data)=>dispatch=> {
    dispatch ({
      type: EVENT_DATA_CHANGE,
      payload:{path,data}
    })
  }


export const getDetailedView=(bundle_id)=> async dispatch =>{
    let params= buildParameters().split('&')[0];

    const res= await axios.get(`https://app.dataweave.com/v6/app/retailer/bundle_overview/?&api_key=38430b87ac715c5858b7de91fb90b3f7&${params}&bundle_id=${bundle_id}`)
    dispatch({
        type:GET_DETAILEDVIEW,
        payload:res.data
    })
}

export function buildParameters() {
    const {itemsData:{ pathParams={} }={}} = store.getState();
    if(!pathParams) return;
    let parameters = [];
    Object.entries(pathParams).forEach((eachParam) => {
         if(typeof eachParam[1] === 'object')
          eachParam[1]=JSON.stringify(eachParam[1]);
          parameters.push(`${eachParam[0]}=${eachParam[1]}`);
      });
      parameters = parameters.join('&');
    return parameters;
  }


