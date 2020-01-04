import React,{ Component,Fragment } from 'react';
import Footer from './components/Footer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    console.log(process.env.REACT_APP_TOKEN_NEWS_API);
    return (
      <Fragment>
        <h1>Its, works</h1>
        <Footer/>
      </Fragment>  
    );
  }
}

export default App;
