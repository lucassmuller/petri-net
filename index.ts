import PetriNet from './petrinet'
import { readPNML } from './reader'
import { places, transitions } from './scenarios/scenario'

//const { places, transitions } = readPNML('data.pnml')

console.log('Initiatializing PetriNet...')
console.table(places)
console.table(transitions)

const petriNet = new PetriNet(places, transitions)

let keep = false

petriNet.onCycleStart((cycle, activeTransitions) => {
  console.log('---')
  console.log('Executing cycle', cycle)

  if (activeTransitions.length > 0) {
    console.log('Active transitions:', activeTransitions.map(t => t.id).join(', '))
  } else {
    console.log('No active transitions')
  }
})

petriNet.onTransitionExecuted(({ id }) => {
  console.log('Transition', id, 'executed')
  console.table(places)
  keep = true
})

petriNet.onCycleEnd((cycle) => {
  console.log('Cycle', cycle, 'finished')
})

do {
  keep = false
  petriNet.executeCycle()
} while (keep)

console.log('PetriNet finished!')
