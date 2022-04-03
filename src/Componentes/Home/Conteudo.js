import React from 'react'

// Imagens
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
	  button: {
		fontStyle: 'italic',
	  },
	},
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
			// <div className="container-fluid my-3 row">
			// 	<div className="col-sm-6">
			// 		<p className="fs-1 fontType-ExtraBold"><strong>Inovando com tecnologia para melhores negócios </strong></p>
			// 		<p></p>
			// 	</div>
			// 	<div className="col-sm-6">
			// 		<video autoPlay muted src={animacao} width="95%"></video>
			// 	</div>
			// </div>
		)
	}
	principaisProjetos () {
		return (
			<Box>
				<img width="80vw" className="" src={principaisProjetos}></img>
				<Typography>PRINCIPAIS</Typography>
				<Typography>PROJETOS</Typography>
			</Box>
			// <div className="container-fluid my-5">
			// 	<div className="row justify-content-center">
			// 		<div className="col-auto" align="right">
			// 			<img width="80vw" className="" src={principaisProjetos}></img> 
			// 		</div>
			// 		<div className="col-auto mt-2">
			// 			<p className="mb-0 fs-2">PRINCIPAIS </p>
			// 			<p className="fontType-ExtraBold fs-2">PROJETOS</p>
			// 		</div>
			// 	</div>
			// </div>
		)
	}
	tiro () {
		return (
			<Box sx={{ flexGrow: 1, mb: "20px"}}>
				<Grid container spacing={5}>
					<Grid item sm={12} md={6}>
						<img src={notebook} width="400px" align="right" loading="lazy"></img> 
					</Grid>
					<Grid item sm={12} md={6}>
						<img src={tiroDigital} width="200px"></img> 
						<p className="fs-6">O tiro.digital surgiu no intuito de revolucionar o mundo do tiro. Com tecnologia de ponta para o controle e gestão de Clubes, lojas de armas, IATS e psicólogos. Tendo como principal objetivo de desburocratizar e automatizar os processos que envolvem o tiro no Brasil.</p>
						<Button className='botaoPadrao' href="https://tiro.digital">Ver mais</Button>
					</Grid>

				</Grid>
			</Box>
			// <>
			// 	<Box sx={{display: 'inline-block',  width: "50%" }}>
			// 		<img src={notebook} width="400px" align="right" sxpadding='20px' loading="lazy"></img> 
			// 	</Box>
			// 	<Box sx={{display: 'inline-block', width: "50%" }}>
			// 		<img src={tiroDigital} width="200px"></img> 
			// 		<p className="fs-6">O tiro.digital surgiu no intuito de revolucionar o mundo do tiro. Com tecnologia de ponta para o controle e gestão de Clubes, lojas de armas, IATS e psicólogos. Tendo como principal objetivo de desburocratizar e automatizar os processos que envolvem o tiro no Brasil.</p>
			// 		<Button className='botaoPadrao' href="https://tiro.digital">Ver mais</Button>
			// 	</Box>
			// </>
			// <div className="container-fluid my-3">
			// 	<div className="row justify-content-center">
			// 		<div className="col-12 col-ms-auto col-sm-6">
			// 			<img src={notebook} width="400px" align="right"></img> 
			// 		</div>
			// 		<div className="col-12 col-me-auto col-sm-6">
			// 			<img src={tiroDigital} width="200px"></img> 
			// 			<p className="fs-6">O tiro.digital surgiu no intuito de revolucionar o mundo do tiro. Com tecnologia de ponta para o controle e gestão de Clubes, lojas de armas, IATS e psicólogos. Tendo como principal objetivo de desburocratizar e automatizar os processos que envolvem o tiro no Brasil.</p>
			// 			<Button className='botaoPadrao' href="https://tiro.digital">Ver mais</Button>
			// 		</div>
			// 	</div>
			// </div>
		)
	}
	SIM () {
		return (
			<Box sx={{ flexGrow: 1, mb: "20px" }}>
				<Grid container spacing={5}>
					<Grid item sm={12} md={6} align="right">
						<img src={logoSIM} width="35%"></img>
						<p className="text-end fs-6 mt-2">O SIM é um software em gestão de saúde pública focado na humanização do atendimento e melhorias nos serviçõs prestados. Informatizando processos como agendamento de consultas, regulação de procedimentos e exames, automatização do faturamento, prontuário eletrônico do paciente, entre outros, temos como objetivos oferecer um melhor atendimento a população em geral, e, em conjunto entregar as informações mais importantes para as tomadas de decisões corretas por parte dos gestores.</p>
						<Button className='botaoPadrao' href="https://sim.med.br">Ver mais</Button>
					</Grid>
					<Grid item sm={12} md={6}>
						<img src={telefoneSIM} width="250vh" loading="lazy"></img>
					</Grid>
				</Grid>
			</Box>
			// <div className="row justify-content-center my-3">
			// 	<div className="col-12 col-ms-auto col-sm-6" align="right">
			// 			<img src={logoSIM} width="35%"></img>
			// 			<p className="text-end fs-6 mt-2">O SIM é um software em gestão de saúde pública focado na humanização do atendimento e melhorias nos serviçõs prestados. Informatizando processos como agendamento de consultas, regulação de procedimentos e exames, automatização do faturamento, prontuário eletrônico do paciente, entre outros, temos como objetivos oferecer um melhor atendimento a população em geral, e, em conjunto entregar as informações mais importantes para as tomadas de decisões corretas por parte dos gestores.</p>
			// 			<Button className='botaoPadrao' href="https://sim.med.br">Ver mais</Button>
			// 		</div>
			// 	<div className="col-12 col-sm-6">
			// 		<img src={telefoneSIM} width="60%"></img>
			// 	</div>
			// </div>
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
						<p className="fs-6 mt-2"> O Democratize nasceu em 2018, época em que passou a ser permitido o Financiamento Coletivo para candidatos arrecadarem fundo para suas campanhas eleitorais. Crowdfunding Eleitoral é a nossa especialidade. Fizemos história e aprimoramos nossa plataforma para oferecer muito além da errecadação nas eleições.</p>
						<Button className='botaoPadrao' href="https://democratize.com.br">Ver mais</Button>					
					 </Grid>
				</Grid>
			</Box>
			// <div className="row my-3">
			// 	<div className="col-12 col-sm-6">
			// 		<img src={tabletDemocratize} width="70%" align="right"></img>
			// 	</div>
			// 	<div className="col-12 col-sm-6">
			// 		<img src={logoDemocratize} width="70%"></img>
			// 		<p className="fs-6 mt-2"> O Democratize nasceu em 2018, época em que passou a ser permitido o Financiamento Coletivo para candidatos arrecadarem fundo para suas campanhas eleitorais. Crowdfunding Eleitoral é a nossa especialidade. Fizemos história e aprimoramos nossa plataforma para oferecer muito além da errecadação nas eleições.</p>
			// 		<Button className='botaoPadrao' href="https://democratize.com.br">Ver mais</Button>
			// 	</div>

			// </div>
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