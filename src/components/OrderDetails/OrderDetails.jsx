import React, { Component } from 'react';
import OdCard from '../odCard/odCard.jsx';
import { Link } from 'react-router-dom'

export default class OrderDetails extends Component {
	onSubmit = (event) => {
		event.preventDefault();
		let order = {
			personalData: {
				name: this.namePlace.value,
				surname: this.surnamePlace.value, 
				email: this.emailPlace.value,
				phoneNumber: this.phoneNumberPlace.value
			},
			contactData: {
				city: this.cityPlace.value,
				address: this.addressPlace.value,
				finalPrice: 2500
			}
		}
		console.log(order);
	}

	render() {

		let odCards = this.props.basket.map((odItem, i) => {
			return(
				<OdCard basket={this.props.basket} data={odItem} index={i} key={i}/>
			)
		});

		console.log(odCards)

		return(
			<>
				<div className="container">
					<div className="OrderComponents">
						<h1>Ваш заказ</h1>
						{odCards}
						<p className="final-price">Итого:{this.finalPrice}</p>
							<form className="OrderForm" onSubmit={this.onSubmit}>
							  <div className="form-group">
							  	<div className="col-14 name">
							  		<label>Имя</label>
							      <input ref={(el) => this.namePlace = el} type="text" className="form-control" placeholder="First name"/>
							    </div>
							    <div className="col-14 name">
							    	<label>Фамилия</label>
							      <input ref={(el) => this.surnamePlace = el} type="text" className="form-control" placeholder="Last name"/>
							    </div>
							    <label>Город</label>
							    <input ref={(el) => this.cityPlace = el} type="text" className="form-control" placeholder="Введите ваш город"/>
							    <label>Адрес</label>
							    <input ref={(el) => this.addressPlace = el} type="text" className="form-control" placeholder="Номер дома и название улицы"/>
							    <label>Электронная почта</label>
							    <input ref={(el) => this.emailPlace = el} type="email" className="form-control" placeholder="Введите адрес вашей  эл.почты"/>
							    <small className="form-text text-muted">Мы никогда не поделимся введенными вами данными.</small>
							  </div>
							  <div className="form-group">
							    <label>Телефон</label>
							    <input ref={(el) => this.phoneNumberPlace = el} type="number" className="form-control" placeholder="+7 ... "/>
							  </div>
							  <label>Примечания к заказу (необязательно)</label>
							    <p><textarea className="info" placeholder="Примечания"></textarea></p>
							  <label>Кол-во персон(необязательно): <span>{this.setState.rangeValue}</span></label>
								<input onChange={ (e) => this.setState({rangeValue: e.target.value})} type="range" className="custom-range" min="0" max="5" step="0.5" id="customRange3"/>
							  <Link to={'/success'} type="submit" value="Submit" className="btn btn-primary getOrder">Завершить</Link>
							</form>
					</div>
					<div className="OtherComponents">
						<div className="grandma-photo">
							<img src="http://img.lenagold.ru/s/starg/oldlady085.png"/>
						</div>
					</div>	
				</div>
			</>
			)

	}
}
