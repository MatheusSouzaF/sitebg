import React from 'react'

// Imagens
import nossosClientes from '../../imagens/ICON_CLIENTES.png'
import abor from '../../imagens/CLIENTES/ABOR.png'
import bbo from '../../imagens/CLIENTES/BBO.png'
import redeBellas from '../../imagens/CLIENTES/REDE_BELLAS.png'
import cdBbo from '../../imagens/CLIENTES/CDBBO.png'
import topClube from '../../imagens/CLIENTES/TOP_CLUBE.png'
import socinal from '../../imagens/CLIENTES/SOCINAL.png'

// Material UI
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';



class ConteudoAux extends React.Component {

	render () {

		return (
			<Box sx={{bgcolor: '#efefef', p: '30px'}}>
				<Container maxWidth='lg'>
					<Grid container  align="center" alignItems="center">
						<Grid item sm={12} md={6}>
							<img src={nossosClientes} width="23%"></img>
							<p className="mb-0 mt-1 fs-2">NOSSOS</p>
							<p className="fontType-ExtraBold fs-3">CLIENTES</p>
						</Grid>
						<Grid item container sm={12} md={6}>
							<Grid item sm={6} md={4}>
								<img src={abor} width='140vh'></img>
							</Grid>
							<Grid item sm={6} md={4}>
								<img src={bbo} width='140vh'></img>
							</Grid>
							<Grid item sm={6} md={4}>
								<img src={redeBellas} width='140vh'></img>
							</Grid>
							<Grid item sm={6} md={4}>
								<img src={cdBbo} width='140vh'></img>
							</Grid>
							<Grid item sm={6} md={4}>
								<img src={topClube} width='140vh'></img>
							</Grid>
							<Grid item sm={6} md={4}>
								<img src={socinal} width='140vh'></img>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
			// <div className="container-fluid conteudoAux" align="center">
			// 	<div className="container-lg row align-items-center">
			// 		<div className="col-12 col-sm-6">
			// 			<img src={nossosClientes} width="23%"></img>
			// 			<p className="mb-0 mt-1 fs-2">NOSSOS</p>
			// 			<p className="fontType-ExtraBold fs-3">CLIENTES</p>
			// 		</div >
			// 		<div className="row col-12 col-sm-6 my-4">
			// 			<div className="row">
			// 				<div className="col-4">
			// 					<img src={abor} width='140vh'></img>
			// 				</div>
			// 				<div className="col-4">
			// 					<img src={bbo} width='140vh'></img>
			// 				</div>
			// 				<div className="col-4">
			// 					<img src={redeBellas} width='140vh'></img>
			// 				</div>
			// 			</div>
			// 			<div className="row mt-2">
			// 				<div className="col-4">
			// 					<img src={cdBbo} width='140vh'></img>
			// 				</div>
			// 				<div className="col-4">
			// 					<img src={topClube} width='140vh'></img>
			// 				</div>
			// 				<div className="col-4">
			// 					<img src={socinal} width='140vh'></img>
			// 				</div>

			// 			</div>

			// 		</div>
			// 	</div>
			// </div>
		)
	}
}
  
export default ConteudoAux