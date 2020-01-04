import React,{ Component,Fragment } from 'react';
import Footer from './components/Footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Fragment>
        <h1>Its, works</h1>
        <Footer/>
      </Fragment>

      
    );
  }
}

export default App;
