export default function user(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_USER':
      return (Object.assign(
        {},
        state,
        {user: action.user}
      ))
    case 'CHANGE_USER_SKILLS':
      return (Object.assign(
        {},
        state,
        {user: {skills: action.newSkills}}
      ))
    case 'SET_USER_TOKEN':
      return (Object.assign(
        {},
        state,
        {token: action.token}
      ))
    case 'CLEAR_ALL':
      return ({})
    default:
      return state;
  }
}
