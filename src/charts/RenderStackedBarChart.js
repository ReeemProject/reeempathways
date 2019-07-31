import React from 'react'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const RenderBarChart = ({ data, bars, yAxisLabel = '' }) => {
  return (
    <BarChart
      width={380}
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
      <Tooltip />
      {bars.map(bar => (
        <Bar
          key={bar.dataKey}
          dataKey={bar.dataKey}
          stackId={bar.stackId}
          fill={bar.fill}
        />
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
