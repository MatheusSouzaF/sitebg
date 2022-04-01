import React from 'react'
import logoBranco from '../imagens/LOGO_BG_W.png'
import { Link } from 'react-router-dom';


class Topo extends React.Component {

	render () {

		return (
			<div className="container-fluid rodape py-5 mt-3 justify-content-center">
				<div className="row container-lg mx-5">
					<div className="col-auto border-end border-white">
						<div className="col-auto align-self-center">
							<Link to="/">
								<img src={logoBranco} width="200vh" verticalAlign="center"></img>
							</Link>
						</div>
					</div>
					<div className="col-auto border-end border-white">
						<div className="col-auto align-content-center">
							<a href="https://tiro.digital"			className="link-branco">Tiro Digital</a><br />
							<a href="https://sim.med.br" 			className="link-branco">Democratize	</a><br />
							<a href="https://democratize.com.br" 	className="link-branco">SIM			</a>
						</div>
					</div>
					<div className="col-auto align-self-center align-middle">
						<p className="my-0">Avenida Getúlio Vargas, 221 - Sala 703</p>
						<p className="my-0">Centro - Araruama | CEP: 28979-129</p>
						<p className="my-0">contato@bgstudios.com.br</p>
						<p className="my-0">(22) 2661-5889</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Topo