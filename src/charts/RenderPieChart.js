import React from 'react'
import PropTypes from 'prop-types'
import { PieChart, Pie, Cell } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RenderPieChart = ({ data }) => {
  return (
    <PieChart width={380} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx={200}
        cy={130}
        innerRadius={30}
        outerRadius={100}
        fill="#82ca9d"
      >
        {data.map((entry, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}

RenderPieChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default RenderPieChart
