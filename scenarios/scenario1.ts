// Scenario 1 - https://i.imgur.com/YuwQeap.png
import { Places, Transitions } from '../definitions'

export const places: Places = {
  'L1': { tokens: 1 },
  'L2': { tokens: 2 },
  'L3': { tokens: 0 },
  'L4': { tokens: 1 },
  'L5': { tokens: 0 },
}

export const transitions: Transitions = [
  {
    id: 'T1',
    inputs: [
      { place: 'L1', multiplicity: 1 },
      { place: 'L2', multiplicity: 2 },
    ],
    outputs: [
      { place: 'L2', multiplicity: 2 },
      { place: 'L3', multiplicity: 1 },
    ]
  },
  {
    id: 'T2',
    inputs: [
      { place: 'L3', multiplicity: 1 },
      { place: 'L4', multiplicity: 1 },
    ],
    outputs: [
      { place: 'L5', multiplicity: 1 },
    ]
  },
]
