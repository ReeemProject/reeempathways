import data from './electricity_generation_capacity'

const config = {
  chartType: 'StackedBarChart',
  title: 'Net electricity generation capacity',
  yAxisLabel: 'GW',
  data: data,
  bars: [
    { dataKey: 'coalitions_Coal', stackId: 'coalitions', fill: '#FF0000' },
    {
      dataKey: 'localsolutions_Coal',
      stackId: 'localsolutions',
      fill: '#008000',
    },
    {
      dataKey: 'parisagreement_Coal',
      stackId: 'parisagreement',
      fill: '#0000FF',
    },
    { dataKey: 'coalitions_Lignite', stackId: 'coalitions', fill: '#FF1000' },
    {
      dataKey: 'localsolutions_Lignite',
      stackId: 'localsolutions',
      fill: '#108000',
    },
    {
      dataKey: 'parisagreement_Lignite',
      stackId: 'parisagreement',
      fill: '#1010FF',
    },
    { dataKey: 'coalitions_Oil', stackId: 'coalitions', fill: '#FF2000' },
    {
      dataKey: 'localsolutions_Oil',
      stackId: 'localsolutions',
      fill: '#208000',
    },
    {
      dataKey: 'parisagreement_Oil',
      stackId: 'parisagreement',
      fill: '#2020FF',
    },
    {
      dataKey: 'coalitions_NaturalGas',
      stackId: 'coalitions',
      fill: '#FF3000',
    },
    {
      dataKey: 'localsolutions_NaturalGas',
      stackId: 'localsolutions',
      fill: '#308000',
    },
    {
      dataKey: 'parisagreement_NaturalGas',
      stackId: 'parisagreement',
      fill: '#3030FF',
    },
    { dataKey: 'coalitions_Nuclear', stackId: 'coalitions', fill: '#FF4000' },
    {
      dataKey: 'localsolutions_Nuclear',
      stackId: 'localsolutions',
      fill: '#408000',
    },
    {
      dataKey: 'parisagreement_Nuclear',
      stackId: 'parisagreement',
      fill: '#4040FF',
    },
    {
      dataKey: 'coalitions_HydroInclPumpStorage',
      stackId: 'coalitions',
      fill: '#FF5000',
    },
    {
      dataKey: 'localsolutions_HydroInclPumpStorage',
      stackId: 'localsolutions',
      fill: '#508000',
    },
    {
      dataKey: 'parisagreement_HydroInclPumpStorage',
      stackId: 'parisagreement',
      fill: '#5050FF',
    },
    { dataKey: 'coalitions_Wind', stackId: 'coalitions', fill: '#FF6000' },
    {
      dataKey: 'localsolutions_Wind',
      stackId: 'localsolutions',
      fill: '#608000',
    },
    {
      dataKey: 'parisagreement_Wind',
      stackId: 'parisagreement',
      fill: '#6060FF',
    },
    { dataKey: 'coalitions_Solar', stackId: 'coalitions', fill: '#FF7000' },
    {
      dataKey: 'localsolutions_Solar',
      stackId: 'localsolutions',
      fill: '#708000',
    },
    {
      dataKey: 'parisagreement_Solar',
      stackId: 'parisagreement',
      fill: '#7070FF',
    },
    {
      dataKey: 'coalitions_BiomassWasteRen',
      stackId: 'coalitions',
      fill: '#FF8000',
    },
    {
      dataKey: 'localsolutions_BiomassWasteRen',
      stackId: 'localsolutions',
      fill: '#808000',
    },
    {
      dataKey: 'parisagreement_BiomassWasteRen',
      stackId: 'parisagreement',
      fill: '#8080FF',
    },
    {
      dataKey: 'coalitions_OtherRenewables',
      stackId: 'coalitions',
      fill: '#FF9000',
    },
    {
      dataKey: 'localsolutions_OtherRenewables',
      stackId: 'localsolutions',
      fill: '#908000',
    },
    {
      dataKey: 'parisagreement_OtherRenewables',
      stackId: 'parisagreement',
      fill: '#9090FF',
    },
    {
      dataKey: 'coalitions_OthersWasteNonRen',
      stackId: 'coalitions',
      fill: '#FFA000',
    },
    {
      dataKey: 'localsolutions_OthersWasteNonRen',
      stackId: 'localsolutions',
      fill: '#A08000',
    },
    {
      dataKey: 'parisagreement_OthersWasteNonRen',
      stackId: 'parisagreement',
      fill: '#A0A0FF',
    },
    {
      dataKey: 'coalitions_ElectricityStorageExclPumpStorage',
      stackId: 'coalitions',
      fill: '#FFB000',
    },
    {
      dataKey: 'localsolutions_ElectricityStorageExclPumpStorage',
      stackId: 'localsolutions',
      fill: '#B08000',
    },
    {
      dataKey: 'parisagreement_ElectricityStorageExclPumpStorage',
      stackId: 'parisagreement',
      fill: '#B0B0FF',
    },
  ],
}

export default config
