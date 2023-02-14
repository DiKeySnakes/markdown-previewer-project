import React, { useState } from 'react';
import { marked } from 'marked';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import logo from './logo.svg';
import './App.css';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

const Previewer = (props) => {
  return (
    <div
      id='preview'
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { renderer: renderer }),
      }}
    />
  );
};

const placeholder = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdown, setMarkdown] = useState(placeholder);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className='app'>
      <div id='logo'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <div>
        <div className='titleWrapper'>
          <h1 className='title'>React Markdown Previewer</h1>
        </div>
        <div className='markdownWrapper'>
          <div className='editorWrapper'>
            <div className='toolbar'>Editor</div>
            <textarea id='editor' value={markdown} onChange={handleChange} />
          </div>
          <div className='previewerWrapper'>
            <div className='toolbar'>Previewer</div>
            <Previewer markdown={markdown} />
          </div>
        </div>
      </div>
      <div id='footer'>
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
      </div>
    </div>
  );
}

export default App;
