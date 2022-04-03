import React from 'react'
import logoBranco from '../imagens/LOGO_BG_W.png'
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

class Rodape extends React.Component {

	render () {

		return (
			<Box sx={{backgroundColor: '#e5b54a', color: '#ffffff', pt: '20px'}} align="center">
				<Grid container justifyContent="center" alignItems="center">
					<Grid item>
						<Box  sx={{ borderRight: 1, boderColor: '#ffffff', px:'3vw', height: '110px', pt: '30px'}}>
							<Link to="/">
								<img src={logoBranco} width="200vh" justify="center"></img>
							</Link>
						</Box>
					</Grid>
					<Grid item>
						<Box  sx={{ borderRight: 1, boderColor: '#ffffff', px:'4vw', height: '110px', pt: '20px'}}>
							<a href="https://tiro.digital"			className="link-branco">Tiro Digital</a><br />
							<a href="https://sim.med.br" 			className="link-branco">Democratize	</a><br />
							<a href="https://democratize.com.br" 	className="link-branco">SIM			</a>
						</Box>
					</Grid>
					<Grid item>
						<Box  sx={{px:'4vw', my: '2vh', height: '110px', pt: '10px'}}>
							<Typography>
								Avenida Getúlio Vargas, 221 - Sala 703 <br />
								Centro - Araruama | CEP: 28979-129 <br />
								contato@bgstudios.com.br <br />
								(22) 2661-5889
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		)
	}
}

export default Rodape