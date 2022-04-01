import React from 'react'
import { Button } from 'reactstrap';

// Imagens
import nossosClientes from '../../imagens/ICON_CLIENTES.png'
import abor from '../../imagens/CLIENTES/ABOR.png'
import bbo from '../../imagens/CLIENTES/BBO.png'
import redeBellas from '../../imagens/CLIENTES/REDE_BELLAS.png'
import cdBbo from '../../imagens/CLIENTES/CDBBO.png'
import topClube from '../../imagens/CLIENTES/TOP_CLUBE.png'
import socinal from '../../imagens/CLIENTES/SOCINAL.png'

class ConteudoAux extends React.Component {

	render () {

		return (
			<div className="conteudoAux p-5">
				<div className="container-fluid row">
					<div className="col-12 col-sm-5">
						<img src={nossosClientes}></img>
						<p className="mb-0">NOSSOS</p>
						<p className="fontType-ExtraBold">CLIENTES</p>
					</div >
					<div className="row col-12 col-sm-6 my-3">
						<div className="row">
							<div className="col-4">
								<img src={abor} width='140vh'></img>
							</div>
							<div className="col-4">
								<img src={bbo} width='140vh'></img>
							</div>
							<div className="col-4">
								<img src={redeBellas} width='140vh'></img>
							</div>
						</div>
						<div className="row my-2">
							<div className="col-4">
								<img src={cdBbo} width='140vh'></img>
							</div>
							<div className="col-4">
								<img src={topClube} width='140vh'></img>
							</div>
							<div className="col-4">
								<img src={socinal} width='140vh'></img>
							</div>

						</div>

					</div>
				</div>
			</div>
		)
	}
}
  
export default ConteudoAux