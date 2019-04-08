import React,{Component} from 'react';
import Image from './Image';
import {connect} from 'react-redux'

class CardDetials extends Component{

   isNumber=(data) =>(Number.isInteger((parseInt(data, 10))));

    render (){
        let {stock,bundle_image,bundle_name,sku,your_price,lowest_price_value,highest_price_value} = this.props.cardDetails || {}
         let dash=<strong style={{"fontSize":"22px"}}>-</strong>;
        return(
            
            this.props.cardDetails && Object.keys(this.props.cardDetails).length? (<div className="cardDetailedView">
            <label style={{"color":"grey"}}>{stock}</label>
            <label style={{"color":"#62A8F2","fontWeight":"bold"}}>{bundle_name}</label>
            <label style={{"marginBottom":"20px"}}>{sku}</label>
            <div className="secondDetailGrid">
            <div className="leftDetailsGrid">
            <Image uiAttributes="biggerImage" image={bundle_image}></Image>
            </div>
            <div className="rightDetailsGrid">
            <div className="eachRightGrid">
            <label style={{"color":"grey"}}>YOUR PRICE</label>
            <label style={{"color":"#62A8F2"}}>{this.isNumber(your_price)?your_price:dash}</label>
            </div>
            <span className="leftBorder"></span>
            <div className="eachRightGrid">
            <label style={{"color":"grey"}}>LOWEST PRICE</label>
            <label style={{"color":"#62A8F2"}}>{this.isNumber(lowest_price_value)?lowest_price_value:dash}</label>
            </div>
            <span className="rightBorder"></span>
            <div className="eachRightGrid">
            <label style={{"color":"grey"}}>HIGHEST PRICE</label>
            <label style={{"color":"#62A8F2"}}>{this.isNumber(highest_price_value)?highest_price_value:dash}</label>
            </div>
            
            </div>
            </div>
            </div>):''
           
        )
    }
}

const mapStateToProps=state=>({
    cardDetails:state.itemsData.eachCard
   
})

export default connect(mapStateToProps,null)(CardDetials);