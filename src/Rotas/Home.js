import '../site.css';
import Topo from '../Componentes/Topo'
import Conteudo from '../Componentes/Home/Conteudo'
import ConteudoAux from '../Componentes/Home/ConteudoAux'
import Carousel from '../Componentes/Home/Carousel'
import Rodape from '../Componentes/Rodape'

function Home() {
  return (
    <>
      <header className='EstiloDefault'>
        <Topo></Topo>
      </header>
      <main className='EstiloDefault'>
        <Conteudo></Conteudo>
        <ConteudoAux></ConteudoAux>
        <Carousel></Carousel>
      </main>
      <footer className='EstiloDefault'>
        <Rodape></Rodape>
      </footer>
    </>
  );
}

export default Home;
