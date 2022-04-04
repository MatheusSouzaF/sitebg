import React from 'react'

// Imagens
import iconEvento from '../../imagens/ICON_EVENTOS.png'
import abor from '../../imagens/EVENTOS/CONGRESSO_ABOR.png'
import ortoPremium from '../../imagens/EVENTOS/ORTO_PREMIUM.png'
import simposioICES from '../../imagens/EVENTOS/SIMPÓSIO_ICES.png'

// Material UI
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

// Tema
import tema from '../Tema';

// Carousel
import Carousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const items = [
	<Box sx={{mt: '10px', display: 'inline-block', width: '350px'}} align= 'center'>
		<img src={abor} role="presentation" width="95%" align="center"/> 
		<Box sx={{ justifyContent:"center", display: 'flex'}}>
			<Typography variant="textoPrincipal" >12º Congresso Internacional ABOR</Typography>
		</Box>
	</Box>,
	<Box sx={{mt: '10px', display: 'inline-block', width: '350px'}}>
		<img src={ortoPremium} role="presentation" width="95%" align="center" /> 
		<Box sx={{ justifyContent:"center", display: 'flex'}}>
			<Typography variant="textoPrincipal" >Simpósio ICES UFRJ 50 anos</Typography>
		</Box>
	</Box>,
	<Box sx={{mt: '10px', display: 'inline-block', width: '350px'}}>
		<img src={simposioICES}  role="presentation" width="95%" align="center" />
		<Box sx={{ justifyContent:"center", display: 'flex'}} align="center">
			<Typography variant="textoPrincipal">Orto Premium Rio 2022</Typography>
		</Box>
	</Box>,
]

class CarouselPag extends React.Component {
	constructor(props) {
		super(props);
	}


	render () {

		return (
			<ThemeProvider theme={tema}>
				<Container maxWidth="lg">
					<Box sx={{ mt: '30px', justifyContent:"center", display: 'flex'}}>
						<Box sx={{ display: 'inline-block'}}>

							<img src={iconEvento} width="100vw" />
						</Box>
						<Box sx={{ display: 'inline-block', ml: '10px'}}>
							<Typography variant="subtitulo">EVENTOS</Typography> <br />
							<Typography variant="subtituloBold">FÍSICOS E DIGITAIS</Typography>
						</Box>
					</Box>
					<Box sx={{ justifyContent:"center", display: 'flex', mb: "20px"}}>
						<Typography variant="textoPrincipal" >Soluções para o sucesso do seu evento</Typography>
					</Box>

					<Box align="center" sx={{mb: "20px"}}>
						<Carousel 
							mouseTracking 
							autoWidth 
							autoPlay
							// autoPlayControls
							autoPlayStrategy="none"
							autoPlayInterval={2000}
							animationDuration={2500}
							animationType="fadeout"
							infinite
							touchTracking={false}
							disableDotsControls
							disableButtonsControls
							items={items}
							paddingLeft={75}
							paddingRight={75}
							
						/>
					</Box>
						
				</Container>
			</ThemeProvider>
		)
	}
}
export default CarouselPag