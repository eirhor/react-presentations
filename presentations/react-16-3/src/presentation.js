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
            React 16.3
          </Heading>
          <Text margin="10px 0 0" textColor="white" fit bold>
            New and changed features in this release
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            What we will look at
          </Heading>
          <List>
            <ListItem>React Fiber</ListItem>
            <ListItem>Component lifecycle</ListItem>
            <ListItem>Fragments</ListItem>
            <ListItem>Context API</ListItem>
            <ListItem>Portals</ListItem>
            <ListItem>Error boundaries</ListItem>
            <ListItem>Refs</ListItem>
            <ListItem>String components</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            React Fiber
          </Heading>
          <List>
            <ListItem>Reimplementation of the core algorithm</ListItem>
            <ListItem>Incremental rendering</ListItem>
            <ListItem>Reconciliation</ListItem>
            <ListItem>Scheduling</ListItem>
          </List>
          <Text margin="100px 0 0" textAlign="left">
            For more information, have a look at this blogpost:
            <br />
            <Link
              href="https://github.com/acdlite/react-fiber-architecture"
              target="_blank"
            >
              React Fiber Architecture
            </Link>
          </Text>
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Component lifecycle
          </Heading>
          <List>
            <ListItem bold>
              Deprecated lifecycle methods
              <List margin="0 40px" bold={false}>
                <ListItem>componentWillMount</ListItem>
                <ListItem>componentWillReceiveProps</ListItem>
                <ListItem>componentWillUpdate</ListItem>
              </List>
            </ListItem>
            <ListItem margin="40px 0 0" bold>
              New lifecycle methods
              <List margin="0 40px" bold={false}>
                <ListItem>getDerivedStateFromProps</ListItem>
                <ListItem>getSnapshotBeforeUpdate</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Component lifecycle
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            componentWillMount
          </Heading>
          <Text textAlign="left">Before:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              state = {};

              componentWillMount() {
                api.get('data').then(data => { this.setState({ data }); });
              }
            }
          `} />
          <Text textAlign="left">Now:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              state = {};

              componentDidMount() {
                api.get('data').then(data => { this.setState({ data }); });
              }
            }
          `} />
        </Slide>
      </Deck>
    );
  }
}
