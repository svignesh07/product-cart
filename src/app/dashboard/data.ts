import { data as countries } from 'emoji-flags';

/* Data */
export const single = [
  {
    name: 'Germany',
    value: 40632
  },
  {
    name: 'United States',
    value: 49737
  },
  {
    name: 'France',
    value: 36745
  },
  {
    name: 'United Kingdom',
    value: 36240
  },
  {
    name: 'Spain',
    value: 33000
  },
  {
    name: 'Italy',
    value: 35800
  }
];

export const multi = [
  {
    name: 'Germany',
    series: [
      {
        name: '2010',
        value: 40632
      },
      {
        name: '2000',
        value: 36953
      },
      {
        name: '1990',
        value: 31476
      }
    ]
  },
  {
    name: 'United States',
    series: [
      {
        name: '2010',
        value: 49737
      },
      {
        name: '2000',
        value: 45986
      },
      {
        name: '1990',
        value: 37060
      }
    ]
  },
  {
    name: 'France',
    series: [
      {
        name: '2010',
        value: 36745
      },
      {
        name: '2000',
        value: 34774
      },
      {
        name: '1990',
        value: 29476
      }
    ]
  },
  {
    name: 'United Kingdom',
    series: [
      {
        name: '2010',
        value: 36240
      },
      {
        name: '2000',
        value: 32543
      },
      {
        name: '1990',
        value: 26424
      }
    ]
  }
];

export const bubble = [
  {
    name: 'Germany',
    series: [
      {
        name: '2010',
        x: new Date(2010, 0, 1),
        y: 80.3,
        r: 80.4
      },
      {
        name: '2000',
        x: new Date(2000, 0, 1),
        y: 80.3,
        r: 78
      },
      {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 75.4,
        r: 79
      }
    ]
  },
  {
    name: 'United States',
    series: [
      {
        name: '2010',
        x: new Date(2010, 0, 1),
        y: 78.8,
        r: 310
      },
      {
        name: '2000',
        x: new Date(2000, 0, 1),
        y: 76.9,
        r: 283
      },
      {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 75.4,
        r: 253
      }
    ]
  },
  {
    name: 'France',
    series: [
      {
        name: '2010',
        x: new Date(2010, 0, 1),
        y: 81.4,
        r: 63
      },
      {
        name: '2000',
        x: new Date(2000, 0, 1),
        y: 79.1,
        r: 59.4
      },
      {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 77.2,
        r: 56.9
      }
    ]
  },
  {
    name: 'United Kingdom',
    series: [
      {
        name: '2010',
        x: new Date(2010, 0, 1),
        y: 80.2,
        r: 62.7
      },
      {
        name: '2000',
        x: new Date(2000, 0, 1),
        y: 77.8,
        r: 58.9
      },
      {
        name: '1990',
        x: new Date(1990, 0, 1),
        y: 75.7,
        r: 57.1
      }
    ]
  }
];

export function generateGraph(nodeCount: number) {
  const nodes = [];
  const links = [];
  for (let i = 0; i < nodeCount; i++) {
    const country = countries[Math.floor(Math.random() * countries.length)];
    nodes.push({
      value: country.name,
    });
    for (let j = 0; j < nodes.length - 1; j++) {
      if (Math.random() < 0.03) {
        links.push({
          source: country,
          target: nodes[j].value,
        });
      }
    }
  }
  return { links, nodes };
}

export function generateData(seriesLength: number, includeMinMaxRange: boolean, dataPoints: number = 5): any[] {
  const results = [];

  const domain: Date[] = []; // array of time stamps in milliseconds

  for (let j = 0; j < dataPoints; j++) {
    // random dates between Sep 12, 2016 and Sep 24, 2016
    domain.push(new Date(Math.floor(1473700105009 +  Math.random() * 1000000000)));
  }

  for (let i = 0; i < seriesLength; i++) {
    const country = countries[Math.floor(Math.random() * countries.length)];
    const series = {
      name: country.name,
      series: []
    };

    for (let j = 0; j < domain.length; j++) {
      const value = Math.floor(2000 + Math.random() * 5000);
      // let timestamp = Math.floor(1473700105009 + Math.random() * 1000000000);
      const timestamp = domain[j];
      if (includeMinMaxRange) {
        const errorMargin = 0.02 + Math.random() * 0.08;

        series.series.push({
          value,
          name: timestamp,
          min: Math.floor(value * (1 - errorMargin)),
          max: Math.ceil(value * (1 + errorMargin))
        });
    } else {
        series.series.push({
          value,
          name: timestamp
        });
      }
    }

    results.push(series);
  }
  return results;
}

/* Line Series Data */
export let lineChart: any = [
  {
    value: 50,
    name: 'USA',
  },
  {
    value: 80,
    name: 'United Kingdom',
  },
  {
    value: 85,
    name: 'France',
  },
  {
    value: 90,
    name: 'Japan',

  },
  {
    value: 100,
    name: 'China'

  }
];

