import React,{ Component,Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AlertError from './components/AlertError';
import ListNews from './components/ListNews';
import FormCategory from './components/FormCategory'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news:[],
      error:false
     };
  }

  componentDidMount(){
    this.handlePromiseNews(); 
  }

  getNewsFromRemote = async (category='general') =>{

    const endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
    const request ={
      method : 'GET',
      headers : {
        'x-api-key' : process.env.REACT_APP_TOKEN_NEWS_API
      }
    }
    let response = await fetch(endpoint,request);
    let data = await response.json();

    return data   
  }

  handlePromiseNews=(category)=>{
    const requestPromise = this.getNewsFromRemote(category);
    
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


  

  render() {
    return (
      <Fragment>
        <Header titulo='Cliente React de Noticias'/>

        {this.state.error
        ?<AlertError errors={['No se han podido obtener las noticias desde el sitio remoto...']}/>
        :null}

        <div className="container white contenedor-noticias">
          <FormCategory handlePromiseNews={this.handlePromiseNews}/>  
          <ListNews Listnews={this.state.news}/>
        </div>

        <Footer/>
      </Fragment>  
    );
  }
}

export default App;
