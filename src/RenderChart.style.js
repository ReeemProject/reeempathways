import styled from 'styled-components'

export const ChartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 380px;
`

export const ChartTitle = styled.div`
  align-self: center;
  font-size: 18px;
  padding-bottom: 10px;
 
`
export const DownloadButton = styled.button`
  display: none;
  align-self: center;
  font-size: 18px;
  padding-bottom: 10px;
  border:none;
  background-color: #0088FE;
  border-radius: 12px;
  padding: 5px;
  color: white;
  :hover {
    background-color: #075fab;
    color: white;
  }
  ${ChartWrapper}:hover &{
    display: block;
  }
`
