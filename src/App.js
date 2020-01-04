import React,{ Component,Fragment } from 'react';
import Footer from './components/Footer'
import AlertError from './components/AlertError'

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
    
    requestPromise
    .then(data=>{
      if(data.status!=='ok') throw new Error(`${data.code} ${data.message}`);

      this.setState({
        news:[...data.articles],
        error:false
      })

    })
    .catch(error=>{
      console.error(`Request failed: ${error}`)
      this.setState({
        error:true
      })
    })
  }

  getNewsFromRemote = async (category='business') =>{

    const endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_TOKEN_NEWS_API}`;
    let response = await fetch(endpoint);
    let data = await response.json();
    return data 
    
  }

  render() {
    return (
      <Fragment>
        <h1>Cliente de Noticias</h1>

        {this.state.error
        ?<AlertError errors={['No se han podido obtener las noticias desde el sitio remoto...']}/>
        :null}
        
        <Footer/>
      </Fragment>  
    );
  }
}

export default App;
