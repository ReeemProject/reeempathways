import data from './relative_growth'

const config = {
  chartType: 'BarChart',
  title: 'GDP growth',
  yAxisLabel: 'GDP (2011=1)',
  data: data,
  bars: [
    { dataKey: 'coalitions', fill: 'red' },
    { dataKey: 'localsolutions', fill: 'blue' },
    { dataKey: 'parisagreement', fill: 'green' },
    { dataKey: 'parisagreementeu', fill: 'darkturquoise' },
  ],
}

export default config