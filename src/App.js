import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BodyContent from './components/bodyContent/BodyContent';
import MyReferalContent from './components/myReferalContent/MyReferalContent';
import Footer from './components/footer/Footer';
import './components/bodyContent/BodyContent.css'
import IntroPage from './components/bodyContent/IntroPage';

export default function App() {
  return (
    <>
    <html>
      <Router>
    <body>
      <Navbar />
      <BodyContent />
      <MyReferalContent />
      <BodyContent />
      <Footer />
      <IntroPage />
        <Switch>
          <Route path='/' exact />
        </Switch>
      </body>
    </Router>
  </html>
 </>
  );
}

