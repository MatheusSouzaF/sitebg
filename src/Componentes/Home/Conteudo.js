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
import { Link } from 'react-router-dom';

class Conteudo extends React.Component {
	constructor(props) {
		super(props);
	}

	bgTopo () {
		return (
			<div className="container-fluid my-3 row">
				<div className="col-sm-6">
					<p className="fs-1 fontType-ExtraBold"><strong>Inovando com tecnologia para melhores negócios </strong></p>
					<p></p>
				</div>
				<div className="col-sm-6">
					<video autoPlay muted src={animacao} width="95%"></video>
				</div>
			</div>
		)
	}
	principaisProjetos () {
		return (
			<div className="container-fluid my-5">
				<div className="row justify-content-center">
					<div className="col-auto" align="right">
						<img width="80vw" className="" src={principaisProjetos}></img> 
					</div>
					<div className="col-auto mt-2">
						<p className="mb-0 fs-2">PRINCIPAIS </p>
						<p className="fontType-ExtraBold fs-2">PROJETOS</p>
					</div>
				</div>
			</div>
		)
	}
	tiro () {
		return (
			<div className="container-fluid my-3">
				<div className="row justify-content-center">
					<div className="col-12 col-ms-auto col-sm-6">
						<img src={notebook} width="400px" align="right"></img> 
					</div>
					<div className="col-12 col-me-auto col-sm-6">
						<img src={tiroDigital} width="200px"></img> 
						<p className="fs-6">O tiro.digital surgiu no intuito de revolucionar o mundo do tiro. Com tecnologia de ponta para o controle e gestão de Clubes, lojas de armas, IATS e psicólogos. Tendo como principal objetivo de desburocratizar e automatizar os processos que envolvem o tiro no Brasil.</p>
						<a href="https://tiro.digital">
							{/* <Button className='botaoPadrao'>Ver mais</Button> */}
						</a>
					</div>
				</div>
			</div>
		)
	}
	SIM () {
		return (
			<div className="row justify-content-center my-3">
				<div className="col-12 col-ms-auto col-sm-6" align="right">
						<img src={logoSIM} width="35%"></img>
						<p className="text-end fs-6 mt-2">O SIM é um software em gestão de saúde pública focado na humanização do atendimento e melhorias nos serviçõs prestados. Informatizando processos como agendamento de consultas, regulação de procedimentos e exames, automatização do faturamento, prontuário eletrônico do paciente, entre outros, temos como objetivos oferecer um melhor atendimento a população em geral, e, em conjunto entregar as informações mais importantes para as tomadas de decisões corretas por parte dos gestores.</p>
						<a href="https://sim.med.br" >
							{/* <Button className='botaoPadrao'>Ver mais</Button> */}
						</a>
				</div>
				<div className="col-12 col-sm-6">
					<img src={telefoneSIM} width="60%"></img>
				</div>
			</div>
		)
	}
	democratize () {
		return (
			<div className="row my-3">
				<div className="col-12 col-sm-6">
					<img src={tabletDemocratize} width="70%" align="right"></img>
				</div>
				<div className="col-12 col-sm-6">
					<img src={logoDemocratize} width="70%"></img>
					<p className="fs-6 mt-2"> O Democratize nasceu em 2018, época em que passou a ser permitido o Financiamento Coletivo para candidatos arrecadarem fundo para suas campanhas eleitorais. Crowdfunding Eleitoral é a nossa especialidade. Fizemos história e aprimoramos nossa plataforma para oferecer muito além da errecadação nas eleições.</p>
					<a href="https://democratize.com.br">
						{/* <Button className='botaoPadrao'>Ver mais</Button> */}
					</a>
				</div>

			</div>
		)
	}
 
	render () {
		return (
			<>
				<div className="container-lg mb-3 border-bottom border-2">
					{this.bgTopo ()}
				</div>
				<div className="container-lg mb-5">
					{this.principaisProjetos ()}
				</div>
				<div className="container-lg mb-3 border-bottom border-2">
					{this.tiro ()}
				</div>
				<div className="container-lg mb-3 border-bottom border-2">
					{this.SIM ()}
				</div>
				<div className="container-lg mb-5">
					{this.democratize ()}
				</div>
			</>
		)
	}
}

export default Conteudo