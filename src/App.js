import React,{ Component,Fragment } from 'react';
import Footer from './components/Footer'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news:[],
      error:false
     };
  }

  componentDidMount(){
    const requestPromise = this.getNewsFromRemote();
    
    requestPromise.then(data=>{
      if(data.status!=='ok') throw new Error(`${data.code} ${data.message}`);

      this.setState({
        news:[...data.articles]
      })

    })
    .catch(error=>{
      console.error(`Request failed: ${error}`)
      this.setState({
        error:true
      })
    })
  }

  getNewsFromRemote = async () =>{

    const endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=business&apKey=${process.env.REACT_APP_TOKEN_NEWS_API}`;
    let response = await fetch(endpoint);
    let data = await response.json();
    return data 
    
  }



  render() {
    return (
      <Fragment>
        <h1>Cliente de Noticias</h1>
        
        <Footer/>
      </Fragment>  
    );
  }
}

export default App;
