import React from 'react'
import { connect } from 'react-redux'
import { togglePathway } from '../state/app'
import {
  PathwaysList,
  PathwaysHeader,
  PathwaysOption,
  OptionWrapper,
  Tooltip,
  PathwaysSeparator,
} from './PathwaysSelector.style'

const mainPathways = [
  {
    id: 'coalitions',
    name: 'Coalitions',
    color: 'red',
    briefDescription:
      'Energy carrier suppliers take on the highest burden in the decarbonisation of the EU energy system, with consumers observing this transition in mostly a passive way and being reactive to policies as they emerge.',
  },
  {
    id: 'localsolutions',
    name: 'Local Solutions',
    color: 'blue',
    briefDescription: 'Consumers (especially households) engage more proactively in the transition, through choices on end use appliances, energy efficiency measures and transportation technologies.',
  },
  {
    id: 'parisagreement',
    name: 'Paris Agreement',
    color: 'green',
    briefDescription: 'The EU undertakes an ambitious decarbonisation effort, with a target of 95% reduction of CO2 emissions by 2050. This overshoots the Paris Agreement pledges. Both energy carrier suppliers and consumers engage in the challenge.',
  },
]

const secondaryPathways = [
  { id: 'model', name: 'Model', color: 'steelblue', briefDescription: '(secondary pathway)' },
  { id: 'reference', name: 'Reference', color: 'orange', briefDescription: '(secondary pathway)' },
  {
    id: 'parisagreementeu',
    name: 'Paris Agreement EU',
    color: 'darkturquoise',
    briefDescription: '(secondary pathway)'
  },
]

const listPathways = (availablePathways, pathways, dispatch) => {
  return availablePathways.map((pathway, i) => (
    <OptionWrapper key={i}>
      <PathwaysOption
        onClick={() => dispatch(togglePathway(pathway.id))}
        style={
          pathways.indexOf(pathway.id) > -1
            ? { background: pathway.color, color: 'white' }
            : null
        }
      >
        {pathway.name}
      </PathwaysOption>
      <Tooltip><p><b>{pathway.name}</b></p><p>{pathway.briefDescription}</p></Tooltip>
    </OptionWrapper>
  ))
}

const PathwaysSelector = ({ pathways, dispatch }) => (
  <PathwaysList>
    <PathwaysHeader>Integrated Pathways</PathwaysHeader>
    {listPathways(mainPathways, pathways, dispatch)}
    {/* <PathwaysSeparator />
    {listPathways(secondaryPathways, pathways, dispatch)} */}
  </PathwaysList>
)

export default connect(
  state => ({
    pathways: state.app.pathways,
  }),
  null
)(PathwaysSelector)
