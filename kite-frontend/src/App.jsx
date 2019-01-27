import React from 'react';

import './scss/app.scss';

import Routes from './containers/Routes';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <>
    <div className="grid">
      <Header />
      <div className="content">
        <Routes />
      </div>
      <Footer />
    </div>
  </>
);

export default App;
