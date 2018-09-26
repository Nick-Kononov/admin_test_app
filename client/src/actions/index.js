import {SET_USER_TOKEN, UPDATE_USER, CHANGE_USER_SKILLS, CLEAR_ALL} from '../constants.js'

export function setUserToken(token) {
  return {
    type: SET_USER_TOKEN,
    token
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user
  }
}

export function changeUserSkills(newSkills) {
  return {
    type: CHANGE_USER_SKILLS,
    newSkills
  }
}

export function clearAll() {
  return {
    type: CLEAR_ALL
  }
}
