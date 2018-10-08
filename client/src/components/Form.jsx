import React from 'react';
import { connect } from 'react-redux';
import Category from './Category';
import Alert from './Alert';

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      categories: null
    };
  }

  getCategoriesFromApi(){
    let token = 'Bearer ' + this.props.token
    fetch('/api/v1/categories',{
      headers: {'Authorization': token}
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (!result.message) {
            this.setState({categories: result})
          } else {
            this.setState({
              error: result.message
            })
          }
        }
      )
  }

  renderCategories(){
    if (this.state.categories) {
      return(
        this.state.categories.map(category => {
          return (
            <Category
              key={category.id}
              category={category}
              token={this.props.token}
              />
          )
        })
      )
    } else if(this.state.message) {
      return(
        <Alert message={`${this.state.error}. Please, relogin.`} />
      )
    }
  }

  componentDidMount() {
    this.getCategoriesFromApi()
  }

  render() {
    return(
      <div className="container">
        <h2>Avaliable skills</h2>
        {this.renderCategories()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    token: state.token
  }
}

export default connect(mapStateToProps, null)(Form);
