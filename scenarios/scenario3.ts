// Scenario 3 - concurrence
import { Places, Transitions } from '../definitions'

export const places: Places = {
  'L1': { tokens: 1 },
  'L2': { tokens: 0 },
  'L3': { tokens: 0 },
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
      { place: 'L1', multiplicity: 1 },
    ],
    outputs: [
      { place: 'L3', multiplicity: 1 },
    ]
  },
  {
    id: 'T3',
    priority: 1,
    inputs: [
      { place: 'L1', multiplicity: 1 },
    ],
    outputs: [
      { place: 'L3', multiplicity: 1 },
    ]
  },
]
