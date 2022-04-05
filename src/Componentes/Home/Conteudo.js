import React from 'react'

// Imagens e animação
import animacao from '../../imagens/ANIMACAO/DISPOSITIVOS.mp4';
import principaisProjetos from '../../imagens/ICON_PRINCIPAIS PROJETOS.png'
import notebook from '../../imagens/NOTEBOOK_TIRO.png'
import tiroDigital from '../../imagens/LOGO_TIRO.png'
import logoSIM from '../../imagens/LOGO_SIM.png'
import telefoneSIM from '../../imagens/TELEFONE_SIM.png'
import telefoneSIMMobile from '../../imagens/TELEFONE_SIM_v2.png'
import tabletDemocratize from '../../imagens/TABLET_DEMOCRATIZE.png'
import tabletDemocratizeMobile from '../../imagens/TABLET_DEMOCRATIZE_v2.png'
import logoDemocratize from '../../imagens/LOGO_DEMOCRATIZE.png'

//Material UI
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

// Tema
import tema from '../Tema';


class Conteudo extends React.Component {

	bgTopo () {
		return (
			<Box sx={{ flexGrow: 1, mb: "20px" }}>
				<Grid container spacing={5}>
					<Grid item xm={12} sm={12} md={5} className="seMobileCentralizarTexto">
						<Typography variant="titulo">Inovando com tecnologia para melhores negócios </Typography><br />
						<Typography variant="textoPrincipal" className="ocultarQuandoPequeno">Conheça nossas soluções projetadas para o melhor controle dos seus processos. Desfrute de um sistema integrado com tecnologia de ponta e usabilidade 360°.</Typography>
					</Grid>
					<Grid item xm={12} sm={12} md={7} align="center" sx={{alignSelf: "center"}}>
						<video autoPlay muted src={animacao} width="95%"></video> <br />
						<Typography variant="textoPrincipal" className="ocultarQuandoGrande">Conheça nossas soluções projetadas para o melhor controle dos seus processos. Desfrute de um sistema integrado com tecnologia de ponta e usabilidade 360°. </Typography>
					</Grid>
				</Grid>
			</Box>
		)
	}
	principaisProjetos () {
		return (
			<Box sx={{ mt: '30px', justifyContent:"center", display: 'flex'}}>
				<Box sx={{ display: 'inline-block'}}>
					<img width="80vw" className="" src={principaisProjetos} alt="Principais Projetos"></img>
				</Box>
				<Box sx={{ display: 'inline-block', mt: '10px', ml: '20px'}}>
					<Typography variant="subtitulo" >PRINCIPAIS</Typography> <br />
					<Typography variant="subtituloBold">PROJETOS</Typography>
				</Box>
			</Box>
		)
	}
	tiro () {
		return (
			<Box sx={{ flexGrow: 1, mb: "40px"}}>
				<Grid container spacing={5}>
					<Grid item sm={12} md={6}>
						<img src={notebook} width="400px" align="right" loading="lazy" alt="Tiro Digital"></img> 
					</Grid>
					<Grid item sm={12} md={6} sx={{alignSelf: "center"}}>
						<img src={tiroDigital} width="280vh" alt="Tiro Digital"></img> <br />
						<Typography variant="textoPrincipal">O tiro.digital surgiu no intuito de revolucionar o mundo do tiro. Com tecnologia de ponta para o controle e gestão de Clubes, lojas de armas, IATS e psicólogos. Tendo como principal objetivo de desburocratizar e automatizar os processos que envolvem o tiro no Brasil.</Typography> <br />
						<Button className='botaoPadrao' href="https://tiro.digital" sx={{mt:"20px"}}>Ver mais</Button>
					</Grid>
				</Grid>
			</Box>
		)
	}

