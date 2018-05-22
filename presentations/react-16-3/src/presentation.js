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
            componentWillMount (Initializing state)
          </Heading>
          <Text textAlign="left">Before:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              state = {};

              componentWillMount() {
                this.setState({
                  data: this.props.data,
                  theme: 'blue',
                });
              }
            }
          `} />
          <Text textAlign="left">After:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              state = {
                data: this.props.data,
                theme: 'blue',
              };
            }
          `} />
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Component lifecycle
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            componentWillMount (fetching external data)
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
          <Text textAlign="left">After:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              state = {};

              componentDidMount() {
                api.get('data').then(data => { this.setState({ data }); });
              }
            }
          `} />
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Component lifecycle
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            componentWillReceiveProps (Updating state)
          </Heading>
          <Text textAlign="left">Before:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              state = {
                colorTheme: 'red',
              };

              componentWillReceiveProps(nextProps) {
                if (this.props.colorTheme !== nextProps.colorTheme)
                  this.setState({ colorTheme: nextProps.colorTheme });
              }
            }
          `} />
          <Text textAlign="left">After:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              state = {
                colorTheme: 'red',
              };

              static getDerivedStateFromProps(nextProps, prevState) {
                if (nextProps.colorTheme !== prevState.colorTheme)
                  return { colorTheme: nextProps.colorTheme };

                return null;
              }
            }
          `} />
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Component lifecycle
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            componentWillReceiveProps (Side effects)
          </Heading>
          <Text textAlign="left">Before:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              componentWillReceiveProps(nextProps) {
                if (this.props.isHidden !== nextProps.isHidden)
                  logVisibilityChange(nextProps.isHidden);
              }
            }
          `} />
          <Text textAlign="left">After:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              componentDidUpdate(prevProps) {
                if (this.props.isHidden !== prevProps.isHidden)
                  logVisibilityChange(this.props.isHidden);
              }
            }
          `} />
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Component lifecycle
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            componentWillUpdate (Invoke external callback)
          </Heading>
          <Text textAlign="left">Before:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              componentWillUpdate(nextProps, nextState) {
                if (this.state.someValue !== nextState.someValue)
                  nextProps.onChange(nextState.someValue);
              }
            }
          `} />
          <Text textAlign="left">After:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              componentDidUpdate(prevProps, prevState) {
                if (this.state.someValue !== prevState.someValue)
                  this.props.onChange(this.state.someValue);
              }
            }
          `} />
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Component lifecycle
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            getSnapshotBeforeUpdate
          </Heading>
          <Text textAlign="left">Before:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              previousScrollHeight = null;
              componentWillUpdate(nextProps) {
                if (this.props.data.length < nextProps.data.length) { this.previousScrollHeight = window.pageYOffset; }
              }
              componentDidUpdate(prevProps) {
                if (this.previousScrollHeight !== null) { window.scroll(0, this.previousScrollHeight); }
                this.previousScrollHeight = null;
              }
            }
          `} />
          <Text textAlign="left">After:</Text>
          <CodePane lang="javascript" source={`
            class ExampleComponent extends React.Component {
              getSnapshotBeforeUpdate(prevProps) {
                if (prevProps.data.length < this.props.data.length) { return window.pageYOffset; }
                return null;
              }
              componentDidUpdate(prevProps, prevState, snapshot) {
                if (snapshot !== null) { window.scroll(0, snapshot); }
              }
            }
          `} />
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Fragments
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            Hacky way of doing it before:
          </Heading>
          <Text textAlign="left">Implementation</Text>
          <CodePane lang="javascript" source={`
            const ThisIsStupidButItWorks = ({ children }) => children;
          `} />
          <Text textAlign="left">Usage</Text>
          <CodePane lang="javascript" source={`
            const ArticlePreview = () => (
              <ThisIsStupidButItWorks>
                <img src="asdasdasd" alt="asd123" />
                <h3>Heading</h3>
                <p>Main intro</p>
              </ThisIsStupidButItWorks>
            );
          `} />
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Fragments
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            Now it comes out of the box.
          </Heading>
          <CodePane lang="javascript" source={`
            const ArticlePreview = () => (
              <React.Fragment>
                <img src="asdasdasd" alt="asd123" />
                <h3>Heading</h3>
                <p>Main intro</p>
              </React.Fragment>
            );
          `} />
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Context API
          </Heading>
          <List>
            <ListItem>Replaces the old Context API</ListItem>
            <ListItem>Not labelled as unsafe to use</ListItem>
            <ListItem>Might be considered as a replacement to other state management libraries.</ListItem>
            <ListItem>Ease of use</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Context API
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            Usage step 1/3: Create a new context.
          </Heading>
          <CodePane lang="javascript" source={`
            // product object definition:
            // {
            //    code: string
            //    price: string
            //    isAdded: boolean
            // }

            const defaultData = {
              products: [],
              actions: {
                cartAction: (code) => return,
              }
            }

            const ProductListContext = React.createContext(defaultData);
          `} />
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Context API
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            Usage step 2/3: Create a provider.
          </Heading>
          <CodePane lang="javascript" source={`
            class ProductListProvider extends React.Component {
              state = {
                products: this.props.products, // might also be fetched from external API in componentDidMount
              }

              cartAction = (code) => {
                const productIndex = this.state.products.findIndex(p => p.code === code);
                let newProduct = this.state.products[productIndex];
                newProduct.isAdded = !newProduct.isAdded;

                this.setState({ products: this.state.products.splice(productIndex, 1, newProduct) });
              }

              render() {
                <ProductListContext.Provider
                  value={{
                    products: this.state.products,
                    actions: {
                      cartAction: this.cartAction,
                    }
                  }}
                >
                    {this.props.children}
                </ProductListContext.Provider>
              }
            }
          `} />
        </Slide>
        <Slide transition={['slide']} bgColor="white" align="flex-start flex-start">
          <Heading margin="0" padding="20px 30px" bgColor="green" textColor="white" textAlign="left" caps size={3} bold>
            Context API
          </Heading>
          <Heading margin="0 0 20px" padding="10px 20px" bgColor="gray" textColor="white" textAlign="left" size={6} bold>
            Usage step 3/3: Create a consumer.
          </Heading>
          <CodePane lang="javascript" source={`
            export const ProductListConsumer = ({ render, children }) => {
              if (render) {
                return (
                  <ProductListContext.Consumer>
                    {providedData => providedData.products.map(product =>
                      render({ product, actions: providedData.actions }))}
                  </ProductListContext.Consumer>
                );
              }

              if (children) {
                return (
                  <ProductListContext.Consumer>
                    {providedData => providedData.products.map(product =>
                      React.Children.map(children, child =>
                        React.cloneElement(child, { product, actions: providedData.actions })))}
                  </ProductListContext.Consumer>
                );
              }

              return null;
            }
          `} />
        </Slide>
      </Deck>
    );
  }
}
