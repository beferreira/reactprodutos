import './inicio.scss';
import Cadastrar from '../cadastrar/cadastro.jsx';
import Consultar from '../consultar/consultar.jsx';


function Inicio() {
  return (
    <div className="inicio">
      <h1>QUAL AÇÃO DESEJA REALIZAR?</h1>

    <div className='botoes'>
      <div className='botao'>
        <button><a href="/consultar">Consultar</a></button>
      </div>

      <div className='botao'>
        <button><a href="/cadastrar"></a>Cadastrar</button>
      </div>
    </div>
    </div>
  );
}

export default Inicio;
