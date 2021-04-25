// Scenario 2 - https://i.imgur.com/a101sGn.png
import { Places, Transitions } from '../definitions'

export const places: Places = {
  'L1': { tokens: 2 },
  'L2': { tokens: 0 },
  'L3': { tokens: 2 },
  'L4': { tokens: 0 },
  'L5': { tokens: 5 },
  'L6': { tokens: 0 },
  'L7': { tokens: 0 },
  'L8': { tokens: 0 },
}

export const transitions: Transitions = [
  {
    id: 'T1',
    inputs: [
      { place: 'L1', multiplicity: 1 },
    ],
    outputs: [
      { place: 'L2', multiplicity: 1 },
    ]
  },
  {
    id: 'T2',
    inputs: [
      { place: 'L2', multiplicity: 1 },
      { place: 'L3', multiplicity: 2 },
      { place: 'L5', multiplicity: 3 },
    ],
    outputs: [
      { place: 'L4', multiplicity: 1 },
    ]
  },
  {
    id: 'T3',
    inputs: [
      { place: 'L4', multiplicity: 1 },
    ],
    outputs: [
      { place: 'L3', multiplicity: 2 },
      { place: 'L6', multiplicity: 1 },
      { place: 'L7', multiplicity: 1 },
    ]
  },
  {
    id: 'T4',
    inputs: [
      { place: 'L6', multiplicity: 1 },
      { place: 'L7', multiplicity: 1 },
    ],
    outputs: [
      { place: 'L5', multiplicity: 3 },
      { place: 'L8', multiplicity: 1 },
    ]
  },
]
