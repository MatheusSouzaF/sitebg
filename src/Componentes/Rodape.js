import React from 'react'

// Imagens
import logoBranco from '../imagens/LOGO_BG_W.png'

// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

// Tema
import tema from './Tema';

class Rodape extends React.Component {

	render () {

		return (
			<ThemeProvider theme={tema}>
				<Box sx={{backgroundColor: '#e5b54a', color: '#ffffff', pt: '20px'}} align="center">
					<Container maxWidth="lg">
						<Grid container justifyContent="center" alignItems="center">
							<Grid item md={4} className="ocultarQuandoPequeno">
								<Box sx={{ borderRight: 1, boderColor: '#ffffff', px:'3vw', height: '110px', pt: '30px', justifyContent: "center"}}>
									<img src={logoBranco} width="200vh" justify="center" alt="Logo BG"></img>
								</Box>

							</Grid>
							<Grid item xs={12} sm={12} md={4} align="center" className="ocultarQuandoGrande" >
								<Box sx={{ px:'3vw', pt: '30px', justifyContent: "center"}}>
									<img src={logoBranco} width="200vh" justify="center" alt="Logo BG"></img>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={3}>
								<Box  sx={{ borderRight: 1, boderColor: '#ffffff', px:'4vw', height: '110px', pt: '20px'}} className="ocultarQuandoPequeno">
									<a href="https://tiro.digital"			className="link-branco">Tiro Digital</a><br />
									<a href="https://sim.med.br" 			className="link-branco">SIM			</a><br />
									<a href="https://democratize.com.br" 	className="link-branco">Democratize	</a>
								</Box>
								<Box  sx={{ px:'4vw', pt: '20px', mt: '20px'}} className="ocultarQuandoGrande seMobileCentralizarTexto" >
									<a href="https://tiro.digital"			className="link-branco">Tiro Digital</a><br />
									<a href="https://sim.med.br" 			className="link-branco">SIM			</a><br />
									<a href="https://democratize.com.br" 	className="link-branco">Democratize	</a>
								</Box>
							</Grid>
							<Grid item xs={12} sm={12} md={5}>
								<Box  sx={{px:'4vw', my: '7vh', height: '110px', pt: '10px'}} className="ocultarQuandoPequeno">
									<Typography variant='rodape'>
										Avenida Getúlio Vargas, 221 - Sala 703 <br />
										Centro - Araruama | CEP: 28979-129 <br />
										contato@bgstudios.com.br <br />
										(22) 2661-5889
									</Typography>
								</Box>
								<Box  sx={{ px:'4vw', my: '20px', height: '110px', pt: '20px'}} className="ocultarQuandoGrande seMobileCentralizarTexto">
									<Typography variant='rodape'>
										Avenida Getúlio Vargas, 221 - Sala 703 <br />
										Centro - Araruama | CEP: 28979-129 <br />
										contato@bgstudios.com.br <br />
										+55 (11) 3136-1448
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</ThemeProvider>
		)
	}
}

export default Rodape