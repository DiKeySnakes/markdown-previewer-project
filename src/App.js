import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app'>
      <div id='logo'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <div id='footer'>
        <footer>
          <p>
            Created by DiKeySnakes for
            <a
              href='https://www.freecodecamp.org/'
              target='_blank'
              rel='noopener noreferrer'>
              {' '}
              freeCodeCamp <FontAwesomeIcon icon={brands('free-code-camp')} />
            </a>{' '}
            curriculum
          </p>
          <p>
            Copyright © DiKeySnakes 2023
            <a
              href='https://github.com/DiKeySnakes/markdown-previewer-project'
              target='_blank'
              rel='noopener noreferrer'>
              {' '}
              <FontAwesomeIcon id='githubIcon' icon={brands('github')} />
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
