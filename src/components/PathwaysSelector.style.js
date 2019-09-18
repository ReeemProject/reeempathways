import styled from 'styled-components'

export const PathwaysList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const PathwaysHeader = styled.div`
  font-size: 1em;
  padding: 20px 0px 20px 0px;
  margin: 30px 0px 5px 0px;
  width: 100%;
  height: 26px;
  display: flex;
  align-items: center;
`

export const PathwaysOption = styled.div`
  font-size: 0.9em;
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0px 10px 0px 15px;
  margin: 0px 10px 10px 0px;
  width: 100%;
  border-radius: 0;
  background-color: ${props =>
    props.selected ? '#b50404' : props.selected2 ? 'green' : 'inherit'};
  color: ${props =>
    props.selected ? 'white' : props.selected2 ? 'white' : 'rgb(184,176,183)'};
  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.selected ? '#b50404' : props.selected2 ? 'green' : '#555'};
    > * {
      display: block;
      font-weight: ${props =>
        props.selected ? 'bold' : props.selected2 ? 'bold' : 'normal'};
    }
  }
`

export const Tooltip = styled.div`
  visibility: hidden;
  height: 300px;
  width: 250px;
  opacity: 0.7;
  background-color: black;
  color: #fff;
  text-align: left;
  padding: 10px;
  border-radius: 6px;
  right: 200px;
  margin-top: -40px;
  position: absolute;
  z-index: 1;
`

export const OptionWrapper = styled.div`
  width: 100%;
  display: inline;
  &:hover ${Tooltip} {
    visibility: visible;
  }
`

export const PathwaysSeparator = styled.hr`
  margin: 20px 12px 20px 0px;
  border-color: #555;
  border-width: 1px;
  width: 100%;
`
