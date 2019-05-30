import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default class Success extends Component {
	render()  {
		return(

			<>
				<div className="container">
					
					<div className="ScfulImage">
						<img src="https://stickeroid.com/uploads/pic/1032018/thumb/stickeroid_5bf57167d9030.png"></img>
					</div>

					<div className="finDoc">
						<Link className="finDoc-link" to="/">Вернуться на главную страницу</Link>
					</div>
					<img src="https://www.meme-arsenal.com/memes/b812197615bd8b974e24575c8630f25a.jpg"/>

				</div>
			</>

		)


	}


}