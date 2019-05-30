import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {

		return (
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<Link to={'/'} className="navbar-brand" href="#">{this.props.appName}</Link>

						<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
						<Link to={'/orderDetails'} className="nav-link">OOOOOOOOOrderDetails</Link>
						</li>
						<li className="nav-item">
						<Link to={'/'} className="nav-link">Foooooooooooood</Link>
						</li>
						<li className="nav-item">
						<Link to={'/'} className="nav-link">Tut budet nomer!!!</Link>
						</li>
						<li className="nav-item">
						<div className=" basket-card">
							<p>Корзина</p>
							<div className="count-place">{this.props.basket.length}</div> 
						</div> 
						</li>
						</ul>
						</div>
					</nav>
		)	
	}
}	