export let lineChartSeries = [
  {
    name: 'Tablets',
    series: [
          {
      name: 'USA',
      value: 50
    },
      {
        value: 80,
        name: 'United Kingdom'
      },
      {
        value: 85,
        name: 'France'
      },
      {
        value: 90,
        name: 'Japan'
      },
      {
        value: 100,
        name: 'China'
      }
    ]
  },
    {
    name: 'Cell Phones',
    series: [
          {
      value: 10,
      name: 'USA'
    },
      {
        value: 20,
        name: 'United Kingdom'
      },
      {
        value: 30,
        name: 'France'
      },
      {
        value: 40,
        name: 'Japan'
      },
      {
        value: 10,
        name: 'China'
      }
    ]
  },
    {
    name: 'Computers',
    series: [
          {
      value: 2,
      name: 'USA',

    },
      {
        value: 4,
        name: 'United Kingdom'
      },
      {
        value: 20,
        name: 'France'
      },
      {
        value: 30,
        name: 'Japan'
      },
      {
        value: 35,
        name: 'China'
      }
    ]
  }
];

export let barChart: any = [
  {
    name: 'USA',
    value: 50000
  },
  {
    name: 'United Kingdom',
    value: 30000
  },
  {
    name: 'France',
    value: 10000
  },
  {
    name: 'Japan',
    value: 5000
  },
  {
    name: 'China',
    value: 500
  }
];

/* Chart Types */
export const chartGroups = [
  {
    name: 'Bar Charts',
    charts: [
      {
        name: 'Vertical Bar Chart',
        selector: 'bar-vertical',
        inputFormat: 'singleSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled', 'roundEdges', 'yScaleMax'
        ]
      },
      {
        name: 'Horizontal Bar Chart',
        selector: 'bar-horizontal',
        inputFormat: 'singleSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled', 'roundEdges', 'xScaleMax'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'GDP Per Capita (USD)',
        }
      },
      {
        name: 'Grouped Vertical Bar Chart',
        selector: 'bar-vertical-2d',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding', 'groupPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled', 'roundEdges', 'yScaleMax'
        ]
      },
      {
        name: 'Grouped Horizontal Bar Chart',
        selector: 'bar-horizontal-2d',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding', 'groupPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled', 'roundEdges', 'xScaleMax'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'GDP Per Capita (USD)',
        }
      },
      {
        name: 'Stacked Vertical Bar Chart',
        selector: 'bar-vertical-stacked',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled', 'yScaleMax'
        ]
      },
      {
        name: 'Stacked Horizontal Bar Chart',
        selector: 'bar-horizontal-stacked',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled', 'xScaleMax'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'GDP Per Capita (USD)',
        }
      },
      {
        name: 'Normalized Vertical Bar Chart',
        selector: 'bar-vertical-normalized',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'Normalized GDP Per Capita (USD)',
          xAxisLabel: 'Country',
        }
      },
      {
        name: 'Normalized Horizontal Bar Chart',
        selector: 'bar-horizontal-normalized',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient', 'barPadding',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel', 'yAxisLabel',
          'showGridLines', 'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'Country',
          xAxisLabel: 'Normalized GDP Per Capita (USD)',
        }
      }
    ]
  },
  {
    name: 'Pie Charts',
    charts: [
      {
        name: 'Pie Chart',
        selector: 'pie-chart',
        inputFormat: 'singleSeries',
        options: [
          'animations', 'colorScheme', 'gradient', 'showLegend', 'legendTitle', 'doughnut', 'arcWidth',
          'explodeSlices', 'showLabels', 'tooltipDisabled'
        ]
      },
      {
        name: 'Advanced Pie Chart',
        selector: 'advanced-pie-chart',
        inputFormat: 'singleSeries',
        options: ['animations', 'colorScheme', 'gradient', 'tooltipDisabled']
      },
      {
        name: 'Pie Grid',
        selector: 'pie-grid',
        inputFormat: 'singleSeries',
        options: ['animations', 'colorScheme', 'tooltipDisabled']
      }
    ]
  },
  {
    name: 'Line/Area Charts',
    charts: [
      {
        name: 'Line Chart',
        selector: 'line-chart',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
          'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
          'rangeFillOpacity', 'roundDomains', 'tooltipDisabled', 'showRefLines',
          'referenceLines', 'showRefLabels',
          'xScaleMin', 'xScaleMax', 'yScaleMin', 'yScaleMax'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita (USD)',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Polar Chart',
        selector: 'polar-chart',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
          'yAxisLabel', 'autoScale', 'showGridLines', 'curveClosed',
          'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita (USD)',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Area Chart',
        selector: 'area-chart',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
          'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
          'roundDomains', 'tooltipDisabled',
          'xScaleMin', 'xScaleMax', 'yScaleMin', 'yScaleMax'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita (USD)',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Stacked Area Chart',
        selector: 'area-chart-stacked',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
          'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
          'roundDomains', 'tooltipDisabled',
          'xScaleMin', 'xScaleMax', 'yScaleMin', 'yScaleMax'
        ],
        defaults: {
          yAxisLabel: 'GDP Per Capita (USD)',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
      {
        name: 'Normalized Area Chart',
        selector: 'area-chart-normalized',
        inputFormat: 'multiSeries',
        options: [
          'animations', 'colorScheme', 'schemeType', 'showXAxis', 'showYAxis', 'gradient',
          'showLegend', 'legendTitle', 'showXAxisLabel', 'xAxisLabel', 'showYAxisLabel',
          'yAxisLabel', 'autoScale', 'timeline', 'showGridLines', 'curve',
          'roundDomains', 'tooltipDisabled'
        ],
        defaults: {
          yAxisLabel: 'Normalized GDP Per Capita (USD)',
          xAxisLabel: 'Census Date',
          linearScale: true
        }
      },
    ]
  }
];
