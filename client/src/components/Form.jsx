import React from 'react';
import Category from './Category';

class Form extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      categories: []
    };
  }

  componentDidMount() {
    fetch('/api/v1/categories')
      .then(res => res.json())
      .then(
        (result) => {
          if (result) {
            this.setState({
              isLoaded: true,
              categories: result
            })
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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
