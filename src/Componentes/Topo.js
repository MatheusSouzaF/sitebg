import '../site.css';
import logo from '../imagens/LOGO_BG.png';
import React from 'react'
import { Link } from 'react-router-dom';


class Topo extends React.Component {

	render () {

		return (
			<>	
				<div className="row container-fluid">
					<div className="d-flex justify-content-center my-4">
						<Link to="/">
							<img src={logo} width="250px" className="align-self-center"></img>
						</Link>
					</div>
				</div>
			</>
		)
	}
}

export default Topo