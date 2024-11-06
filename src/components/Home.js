import React from 'react';
import Section from './Section';
import Text from './Text';
import { about, portfolio, contact } from '../utils/directory'
import LineBreak from './LineBreak';
import TabLink from './TabLink';
import Link from './Link';
import { Highlight, themes } from "prism-react-renderer"

const codeBlock = ` 

  const  description  = 
    \`I'm a senior frontend software engineer with a passion for building scalable,
    performant, and maintainable web applications.\`

  const chatBotInstructions = \`
  Use the terminal located in the bottom of this page to interact with me.
  \`;

  const experience_with_languages = ['TypeScript', 'Python', 'Java', 'C++', 'C', 'Scala', 'Haskell']
  const experience_with_frameworks = ['React', 'Next.js', 'Tailwind']
 
  if (wouldLikeToGetInTouch) {
    visitContactPage()
  }
  
 `

function Home() {
  return (
    <div>
      <Section>
        <h1 className="text-5xl mb-3 text-orange">
          Patrick Menendez
        </h1>
        <h2 className='text-3xl'>
          Senior Frontend Software Engineer
          <span className="animate-blink">|</span>
        </h2>
        <LineBreak />
      </Section>

      <Section>
      <Highlight
    code={codeBlock}
    language="js"
    theme={themes.oneDark}

  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line })}>
            <span>{i + 1}</span>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
        
      </Section>
      
      
    </div>
  )
}

export default Home;
