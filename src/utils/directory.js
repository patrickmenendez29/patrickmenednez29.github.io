import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';


const about = { name: 'AboutMe', type: 'file', extension: 'json', component: <About />, lines: 50 }
const portfolio = { name: 'MyProjects', type: 'file', extension: 'js', component: <Portfolio />, lines: 30 }
const home = { name: 'Home', type: 'file', extension: 'js', component: <Home />, lines: 30 }
const contact = { name: 'ContactMe', type: 'file', extension: 'md', component: <Contact />, lines: 30 }

const directory = [{
  name: 'portfolio',
  type: 'folder',
  children: [
    {
      name: 'src',
      type: 'folder',
      children: [
        {
          name: 'components',
          type: 'folder',
          children: [
            about,
            portfolio,
          ]
        },
        home,
      ]
    },
    contact,
  ]
}];

export {
  about,
  portfolio,
  home,
  contact,
  directory
};