	tiroMobile () {
		return (
			<Box sx={{ flexGrow: 1, mb: "20px"}}>
				<Grid container spacing={5} align="center">
					<Grid item sm={12} md={6} sx={{alignSelf: "center"}}>
						<img src={tiroDigital} width="280vh" alt="Tiro Digital"></img> <br />
						<Typography variant="textoPrincipal">O tiro.digital surgiu no intuito de revolucionar o mundo do tiro. Com tecnologia de ponta para o controle e gestão de Clubes, lojas de armas, IATS e psicólogos. Tendo como principal objetivo de desburocratizar e automatizar os processos que envolvem o tiro no Brasil.</Typography> <br />
						<Button className='botaoPadrao' href="https://tiro.digital" sx={{mt:"20px"}}>Ver mais</Button>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<img src={notebook} width="400px" align="center" loading="lazy" alt="Tiro Digital"></img> 
					</Grid>
				</Grid>
			</Box>
		)
	}
	sim () {
		return (
			<Box sx={{ flexGrow: 1, mb: "40px" }}>
				<Grid container spacing={5}>
					<Grid item sm={12} md={6} align="right"  sx={{alignSelf: "center"}}>
						<img src={logoSIM} width="150vh" alt="Logo SIM"></img> <br />
						<Typography variant="textoPrincipal">O SIM é um software em gestão de saúde pública focado na humanização do atendimento e melhorias nos serviços prestados. Informatizando processos como agendamento de consultas, regulação de procedimentos e exames, automatização do faturamento, prontuário eletrônico do paciente, entre outros, temos como objetivos oferecer um melhor atendimento a população em geral, e, em conjunto entregar as informações mais importantes para as tomadas de decisões corretas por parte dos gestores.</Typography> <br />
						<Button className='botaoPadrao' href="https://sim.med.br" sx={{mt:"20px"}}>Ver mais</Button>
					</Grid>
					<Grid item sm={12} md={6}>
						<img src={telefoneSIM} width="300px" loading="lazy" alt="Telefone SIM"></img>
					</Grid>
				</Grid>
			</Box>
		)
	}
	simMobile () {
		return (
			<Box sx={{ flexGrow: 1, mb: "20px" }}>
				<Grid container spacing={5} align="center">
					<Grid item sm={12} md={6} align="center"  sx={{alignSelf: "center"}}>
						<img src={logoSIM} width="150vh" alt="Logo SIM"></img> <br />
						<Typography variant="textoPrincipal">O SIM é um software em gestão de saúde pública focado na humanização do atendimento e melhorias nos serviços prestados. Informatizando processos como agendamento de consultas, regulação de procedimentos e exames, automatização do faturamento, prontuário eletrônico do paciente, entre outros, temos como objetivos oferecer um melhor atendimento a população em geral, e, em conjunto entregar as informações mais importantes para as tomadas de decisões corretas por parte dos gestores.</Typography> <br />
						<Button className='botaoPadrao' href="https://sim.med.br" sx={{mt:"20px"}}>Ver mais</Button>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<img src={telefoneSIMMobile} width="250vh" align="center" loading="lazy" alt="Telefone SIM"></img>
					</Grid>
				</Grid>
			</Box>
		)
	}
	democratize () {
		return (
			<Box sx={{ flexGrow: 1, mb: "40px" }}>
				<Grid container spacing={5}>
					<Grid item sm={12} md={6} align="right" >
						<img src={tabletDemocratize} width="350vh" align="right" loading="lazy" alt="Tablet Democratize"></img>
					</Grid>
					<Grid item sm={12} md={6} rowGap={5} sx={{alignSelf: "center"}}>
						<img src={logoDemocratize} width="70%" alt="Logo Democratize"></img> <br />
						<Typography  variant="textoPrincipal"> O Democratize nasceu em 2018, época em que passou a ser permitido o Financiamento Coletivo para candidatos arrecadarem fundo para suas campanhas eleitorais. Crowdfunding Eleitoral é a nossa especialidade. Fizemos história e aprimoramos nossa plataforma para oferecer muito além da arrecadação nas eleições.</Typography> <br />
						<Button className='botaoPadrao' href="https://democratize.com.br" sx={{mt:"20px"}}>Ver mais</Button>					
					 </Grid>
				</Grid>
			</Box>
		)
	}

	democratizeMobile () {
		return (
			<Box sx={{ flexGrow: 1, mb: "20px" }}>
				<Grid container spacing={5} align="center">
					<Grid item sm={12} md={6} rowGap={5} sx={{alignSelf: "center"}}>
						<img src={logoDemocratize} width="380vh" alt="Logo Democratize"></img> <br />
						<Typography  variant="textoPrincipal"> O Democratize nasceu em 2018, época em que passou a ser permitido o Financiamento Coletivo para candidatos arrecadarem fundo para suas campanhas eleitorais. Crowdfunding Eleitoral é a nossa especialidade. Fizemos história e aprimoramos nossa plataforma para oferecer muito além da arrecadação nas eleições.</Typography> <br />
						<Button className='botaoPadrao' href="https://democratize.com.br" sx={{mt:"20px"}}>Ver mais</Button>					
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<img src={tabletDemocratizeMobile} width="350vh" align="center" loading="lazy" alt="Tablet Democratize"></img>
					</Grid>
				</Grid>
			</Box>
		)
	}
 
	render () {
		return (
			<ThemeProvider theme={tema}>
				<Container maxWidth="lg">
					<Box sx={{borderBottom: '3px solid #efefef', minHeight: '300px' }}>
						{this.bgTopo ()}
					</Box>
					<Box sx={{minHeight: '200px' }}>
						{this.principaisProjetos ()}
					</Box>
					<Box sx={{borderBottom: '3px solid #efefef', minHeight: '300px', my: "5vh" }} className="ocultarQuandoPequeno">
						{this.tiro ()}
					</Box>
					<Box sx={{borderBottom: '3px solid #efefef', minHeight: '300px', my: "5vh" }} className="ocultarQuandoGrande">
						{this.tiroMobile ()}
					</Box>
					<Box sx={{borderBottom: '3px solid #efefef', minHeight: '300px', my: "5vh" }} className="ocultarQuandoPequeno">
						{this.sim ()}
					</Box>
					<Box sx={{borderBottom: '3px solid #efefef', minHeight: '300px', my: "5vh" }} className="ocultarQuandoGrande">
						{this.simMobile ()}
					</Box>
					<Box sx={{minHeight: '300px' }} className="ocultarQuandoPequeno">
						{this.democratize ()}
					</Box>
					<Box sx={{minHeight: '300px' }} className="ocultarQuandoGrande">
						{this.democratizeMobile ()}
					</Box>
				</Container>
			</ThemeProvider>
		)
	}
}

export default Conteudo