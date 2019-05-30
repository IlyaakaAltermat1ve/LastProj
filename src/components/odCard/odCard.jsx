import React, { Component } from 'react';

export default class OdCard extends Component {

 	render() {

 		return(
 			<>
 			<div className="food-item">
							<div className="food-img">
								<img src={this.props.data.image}/>
							</div>
							<div className="desc-place">
								<h3>{this.props.data.name}</h3>
								<p>{this.props.data.desc}</p>
								<h2>Цена:{this.props.data.price}</h2>
							</div>
			</div>	
 			</>
 		)
 	}
}
