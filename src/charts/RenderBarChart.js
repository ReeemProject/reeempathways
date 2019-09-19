import React from 'react'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const RenderBarChart = ({ data, bars, yAxisLabel = '' }) => {
  const width = 380
  return (
    <BarChart
      width={width}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barGap={1}
    >
      <XAxis dataKey="name" />
      <YAxis
        label={{
          value: yAxisLabel,
          angle: -90,
          position: 'insideLeft',
        }}
      />
      <Tooltip position={{x: width, y:0}} wrapperStyle={{zIndex: 10}}/>
      {bars.map(bar => (
        <Bar key={bar.dataKey} dataKey={bar.dataKey} fill={bar.fill} />
      ))}
    </BarChart>
  )
}

RenderBarChart.propTypes = {
  data: PropTypes.array.isRequired,
  bars: PropTypes.array.isRequired,
  yAxisLabel: PropTypes.string,
}

export default RenderBarChart