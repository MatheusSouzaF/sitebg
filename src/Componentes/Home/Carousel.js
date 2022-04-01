import React from 'react'

// Imagens
import iconEvento from '../../imagens/ICON_EVENTOS.png'
import abor from '../../imagens/EVENTOS/CONGRESSO_ABOR.png'
import ortoPremium from '../../imagens/EVENTOS/ORTO_PREMIUM.png'
import simposioICES from '../../imagens/EVENTOS/SIMPÓSIO_ICES.png'


class CarouselPag extends React.Component {
	constructor(props) {
		super(props);
	}


	render () {

		return (
			<div className="container-lg my-3">
				<div id="mainSlider" className="carousel carousel-dark slide" data-ride="carousel">
					{/* <ol className="carousel-indicators">
						<li data-target="#mainSlider" data-alide-to="0" className="active"></li>
						<li data-target="#mainSlider" data-alide-to="1"></li>
						<li data-target="#mainSlider" data-alide-to="2"></li>
					</ol> */}
					<div className="carousel-inner">
						<div className="carousel-item active" align="center">
							<div className="d-inline-block">
								<img src={abor} className="w-50"/>
								<p className="fontType-Bold fs-6">
									12º Congresso <br /> Internacional ABOR
								</p>
							</div>
							<div className="d-inline-block">
								<img src={simposioICES} className="w-50"/>
								<p className="fontType-Bold fs-6">
									Simpósio ICES <br /> UFRJ 50 anos
								</p>
							</div>
						</div>
						{/* <div className="carousel-item">
						</div> */}
						<div className="carousel-item">
							<img src={ortoPremium} className="d-inline-block w-25"/>
							<div className="carousel-caption">
								<p className="fontType-Bold fs-6">
									Orto Premium <br />Rio 2022
								</p>
							</div>
						</div>
						<a href="#mainSlider" className="carousel-control-prev" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only"></span>
						</a>
						<a href="#mainSlider" className="carousel-control-next" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only"></span>
						</a>
					</div>
				</div>
			</div>
		)
	}
}
// $('#mainSlider').on('slide.bs.carousel', function () { console.log('teste')})
export default CarouselPag