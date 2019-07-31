import data from './electricity_generation_capacity'

const config = {
  chartType: 'BarChart',
  title: 'Net electricity generation capacity',
  yAxisLabel: 'GW',
  data: data,
  bars: [
    { dataKey: 'coalitions', fill: 'red' },
    { dataKey: 'localsolutions', fill: 'blue' },
    { dataKey: 'parisagreement', fill: 'green' },
  ],
}

export default config