import data from './projected_biomass_production'

const config = {
  chartType: 'LineChart',
  title: 'Projected biomass production',
  yAxisLabel: 'PJ',
  data: data,
  lines: [
    { dataKey: 'coalitions', fill: 'red' },
    { dataKey: 'localsolutions', fill: 'blue' },
    { dataKey: 'parisagreement', fill: 'green' },
  ],
}

export default config