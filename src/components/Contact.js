import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import Link from './Link';

function Contact() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Contact" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
          Feel free to connect with me through any of the following channels - I'm always open to interesting conversations!
        </Text>
      </Section>

      <Section>
        <Text className="text-lg">
          [<span className="text-pink">Email</span>] (<Link targetBlank href="mailto:patrickmenendez29@gmail.com">mailto:patrickmenendez29@gmail.com</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">LinkedIn</span>] (<Link targetBlank href="https://www.linkedin.com/in/patrick-menendez-5a4768238//">https://www.linkedin.com/in/patrick-menendez-5a4768238//</Link>)
        </Text>
        <Text className="text-lg">
          [<span className="text-pink">Github</span>] (<Link targetBlank href="https://github.com/patrickmenendez29">https://github.com/patrickmenendez29</Link>)
        </Text>
      </Section>
    </div>
  )
}

export default Contact;
