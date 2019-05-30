import React, {Component} from 'react';
import FoodCard from '../FoodCard/FoodCard.jsx'


export default class MainPage extends Component {
	render() {

		let foodCards = this.props.foodList.map((foodItem, i) => {
			
			return(
				<FoodCard addToBasket={this.props.addToBasket} data={foodItem} index={i} key={i}/>
			)
		})

		

		return (
			<>
				<div className="jumbotron">
      				<div className="grandma-img">
      					{/*<h3>Grandma Image</h3>*/}
      					<img src="https://emojio.ru/images/apple-b/1f475-1f3fb.png"/>
      				</div>
      				<div className="delivery-desc">
      					<h1>Самая домашняя доставка в твоем городе</h1>
      					<h2>Домашняя еда из свежих фермерских продуктов,приготовленная с любовью и заботой</h2>
      				</div>
      			</div>


      			<div className="container">
				<div className="row">
						{foodCards}
				</div>
				</div>
			</>
			)


	}



}