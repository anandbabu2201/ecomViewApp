import React,{Component} from 'react';
import Image from './Image';
import {connect} from 'react-redux'
import {getDetailedView,getDataChangeEvent,getInitialData} from '../Actions/dataActions'


class Card extends Component{

    getItemDetails=(bundle_id)=>{   
        this.props.getDetailedView(bundle_id);
    }

    loadMore=()=>{
        this.props.getDataChangeEvent('start',20);
        this.props.getInitialData();
    }
  
    render(){
        const cards= this.props.eachCard || [];
        const {bundle_name} =this.props.selectedCard || {}
       return (
        <div className="cardsLayout" > 
          {cards.map(e=>{
              let text=e.bundle_name;
              if(e.bundle_name && e.bundle_name.length>40)  text = text.substring(0, 40) + '...';
               return <div key={e.bundle_id} className={`cardBody ${e.bundle_name === bundle_name?'selectedCard':''}`} onClick={()=>this.getItemDetails(e.bundle_id)}>
               <div className="leftGrid">
                <span style={{"color":"#009ACF"}}>{e.available_price}</span>
                <label title={e.bundle_name.length>40?e.bundle_name:''} >{text}</label>
                <span style={{"color":"grey","margin":"5px 0px 10px 0px"}}>{e.sku}</span>
                {!e.is_valid?<span style={{"color":"#009ACF"}}>Product not available</span>:
                e.stock.toUpperCase()==='OUT OF STOCK'?<span style={{"color":"#009ACF"}}>out of stock from <span style={{"color":"#E9421E"}}>{e.out_of_stock_seed_days} </span> day(s)</span>:
                (<React.Fragment><span style={{"color":"#009ACF"}}>increase upto <span style={{"color":"#E9421E"}}>{e.price_opportunity_increase_by}({e.price_opportunity_increase_by_percentage}%)</span></span>
                 <span style={{"color":"#009ACF"}}>opportunity exists from last <span style={{"color":"#E9421E"}}>{e.price_opportunity_days} </span> day(s)</span></React.Fragment>)}
               </div>
               <div className="rightGrid">
                <Image name={e.title} image={e.bundle_image} ></Image>
               </div>
               </div>
           })}
           {this.props.count?<button onClick={this.loadMore} type="button" className="load-more">{this.props.count}  Product(s) More</button>:''}
           </div>
        
       )
    }
}

const mapStateToProps=state=>({
    eachCard:state.itemsData.ecomData,
    selectedCard:state.itemsData.eachCard,
    count:state.itemsData.count
})

export default connect(mapStateToProps,{getDetailedView,getDataChangeEvent,getInitialData})(Card);