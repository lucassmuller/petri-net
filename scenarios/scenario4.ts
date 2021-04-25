// Scenario 4 - arc types
import { Places, Transitions } from '../definitions'

export const places: Places = {
  'L1': { tokens: 2 },
  'L2': { tokens: 2 },
  'L3': { tokens: 5 },
  'L4': { tokens: 0 },
}

export const transitions: Transitions = [
  {
    id: 'T1',
    inputs: [
      { place: 'L1', multiplicity: 1, type: 'regular' },
      { place: 'L2', multiplicity: 3, type: 'inhibitor' },
      { place: 'L3', multiplicity: 1, type: 'reset' },
    ],
    outputs: [
      { place: 'L4', multiplicity: 1 },
    ]
  },
]
