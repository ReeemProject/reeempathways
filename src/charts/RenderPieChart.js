import React from 'react'
import PropTypes from 'prop-types'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4433']
const RADIAN = Math.PI / 180;
const RenderPieChart = ({ data }) => {
  
  let others = []
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      let e = payload[0]
      if (e.name === 'Other') {
        var renderedOutput = [data.filter(d=> others.indexOf(d.name)>-1).map(item => <p> {item.name + ': ' + (item.value).toFixed(2)} </p>)]

        return (
          <>
          {renderedOutput}
          </>
        )
      } 
      return (
        <p>{`${e.name} : ${(e.value).toFixed(2)}`}</p>
      );
    }
  
    return null;
  };
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    console.log(percent)
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {(percent * 100).toFixed(0) > 0 ? `${(percent * 100).toFixed(0)}%`: ``}
      </text>
    );
  };
  console.log(JSON.stringify(data))
  console.log(data.length)
 let  d = data.filter(d => d.value > 100)
 let newData = []
 let otherValue = 0
  data.forEach(e => {
    if (e.value > 100) newData.push(e)
    else {
      otherValue += e.value
      others.push(e.name)
    }
  });
  newData.push({'name': 'Other', 'value': otherValue})
  console.log(d.length)
  return (
    <PieChart width={380} height={300}>
      <Pie
        data={newData}
        dataKey="value"
        labelLine={false}
        nameKey="name"
        cx={200}
        cy={130}
        innerRadius={30}
        outerRadius={100}
        fill="#82ca9d"
        label={renderCustomizedLabel}
      >
        {data.map((entry, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={CustomTooltip} />
    <Legend />
    </PieChart>
  )
}

RenderPieChart.propTypes = {
  data: PropTypes.array.isRequired,
}

export default RenderPieChart
