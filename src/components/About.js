import React from "react";
import MarkdownHeader from "./MarkdownHeader";
import LineBreak from "./LineBreak";
import Section from "./Section";
import Text from "./Text";
import MarkdownButton from "./MarkdownButton";
import Comment from "./Comment";
import ResumePDF from "../assets/documents/CV-2024.pdf";
import { Highlight, themes } from "prism-react-renderer";

const aboutJson = `  {
    "name": "Patrick Menendez",
    "title": "Frontend Software Engineer",
    "description": "I am a frontend software engineer with a passion UI and AI.",
    "hobbies": ["coding", "reading", "traveling", "running", "playing tennis & golf"],
    "education": {
      "school": "Florida Institute of Technology",
      "degree": "Bachelor of Science in Computer Science",
    },
    "location": {
      "country": "United States",
      "city": "Delray Beach",
      "state": "Florida"
    }
  }`;
function About() {
  return (
    <div>
      <Section>
        <MarkdownHeader
          headingLevel='1'
          text='About'
          className='text-3xl md:text-5xl'
        />
        <LineBreak />
        <Highlight
    theme={themes.oneDark}
    code={aboutJson}
    language="json"
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

      <Section>
        <MarkdownButton
          as='a'
          href={ResumePDF}
          target='_blank'
          rel='noreferrer'
        >
          [Download Resume]
        </MarkdownButton>
      </Section>

    
    </div>
  );
}

export default About;
