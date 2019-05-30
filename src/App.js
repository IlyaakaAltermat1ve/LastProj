import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { Route } from 'react-router-dom';
import Main from './components/Main/Main.jsx';
import OrderDetails from './components/OrderDetails/OrderDetails.jsx';
import Success from './components/Success/Success.jsx'

class App extends Component {
	constructor() {
		super();
		this.state = {
			appName: 'Food Delivery',
			foodList: [
				{
					name:'Домашний пирог',
					desc:'Дрожжевое тесто, мясо куры, шампиньоны, лук пассированный, зелень',
					price: 200,
					image: 'https://w-dog.ru/wallpapers/5/0/300147018924812.jpg', 
					weight: 100 
				},
				
				{
					name:'Домашние котлеты',
					desc:'самобытное блюдо русской национальной кухни, которое отлично подходит для званого или праздничного обеда',
					price: 350,
					image: 'https://rational-k.kz/sites/default/files/common/_mg_9854.jpg', 
					weight: 500 
				},

				{
					name:'Домашние блины',
					desc:'руглые жаренные тонкие сдобные лепешки, приготовленные из жидкого теста',
					price: 125,
					image: 'https://img13.postila.io/resize?w=336&src=%2Fdata%2F2a%2Fba%2Fdf%2Fa0%2F2abadfa04e1eca2565653779c090fb61bf5387e8b06954bc08d25b25d9421032.jpg', 
					weight: 240 
				},

				{
					name:'Домашний кисель',
					desc:'сладкое десертное желеобразное или жидкое третье блюдо, приготавливаемое из свежих и сушеных фруктов и ягод.',
					price: 430,
					image: 'http://multivarka-receptik.ru/wp-content/uploads/2017/09/kak-svarit-kisel-2.jpg', 
					weight: 50 
				},

				{
					name:'Домашний супчик',
					desc:'густой суп, имеющий однородную, вязкую консистенцию, готовится из протертых овощей, круп, мяса, птицы или рыбы ',
					price: 734,
					image: 'https://st.vkuso.ru/data/cache/thumb/5d/b548df69041bb5d_600x400.jpg', 
					weight: 200 
				},

				{
					name:'Домашние макароны',
					desc:' кулинарное блюдо, основными ингредиентами которого являются отварные макароны, перемешанные с обжаренным тушёным мясом или фаршем',
					price: 666,
					image: 'https://receptino.ru/images/makarony/makarony-po-flotski-12b.jpg', 
					weight: 330 
				},

				{
					name:'Домашняя наливочка (18+)',
					desc:'сладкий фруктово-ягодный спиртной напиток. Крепость — 18—20 %, объёмная сахаристость — 28—40 %.',
					price: 90,
					image: 'http://cookstories.ru/uploads/posts/2016-01/1452522450_res.jpg', 
					weight: 65 
				},

			],
			basket: []
		}
	}


	addToBasket = itemIndex => {
		let	basket = this.state.basket;
		let foodList = this.state.foodList;

		basket.push(foodList[itemIndex]);
	
		this.setState({basket : basket});
		console.log(this.state.basket)	
	}


  render() {
    return (
         <>	
      			<Navbar appName={this.state.appName} basket={this.state.basket}/>
      			<Route exact path="/"
      			render={(props) => <Main addToBasket={this.addToBasket} foodList={this.state.foodList}/>}/>
      			<Route path="/orderDetails"
      			render={(props) => <OrderDetails basket={this.state.basket}/>}/>
      			<Route path="/success" component={Success}/>
      	</>
    );
  }
}

export default App;
