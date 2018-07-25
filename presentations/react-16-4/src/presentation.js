// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#2b1956',
    purple: '#2b1956',
    black: '#000000',
    white: '#ffffff',
    green: '#5ebd7d',
    gray: '#424242',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress="number"
        contentWidth={1280}
        contentHeight={720}
      >
        <Slide transition={['zoom']} bgColor="purple">
          <Heading size={1} fit caps lineHeight={1} textColor="green">
            React 16.4
          </Heading>
          <Text margin="10px 0 0" textColor="white" fit bold>
            New and changed features in this release
          </Text>
        </Slide>
      </Deck>
    );
  }
}
