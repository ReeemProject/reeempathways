const initialState = {
  pathways: ['coalitions', 'localsolutions', 'parisagreement', 'model', 'reference', 'parisagreementeu'],
}

const TOGGLE_PATHWAY = 'TOGGLE_PATHWAY'

export const togglePathway = pathway => ({
  type: TOGGLE_PATHWAY,
  pathway,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PATHWAY:
      if (state.pathways.indexOf(action.pathway) > -1) {
        return Object.assign({}, state, {
          pathways: state.pathways.filter(val => val !== action.pathway),
        })
      } else {
        return Object.assign({}, state, {
          pathways: state.pathways.concat(action.pathway),
        })
      }
    default:
      return state
  }
}
