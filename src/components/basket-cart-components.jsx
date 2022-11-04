import { Link } from "react-router-dom"
import { connect } from "react-redux"



const BasketCart =(props)=>{
   // console.log(props.basket)


   const totalPrice=props.basket.reduce((total,product)=>(total+=product.price),0)
    return(
        <div>
            <h2>

            <Link to="/">&#10094; Alınacaklar listesi</Link>
            <span>Faturam</span>
  
            </h2>
            {
                props.basket.map((product)=>(
                    <div className="product">
                    <img src={product.image} alt={product.name} />
                    <div>
                        <h4>{product.name}</h4>
                        <p>{product.price} &#8378;</p>
                       
                    </div>
                </div>
                ))
            }
            <h3>Toplam Sepet Tutarı:{totalPrice.toFixed(2)} &#8378;</h3>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        basket:state.basket
    }
}


export default connect(mapStateToProps) (BasketCart)