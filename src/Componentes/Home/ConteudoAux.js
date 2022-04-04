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
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

// Tema
import tema from '../Tema';


class ConteudoAux extends React.Component {

	render () {

		return (
			<ThemeProvider theme={tema}>
				<Box sx={{bgcolor: '#efefef', p: '30px'}}>
					<Container maxWidth='lg'>
						<Grid container align="center"  alignItems="center">
							<Grid item xs={12} sm={12} md={6} sx={{mb: "10px"}}>
								<img src={nossosClientes} width="120vh"></img> <br />
								<Typography variant="subtitulo">NOSSOS</Typography> <br />
								<Typography variant="subtituloBold">CLIENTES</Typography>
							</Grid>
							<Grid item container xs={12} sm={12} md={6} spacing={1}>
								<Grid item sm={4} md={4}>
									<img src={abor} width='140vh'></img>
								</Grid>
								<Grid item sm={4} md={4}>
									<img src={bbo} width='140vh'></img>
								</Grid>
								<Grid item sm={4} md={4}>
									<img src={redeBellas} width='140vh'></img>
								</Grid>
								<Grid item sm={4} md={4}>
									<img src={cdBbo} width='140vh'></img>
								</Grid>
								<Grid item sm={4} md={4}>
									<img src={topClube} width='140vh'></img>
								</Grid>
								<Grid item sm={4} md={4}>
									<img src={socinal} width='140vh'></img>
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</Box>
			</ThemeProvider>
		)
	}
}
  
export default ConteudoAux