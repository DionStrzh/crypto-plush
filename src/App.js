import logo from './assets/images/logo_nobg-min.PNG';
import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div className='container page'>
      <header className='header page__header'>
        <img src={logo} className='logo header__logo' alt='Crypto Plush logo' />
        <Navigation />
      </header>
      <h1 className='intro page__intro'>
        <span className='intro__title'>Here you can mint CryptoPlush NFT</span>
      </h1>
      <Main />
      <Footer />
    </div>
  );
};
