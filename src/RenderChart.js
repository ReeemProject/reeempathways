import RenderBarChart from './charts/RenderBarChart'
import RenderPieChart from './charts/RenderPieChart'
import { connect } from 'react-redux'
import { ChartWrapper, ChartTitle } from 'RenderChart.style'

const RenderChart = ({ config, pathways }) => {
  let result
  switch (config.chartType) {
    case 'BarChart':
      result = (
        <RenderBarChart
          data={config.data}
          bars={config.bars.filter(bar => pathways.indexOf(bar.dataKey) > -1)}
          yAxisLabel={config.yAxisLabel}
        />
      )
      break
    case 'PieChart':
      result = <RenderPieChart data={config.data} />
      break
    default:
  }
  return (
    <ChartWrapper>
      <ChartTitle>{config.title}</ChartTitle>
      {result}
    </ChartWrapper>
  )
}

export default connect(
  state => ({
    pathways: state.app.pathways,
  }),
  null
)(RenderChart)
