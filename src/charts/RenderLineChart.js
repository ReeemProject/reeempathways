import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

const RenderLineChart = ({ data, lines, yAxisLabel = '' }) => {
  return (
    <LineChart
      width={380}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis
        label={{
          value: yAxisLabel,
          angle: -90,
          position: 'insideLeft',
        }}
      />
      <Tooltip />
      {lines.map(line => (
        <Line key={line.dataKey} type='monotone' dataKey={line.dataKey} stroke={line.fill} />
      ))}
    </LineChart>
  )
}

RenderLineChart.propTypes = {
  data: PropTypes.array.isRequired,
  lines: PropTypes.array.isRequired,
  yAxisLabel: PropTypes.string,
}

export default RenderLineChart