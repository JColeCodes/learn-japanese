import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Main from './pages/Main';
import NotFound from './pages/404';

import { pages } from './assets/information/pages';

let mainPages = [
  { path: '/', title: 'Homepage', Element: Main },
  { path: '/*', title: 'Not Found', Element: NotFound }
];
Object.keys(pages).forEach(sect => {
  mainPages.push(
    {
      path: pages[sect].path,
      title: pages[sect].title,
      Element: pages[sect].Element,
      subpage: false
    }
  );
  pages[sect].pages.forEach(page => {
    mainPages.push(
      {
        path: page.path,
        title: page.eng_title,
        Element: page.Element,
        subpage: true
      }
    );
  } )})

function Template() {
  const location = useLocation();

  return (
    <div className="container">
      <div className='content'>
        <Header pages={mainPages} />
      </div>
      <div className='content main'>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames={'fade'}
            timeout={200}
          >
            <section>
              <Routes location={location}>
                {mainPages.map(({path, title, Element}) => (
                  <Route
                    key={title}
                    path={path}
                    element={ <Element title={title} /> }
                  />
                ))}
              </Routes>
            </section>
          </CSSTransition>
        </TransitionGroup>
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