import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'RenderCharts.style'
import RenderChart from './RenderChart'

const RenderCharts = ({ config }) => {
  const chartConfigs = Object.values(config)
  return (
    <Flex>
      {chartConfigs.map((chartConfig, i) => (
        <RenderChart key={i} config={chartConfig} />
      ))}
    </Flex>
  )
}

RenderCharts.propTypes = {
  config: PropTypes.object.isRequired,
}

export default RenderCharts
