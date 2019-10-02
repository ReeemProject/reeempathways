import data from './climate_change_impacts_per_capita'

const config = {
  chartType: 'StackedBarChart',
  title: 'Trends for climate change impacts in EU28',
  yAxisLabel: 'kg CO2 eq/cap',
  data: data,
  bars: [
    { dataKey: 'coalitions_Agriculture', stackId: 'coalitions', fill: '#FF0000' },
    { dataKey: 'coalitions_Commercial', stackId: 'coalitions', fill: '#FF2000' },
    { dataKey: 'coalitions_Households', stackId: 'coalitions', fill: '#FF4000' },
    { dataKey: 'coalitions_Industry', stackId: 'coalitions', fill: '#FF6000' },
    { dataKey: 'coalitions_Transport', stackId: 'coalitions', fill: '#FF8000' },
    { dataKey: 'parisagreement_Agriculture', stackId: 'parisagreement', fill: '#008000' },
    { dataKey: 'parisagreement_Commercial', stackId: 'parisagreement', fill: '#008020' },
    { dataKey: 'parisagreement_Households', stackId: 'parisagreement', fill: '#008040' },
    { dataKey: 'parisagreement_Industry', stackId: 'parisagreement', fill: '#008060' },
    { dataKey: 'parisagreement_Transport', stackId: 'parisagreement', fill: '#008080' },
  ],
}

export default config