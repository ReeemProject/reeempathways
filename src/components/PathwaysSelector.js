import React from 'react'
import { connect } from 'react-redux'
import { togglePathway } from '../state/app'
import {
  PathwaysList,
  PathwaysHeader,
  PathwaysOption,
  PathwaysSeparator,
} from './PathwaysSelector.style'

const mainPathways = [
  { id: 'coalitions', name: 'Coalitions', color: 'red' },
  { id: 'localsolutions', name: 'Local Solutions', color: 'blue' },
  { id: 'parisagreement', name: 'Paris Agreement', color: 'green' },
]

const secondaryPathways = [
  { id: 'model', name: 'Model', color: 'steelblue' },
  { id: 'reference', name: 'Reference', color: 'orange' },
  { id: 'parisagreementeu', name: 'Paris Agreement EU', color: 'darkturquoise' },
]

const listPathways = (availablePathways, pathways, dispatch) => {
  return availablePathways.map((pathway, i) => (
    <PathwaysOption
      key = {i}
      onClick={() => dispatch(togglePathway(pathway.id))}
      style={
        pathways.indexOf(pathway.id) > -1
          ? { background: pathway.color, color: 'white' }
          : null
      }
    >
      {pathway.name}
    </PathwaysOption>
  ))
}

const PathwaysSelector = ({ pathways, dispatch }) => (
  <PathwaysList>
    <PathwaysHeader>Integrated Pathways</PathwaysHeader>
    {listPathways(mainPathways, pathways, dispatch)}
    <PathwaysSeparator />
    {listPathways(secondaryPathways, pathways, dispatch)}
  </PathwaysList>
)

export default connect(
  state => ({
    pathways: state.app.pathways,
  }),
  null
)(PathwaysSelector)
