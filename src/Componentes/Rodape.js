import React from 'react'
import logoBranco from '../imagens/LOGO_BG_W.png'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Item = styled(({ theme }) => ({
	border: '2px solid #ffffff'
}));
class Rodape extends React.Component {

	render () {

		return (
			<Box sx={{backgroundColor: '#e5b54a', color: '#ffffff'}}>
				<Grid justifyContent="center">
					<Grid item xs={3}>
						<Box  sx={{ borderRight: 1, boderColor: '#ffffff'}}>
							<Link to="/">
								<img src={logoBranco} width="200vh"></img>
							</Link>
						</Box>
					</Grid>
					<Grid item>
						<div className="p-3" align="left">
							<a href="https://tiro.digital"			className="link-branco">Tiro Digital</a><br />
							<a href="https://sim.med.br" 			className="link-branco">Democratize	</a><br />
							<a href="https://democratize.com.br" 	className="link-branco">SIM			</a>
						</div>
					</Grid>
				</Grid>
				<div className="row container-lg">
						{/* <div className="col-3 border-end border-white">
							<div className="p-4">
								<Link to="/">
									<img src={logoBranco} width="200vh"></img>
								</Link>
							</div>
						</div> */}
					{/* <div className="col-3 border-end border-white">
						<div className="p-3" align="left">
							<a href="https://tiro.digital"			className="link-branco">Tiro Digital</a><br />
							<a href="https://sim.med.br" 			className="link-branco">Democratize	</a><br />
							<a href="https://democratize.com.br" 	className="link-branco">SIM			</a>
						</div>
					</div> */}
					<div className="col-6 px-4" align="left">
						<p className="my-0">Avenida Getúlio Vargas, 221 - Sala 703</p>
						<p className="my-0">Centro - Araruama | CEP: 28979-129</p>
						<p className="my-0">contato@bgstudios.com.br</p>
						<p className="my-0">(22) 2661-5889</p>
					</div>
				</div>
			</Box>
		)
	}
}

export default Rodape