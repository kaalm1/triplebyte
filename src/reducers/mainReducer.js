export default function mainReducer(state= {}, action) {
  switch (action.type) {

    case 'UPDATE_USER':
      return Object.assign({}, state, {})
    default:
      return state;

  }
}
