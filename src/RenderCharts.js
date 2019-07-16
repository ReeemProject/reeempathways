import { Flex } from 'RenderCharts.style'
import RenderChart from './RenderChart'

export default ({ config }) => (
  <Flex>
    {config.map((chartConfig,i) => <RenderChart key={i} config={chartConfig} />)}    
  </Flex>
)
