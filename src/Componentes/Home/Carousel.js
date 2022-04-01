import React from 'react'

// Imagens
import iconEvento from '../../imagens/ICON_EVENTOS.png'
import abor from '../../imagens/EVENTOS/CONGRESSO_ABOR.png'
import ortoPremium from '../../imagens/EVENTOS/ORTO_PREMIUM.png'
import simposioICES from '../../imagens/EVENTOS/SIMPÓSIO_ICES.png'

class Carousel extends React.Component {

	render () {

		return (
			<div>
				<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={abor} className="d-block" width="20%"/>
						</div>
						<div className="carousel-item">
							<img src={ortoPremium} className="d-block" width="20%"/>
						</div>
						<div className="carousel-item">
							<img src={simposioICES} className="d-block" width="20%"/>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
					</div>
			</div>
		)
	}
}

export default Carousel