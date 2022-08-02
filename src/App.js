import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Main from './pages/Main';

const pages = [
  { path: '/', title: 'Homepage', Element: Main }
];

function Template() {
  const location = useLocation();

  return (
    <div className="App">
      <Header pages={pages} />
      <Routes location={location}>
        {pages.map(({path, title, Element}) => (
          <Route
            key={title}
            path={path}
            element={ <Element title={title} /> }
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

function delayTransition() {
  const classes = document.body.classList;
  let timer = 0;
  function delay() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    else
        classes.add('stop-transitions');

    timer = setTimeout(() => {
        classes.remove('stop-transitions');
        timer = null;
    }, 1);
  }
  window.addEventListener('resize', delay);
  window.onload = delay();
}

function App() {
  return (
    <Router>
      <Template />
      {delayTransition()}
    </Router>
  );
}

export default App;