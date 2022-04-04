import React from 'react'

// Imagens e animação
import animacao from '../../imagens/ANIMACAO/DISPOSITIVOS.mp4';
import principaisProjetos from '../../imagens/ICON_PRINCIPAIS PROJETOS.png'
import notebook from '../../imagens/NOTEBOOK_TIRO.png'
import tiroDigital from '../../imagens/LOGO_TIRO.png'
import logoSIM from '../../imagens/LOGO_SIM.png'
import telefoneSIM from '../../imagens/TELEFONE_SIM.png'
import tabletDemocratize from '../../imagens/TABLET_DEMOCRATIZE.png'
import logoDemocratize from '../../imagens/LOGO_DEMOCRATIZE.png'

//Material UI
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const temaTopo = createTheme({
	typography: {
	  titulo: {
		fontSize: "35pt",
	  },
	  body1: {
		fontWeight: 500,
	  },

	},
});


const temaSecundario = createTheme({
	typography: {
		titulo: {
			fontSize: '25pt',
		},
	}
});

const temaConteudo = createTheme({
	typography: {
		conteudo: {
			fontSize: '25pt',
		},
	}
});

class Conteudo extends React.Component {
	constructor(props) {
		super(props);
	}

	bgTopo () {
		return (
			<ThemeProvider theme={temaTopo}>
				<Box sx={{ flexGrow: 1, mb: "20px" }}>
					<Grid container spacing={5}>
						<Grid item sm={12} md={6}>
							<Typography variant="titulo" className="fontType-ExtraBold">Inovando com tecnologia para melhores negócios </Typography>
							<p></p>
						</Grid>
						<Grid item sm={12} md={6}>
							<video autoPlay muted src={animacao} width="95%"></video>
						</Grid>
					</Grid>
				</Box>
			</ThemeProvider>
		)
	}
	principaisProjetos () {
		return (
			<ThemeProvider theme={temaSecundario}>
				<Box sx={{ mt: '30px', justifyContent:"center", display: 'flex'}}>
					<Box sx={{ display: 'inline-block'}}>
						<img width="80vw" className="" src={principaisProjetos}></img>
					</Box>
					<Box sx={{ display: 'inline-block', mt: '10px', ml: '20px'}}>
						<Typography variant="titulo" >PRINCIPAIS</Typography> <br />
						<Typography variant="titulo" className="fontType-ExtraBold">PROJETOS</Typography>
					</Box>
				</Box>
			</ThemeProvider>
		)
	}
	tiro () {
		return (
			<ThemeProvider theme={temaConteudo}>
				<Box sx={{ flexGrow: 1, mb: "20px"}}>
					<Grid container spacing={5}>
						<Grid item sm={12} md={6}>
							<img src={notebook} width="400px" align="right" loading="lazy"></img> 
						</Grid>
						<Grid item sm={12} md={6}>
							<img src={tiroDigital} width="280vh"></img> 
							<Typography>O tiro.digital surgiu no intuito de revolucionar o mundo do tiro. Com tecnologia de ponta para o controle e gestão de Clubes, lojas de armas, IATS e psicólogos. Tendo como principal objetivo de desburocratizar e automatizar os processos que envolvem o tiro no Brasil.</Typography>
							<Button className='botaoPadrao' href="https://tiro.digital">Ver mais</Button>
						</Grid>
					</Grid>
				</Box>
			</ThemeProvider>
		)
	}
	SIM () {
		return (
			<Box sx={{ flexGrow: 1, mb: "20px" }}>
				<Grid container spacing={5}>
					<Grid item sm={12} md={6} align="right">
						<img src={logoSIM} width="150vh"></img>
						<Typography>O SIM é um software em gestão de saúde pública focado na humanização do atendimento e melhorias nos serviçõs prestados. Informatizando processos como agendamento de consultas, regulação de procedimentos e exames, automatização do faturamento, prontuário eletrônico do paciente, entre outros, temos como objetivos oferecer um melhor atendimento a população em geral, e, em conjunto entregar as informações mais importantes para as tomadas de decisões corretas por parte dos gestores.</Typography>
						<Button className='botaoPadrao' href="https://sim.med.br">Ver mais</Button>
					</Grid>
					<Grid item sm={12} md={6}>
						<img src={telefoneSIM} width="250vh" loading="lazy"></img>
					</Grid>
				</Grid>
			</Box>
		)
	}
	democratize () {
		return (
			<Box sx={{ flexGrow: 1, mb: "20px" }}>
				<Grid container spacing={5}>
					<Grid item sm={12} md={6} align="right">
						<img src={tabletDemocratize} width="70%" align="right" loading="lazy"></img>
					</Grid>
					<Grid item sm={12} md={6}>
						<img src={logoDemocratize} width="70%"></img>
						<Typography> O Democratize nasceu em 2018, época em que passou a ser permitido o Financiamento Coletivo para candidatos arrecadarem fundo para suas campanhas eleitorais. Crowdfunding Eleitoral é a nossa especialidade. Fizemos história e aprimoramos nossa plataforma para oferecer muito além da errecadação nas eleições.</Typography>
						<Button className='botaoPadrao' href="https://democratize.com.br">Ver mais</Button>					
					 </Grid>
				</Grid>
			</Box>
		)
	}
 
	render () {
		return (
			<Container maxWidth="lg">
				<Box sx={{borderBottom: '3px solid #efefef', minHeight: '300px' }}>
					{this.bgTopo ()}
				</Box>
				<Box sx={{minHeight: '200px' }}>
					{this.principaisProjetos ()}
				</Box>
				<Box sx={{borderBottom: '3px solid #efefef', minHeight: '300px', my: "5vh" }}>
					{this.tiro ()}
				</Box>
				<Box sx={{borderBottom: '3px solid #efefef', minHeight: '300px', my: "5vh" }}>
					{this.SIM ()}
				</Box>
				<Box sx={{minHeight: '300px' }}>
					{this.democratize ()}
				</Box>
			</Container>
		)
	}
}

export default Conteudo