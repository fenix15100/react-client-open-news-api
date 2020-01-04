import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormCategory extends Component {
    state = { 
        category : 'general'
    }


    changeCategory = e => {
        this.setState({
            category : e.target.value
        }, () => {
            this.props.handlePromiseNews(this.state.category);
        });
    }


    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra Noticias por Categoría</h2>

                        <div className="input-field col s12 m8 offset-m2">
                            <select
                                onChange={this.changeCategory}
                            >
                                <option value="general">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
FormCategory.propTypes = {
    handlePromiseNews : PropTypes.func.isRequired
}
 
export default FormCategory;