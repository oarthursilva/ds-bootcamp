import { ButtonIcon } from 'components/commons/ButtonIcon';
import { NavBar } from 'components/commons/NavBar';
import { ReactComponent as Logo } from 'themes/images/logo.svg';

import './styles.css';

export function Home() {
  return (
    <>
      <NavBar />
      <div className='main-container'>
        <div className='main-card'>
          <div className='main-card-content'>
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>
            <ButtonIcon
              text='Inicie agora a sua busca'
            />
          </div>
          <div className='main-card-logo'>
            <Logo />
          </div>
        </div>
      </div>
    </>
  );
}
