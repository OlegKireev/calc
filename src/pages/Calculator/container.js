import React, { useState } from 'react';
import { Calculator } from './Calculator';

export const CalculatorContainer = (props) => {
  const [buttons, changeButtons] = useState([
    {
      label: 'C',
      action: null,
      cell: 1,
      type: 'action',
      isClicked: false,
    },
    {
      label: 'MC',
      action: null,
      cell: 2,
      type: 'action',
      isClicked: false,
    },
    {
      label: '<',
      action: null,
      cell: 3,
      type: 'action',
      isClicked: false,
    },
    {
      label: '/',
      action: null,
      cell: 4,
      type: 'action',
      isClicked: false,
    },
    {
      label: 'x',
      action: null,
      cell: 8,
      type: 'action',
      isClicked: false,
    },
    {
      label: '-',
      action: null,
      cell: 12,
      type: 'action',
      isClicked: false,
    },
    {
      label: '+',
      action: null,
      cell: 16,
      type: 'action',
      isClicked: false,
    },
    {
      label: '=',
      action: null,
      cell: 20,
      type: 'result',
      isClicked: false,
    },
    {
      label: '.',
      action: null,
      cell: 18,
      type: '',
      isClicked: false,
    },
    {
      label: '0',
      action: null,
      cell: 17,
      type: 'number',
      isClicked: false,
    },
    {
      label: '1',
      action: null,
      cell: 13,
      type: 'number',
      isClicked: false,
    },
    {
      label: '2',
      action: null,
      cell: 14,
      type: 'number',
      isClicked: false,
    },
    {
      label: '3',
      action: null,
      cell: 15,
      type: 'number',
      isClicked: false,
    },
    {
      label: '4',
      action: null,
      cell: 9,
      type: 'number',
      isClicked: false,
    },
    {
      label: '5',
      action: null,
      cell: 10,
      type: 'number',
      isClicked: false,
    },
    {
      label: '6',
      action: null,
      cell: 11,
      type: 'number',
      isClicked: false,
    },
    {
      label: '7',
      action: null,
      cell: 5,
      type: 'number',
      isClicked: false,
    },
    {
      label: '8',
      action: null,
      cell: 6,
      type: 'number',
      isClicked: false,
    },
    {
      label: '9',
      action: null,
      cell: 7,
      type: 'number',
      isClicked: false,
    },
  ]);

  return <Calculator {...props} buttons={buttons} changeButtons={changeButtons} />;
};
