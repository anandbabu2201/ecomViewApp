import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getDataChangeEvent,getInitialData} from '../Actions/dataActions'

class SortDropdown extends Component {

    constructor(props){
        super(props);
        this.state={
            showDropdown:false
        }
    }

    static SORTVALUES = {
        "available_price":"PRICE - HIGH TO LOW",
        "discount":"DISCOUNT%- HIGH TO LOW",
        "price_opportunity_increase_by_percentage":"INCREASE%- HIGH TO LOW",
        "not_lowest_decrease_by_percentage":"DECREASE%- HIGH TO LOW"
     }

    toggleDropdown=_=>{
        this.setState({showDropdown:true})
    }

    closeDropdown=_=>{
        this.setState({showDropdown:false})
    }

    sorby=(value)=>{
        this.props.getDataChangeEvent('sort_on',value);
        this.props.getInitialData();
    }
   
    renderOptions = _ =>{
        return Object.entries(SortDropdown.SORTVALUES).map((options,i)=>{
             return <div key={options[0]} role="button" tabIndex="0" onClick={()=>this.sorby(options[0])} className={`filterDropdownSelectorItem `}>{options[1]}</div>
        })

    }
    
    render() {
        let selectOptions = this.renderOptions();
        return (<div className= "comp compFilterDropdownSelector">
            <div className="filterDropdownSelectorContainer" onMouseLeave={this.closeDropdown}>
              <div onClick={this.toggleDropdown} role="button" tabIndex="0" className="filterDropdownSelectorButton"><span className="icon sort-up-down" role="button" /></div>
              <div className={`filterDropdownSelectorItemsContainer ${this.state.showDropdown ? 'show' : ''}`}>
                {selectOptions}
              </div>
            </div>
          </div>);
    }
}

export default connect(null,{getDataChangeEvent,getInitialData})(SortDropdown);