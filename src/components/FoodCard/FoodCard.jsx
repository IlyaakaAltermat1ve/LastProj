import React, { Component } from 'react'

export default class FoodCard extends Component {

	render() {



		return (
			<>
			<div className="card food-card">
					  <img src={this.props.data.image} className="card-img-top" alt=""/>
					  <div className="card-body top-side">
					    <h5 className="card-title">{this.props.data.name}</h5>
					    <p className="card-text">{this.props.data.desc}</p>
					  </div>
					  <div className="card-body bottom-side">
					    <a href="#" className="card-link" onClick={() =>  {this.props.addToBasket(this.props.index)}}>Добавить к заказу</a>
					    <p>{this.props.data.price}<span>₽</span></p>
					    <small>({this.props.data.weight} граммов)</small>
					  </div>
					  	
			</div>
			</>
		)
	}

}