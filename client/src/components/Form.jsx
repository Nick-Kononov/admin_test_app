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

  getCategotiesFromApi(){
    let token = 'Bearer ' + read_cookie('token')
    fetch('/api/v1/categories',{
      headers: {'Authorization': token}
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (result) {
            this.setState({
              categories: result
            })
          }
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  componentWillMount() {
    this.getCategotiesFromApi()
  }

  compareCategories() {
    let categories = this.state.categories
    categories.forEach(category => {
      category.skills.forEach(skill => {
        this.props.userSkills.forEach(user_skill => {
          if (skill.id === user_skill.skill.id) {
            skill.active = true
            skill.level = user_skill.level
            skill.desire = user_skill.desire
          }
        })
      })
    })
    this.setState({categories})
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
