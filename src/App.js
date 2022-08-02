import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Main from './pages/Main';
import NotFound from './pages/404';
import Writing from './pages/Writing';

import Hiragana from './pages/Writing/Hiragana';
import Katakana from './pages/Writing/Katakana';

const pages = [
  { path: '/', title: 'Homepage', Element: Main },
  { path: '/writing', title: 'Writing', Element: Writing },
  { path: '/*', title: 'Not Found', Element: NotFound }
];
const subPages = [
  { path: '/writing/hiragana', title: 'Hiragana', Element: Hiragana },
  { path: '/writing/katakana', title: 'Katakana', Element: Katakana }
];

const allPages = pages.concat(subPages);

function Template() {
  const location = useLocation();

  return (
    <div className="container">
      <div className='content'>
        <Header pages={pages} />
      </div>
      <div className='content main'>
        <Routes location={location}>
          {allPages.map(({path, title, Element}) => (
            <Route
              key={title}
              path={path}
              element={ <Element title={title} /> }
            />
          ))}
        </Routes>
      </div>
      <div className='content'>
        <Footer />
      </div>
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