import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Text from './Text';
import Section from './Section';
import Link from './Link';
import { URLPreview } from './OpenGraphRenderer';

const urls = [

  "https://virtualscale.com",
  "https://github.com/AmbientAI-Senior-Design/AmbientAi",
  "https://github.com/patrickmenendez29/StorageKit",
  "https://github.com/patrickmenendez29/Deep-Emotion",
]

function Portfolio() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Personal Projects" className="text-3xl md:text-5xl " />
        <LineBreak />
        <div className='flex flex-row flex-wrap '>
          {
            urls.map((url) => (
              <URLPreview url={url} />
            ))
          }
        </div>
      </Section>
    </div>
  )
}

export default Portfolio;
