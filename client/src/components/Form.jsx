import React from 'react';
import { read_cookie } from 'sfcookies';
import Category from './Category';

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      categories: []
    };
  }

  getCategoriesFromApi(){
    let token = 'Bearer ' + read_cookie('token')
    fetch('/api/v1/categories',{
      headers: {'Authorization': token}
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result) {
            this.setState({categories: result})
          }
        }
      )
  }

  componentWillMount() {
    this.getCategoriesFromApi()
  }

  render() {
    return(
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Avaliable skills</h2>
            {
              this.state.categories.map(category => {
                return (
                  <Category key={category.id} category={category} />
                )
              })
            }
        </div>
      </div>
    )
  }
}

export default Form;
