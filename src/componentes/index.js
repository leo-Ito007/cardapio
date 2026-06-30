
import feijuada from './feijuada.png';
import panqueca from './panqueca.png';
import churrasco from './churrasco.png';
import refrigerante from './refrigerante.png';
import soda from './soda.png';
import suco from './suco.png';
import brigadeiro from './brigadeiro.png';
import pudim from './pudim.png';
import fruta from './fruta.png';
import './cardapio.css';

function Cardapio() {
        return (
            <div>
 <h1>Cardápio</h1>
 <h2>Pratos</h2>
 <ul>
   <li>Feijoada - R$ 25,00
   <img src={feijuada} alt="feijuada" /></li>
   <li>Panqueca - R$ 15,00
   <img src={panqueca} alt="panqueca" /></li>
   <li>Churrasco - R$ 30,00
   <img src={churrasco} alt="churrasco" /></li>
 </ul>
 <h2>Bebidas</h2>
 <ul>
   <li>Refrigerante - R$ 5,00
   <img src={refrigerante} alt="refrigerante" /></li>
   <li>Soda - R$ 6,00
   <img src={soda} alt="soda" /></li>
   <li>Suco de frutas - R$ 8,00
   <img src={suco} alt="suco" /></li>
 </ul>     
 <h2> Sobremesas</h2>
 <ul>
   <li>Brigadeiro - R$ 3,00
   <img src={brigadeiro} alt="brigadeiro" /></li>
   <li>Pudim - R$ 4,00
   <img src={pudim} alt="pudim" /></li>
   <li>Frutas - R$ 2,00
   <img src={fruta} alt="fruta" /></li>
 </ul>  
</div>
        );

}

export default Cardapio;