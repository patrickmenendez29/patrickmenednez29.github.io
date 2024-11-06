import React from 'react';
import '../styles/og-styles.css';
import OpengraphReactComponent from 'opengraph-react';
const apiKey = "8b608da5-4800-4949-9ed0-0e0b2924e83a"

export function URLPreview({url}) {
  return (
  <OpengraphReactComponent
    site={url}
    dontUseProduct={true}
    appId={apiKey}
  />
  );
}

