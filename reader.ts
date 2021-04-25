import { Places, Transitions } from './definitions'
import { Parser } from 'xml2js'
import { readFileSync } from 'fs'

const parser = new Parser();

export const readPNML = (path: string) => {
  const xmlContent = readFileSync(path, 'utf8')

  const places: Places = {}
  const transitions: Transitions = []

  parser.parseString(xmlContent, (error: Error, result: any) => {
    if (error) {
      console.error('An error occurred while reading the PNML file', error)
      return
    }

    const subnet = result?.document?.subnet?.[0]

    subnet?.place?.forEach(({ id, tokens }) => {
      places[id[0]] = { tokens: parseInt(tokens[0]) }
    })

    subnet?.transition?.map(({ id }) => ({
      id: id[0],
      inputs: [],
      outputs: []
    })).forEach(t => transitions.push(t))

    subnet?.arc?.forEach(arc => {
      const sourceId = arc.sourceId[0]
      const destinationId = arc.destinationId[0]
      const findTransition = (id: string) => transitions.find(t => t.id === id)

      if (places[sourceId]) { // Indo de lugar para transação
        findTransition(destinationId)?.inputs.push({
          place: sourceId,
          multiplicity: parseInt(arc.multiplicity[0]),
          type: arc.type[0]
        })
      } else { // Indo de transação para lugar
        findTransition(sourceId)?.outputs.push({
          place: destinationId,
          multiplicity: parseInt(arc.multiplicity[0])
        })
      }
    })
  })

  return { places, transitions }
}
