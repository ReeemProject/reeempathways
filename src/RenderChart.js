import RenderLineChart from './charts/RenderLineChart'
import RenderBarChart from './charts/RenderBarChart'
import RenderStackedBarChart from './charts/RenderStackedBarChart'
import RenderPieChart from './charts/RenderPieChart'
import { connect } from 'react-redux'
import { ChartWrapper, ChartTitle, DownloadButton } from 'RenderChart.style'

const RenderChart = ({ config, pathways }) => {
  const exportToJson = objectData => {
    let filename = 'export.json'
    let contentType = 'application/json;charset=utf-8;'
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob(
        [decodeURIComponent(encodeURI(JSON.stringify(objectData)))],
        { type: contentType }
      )
      navigator.msSaveOrOpenBlob(blob, filename)
    } else {
      var a = document.createElement('a')
      a.download = filename
      a.href =
        'data:' +
        contentType +
        ',' +
        encodeURIComponent(JSON.stringify(objectData))
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }
  let result
  switch (config.chartType) {
    case 'LineChart':
      result = (
        <RenderLineChart
          data={config.data}
          lines={config.lines.filter(
            line => pathways.indexOf(line.dataKey) > -1
          )}
          yAxisLabel={config.yAxisLabel}
        />
      )
      break
    case 'BarChart':
      result = (
        <RenderBarChart
          data={config.data}
          bars={config.bars.filter(bar => pathways.indexOf(bar.dataKey) > -1)}
          yAxisLabel={config.yAxisLabel}
        />
      )
      break
    case 'StackedBarChart':
      result = (
        <RenderStackedBarChart
          data={config.data}
          bars={config.bars.filter(bar => pathways.indexOf(bar.stackId) > -1)}
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
      <DownloadButton onClick={e => exportToJson(config.data)}>Download</DownloadButton>
    </ChartWrapper>
  )
}

export default connect(
  state => ({
    pathways: state.app.pathways,
  }),
  null
)(RenderChart)
