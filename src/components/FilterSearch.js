import React,{ Component } from 'react';
import SortDropdown from './SortDropdown';
import {getDataChangeEvent,getInitialData} from '../Actions/dataActions';
import {connect} from 'react-redux'

class FilterSearch extends Component {
    handleSearch=(e)=>{

        this.props.getDataChangeEvent('filters.search',e.target.value)
        if (e.type === 'keyup' && (e.key !== "Enter")) return;
        this.props.getInitialData();
    }

    render (){
        return ( 
        <div className="searchActions">
        <span className="icon search-icon"  onClick={this.handleSearch}/>
        <input className="input search" placeholder="Search on enter"  type="text" onKeyUp={this.handleSearch} name="search" />
         <SortDropdown></SortDropdown>
        <span className="icon download-button" />
        </div>
        )
    }
}

export default connect(null,{getDataChangeEvent,getInitialData})(FilterSearch);