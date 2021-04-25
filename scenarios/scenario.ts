// Main scenario
import { Places, Transitions } from '../definitions'

export const places: Places = {
  'L1': { tokens: 0 },
  'L2': { tokens: 2 },
  'L3': { tokens: 1 },
  'L4': { tokens: 0 },
  'L5': { tokens: 0 },
  'L6': { tokens: 0 },
  'L7': { tokens: 10 },
  'L8': { tokens: 0 },
  'L9': { tokens: 0 },
  'L10': { tokens: 0 },
  'L11': { tokens: 0 },
  'L12': { tokens: 0 },
  'L13': { tokens: 0 },
}

export const transitions: Transitions = [
  {
    id: 'Ta',
    inputs: [
      { place: 'L1', multiplicity: 2, type: 'regular' },
    ],
    outputs: [
      { place: 'L4', multiplicity: 1 },
    ]
  },
  {
    id: 'Tb',
    inputs: [
      { place: 'L2', multiplicity: 1, type: 'regular' },
    ],
    outputs: [
      { place: 'L1', multiplicity: 1 },
      { place: 'L5', multiplicity: 1 },
    ]
  },
  {
    id: 'Tc',
    inputs: [
      { place: 'L3', multiplicity: 1, type: 'regular' },
    ],
    outputs: [
      { place: 'L6', multiplicity: 1 },
    ]
  },
  {
    id: 'Td',
    inputs: [
      { place: 'L4', multiplicity: 1, type: 'regular' },
      { place: 'L8', multiplicity: 1, type: 'regular' },
      { place: 'L7', multiplicity: 1, type: 'reset' },
    ],
    outputs: [
      { place: 'L11', multiplicity: 1 },
    ]
  },
  {
    id: 'Te',
    inputs: [
      { place: 'L5', multiplicity: 1, type: 'regular' },
      { place: 'L6', multiplicity: 2, type: 'inhibitor' },
    ],
    outputs: [
      { place: 'L8', multiplicity: 1 },
      { place: 'L9', multiplicity: 1 },
      { place: 'L10', multiplicity: 1 },
    ]
  },
  {
    id: 'Tf',
    inputs: [
      { place: 'L10', multiplicity: 1, type: 'regular' },
      { place: 'L13', multiplicity: 1, type: 'regular' },
    ],
    outputs: [
      { place: 'L2', multiplicity: 1 },
      { place: 'L6', multiplicity: 1 },
    ]
  },
  {
    id: 'Tg',
    inputs: [
      { place: 'L8', multiplicity: 1, type: 'regular' },
      { place: 'L9', multiplicity: 1, type: 'regular' },
      { place: 'L11', multiplicity: 1, type: 'regular' },
    ],
    outputs: [
      { place: 'L12', multiplicity: 1 },
      { place: 'L13', multiplicity: 1 },
    ]
  },
]
