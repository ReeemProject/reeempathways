import data from './disability_adjusted_life_years'

const config = {
  chartType: 'BarChart',
  title: 'Disability Adjusted Life Years',
  yAxisLabel: 'DALY (thousands)',
  data: data,
  bars: [
    { dataKey: 'reference', fill: 'orange' },
    { dataKey: 'coalitions', fill: 'red' },
    { dataKey: 'localsolutions', fill: 'green' },
    { dataKey: 'parisagreement', fill: 'blue' },
  ],
}

export default config
