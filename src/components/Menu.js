import React,{Component} from 'react';
import PropTypes from "prop-types";
import { getInitialData ,getDataChangeEvent} from "../Actions/dataActions";
import { connect } from 'react-redux'

class Menu extends Component {

    componentDidMount() {
        this.props.getInitialData()
      }
   
      getItems=(path,value)=>{
        this.props.getDataChangeEvent('sort_on','')
        this.props.getDataChangeEvent('sort_by','')
        this.props.getDataChangeEvent('filters.search','')
        this.props.getDataChangeEvent('start','')
        this.props.getDataChangeEvent(path,value)
        this.props.getInitialData();
    }

    render(){
        let { base_view }= this.props.selectedBase || {}
        return (
        <div className="leftMenu">
        <button className={`link ${base_view==='all_products'?'selectedLink':''}`} onClick={()=>this.getItems('base_view','all_products')}>All Matched Products</button>
        <button className={`link ${base_view==='increase_opportunity'?'selectedLink':''}`} onClick={()=>this.getItems('base_view','increase_opportunity')}>Margin gain opportunities</button>
        </div>)
    }
}

Menu.propTypes = {
    count: PropTypes.array.isRequired,
    getInitialData:PropTypes.func.isRequired

}

const mapStateToProps= state=>({
    count:state.itemsData.ecomData,
    selectedBase:state.itemsData.pathParams
    
})

export default connect(mapStateToProps,{getDataChangeEvent,getInitialData})(Menu);