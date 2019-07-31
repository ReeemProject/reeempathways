import data from './projected_biomass_production'

const config = {
  chartType: 'BarChart',
  title: 'Projected biomass production',
  yAxisLabel: 'PJ',
  data: data,
  bars: [
    { dataKey: 'coalitions', fill: 'red' },
    { dataKey: 'localsolutions', fill: 'blue' },
    { dataKey: 'parisagreement', fill: 'green' },
  ],
}

export default config