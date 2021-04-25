import { ArcType } from './definitions'

const regular: ArcType = {
  getNewTokensAmount: (multiplicity, tokens) => tokens - multiplicity,
  hasNecessaryTokens: (multiplicity, tokens) => tokens >= multiplicity
}

const inhibitor: ArcType = {
  getNewTokensAmount: (_, tokens) => tokens,
  hasNecessaryTokens: (multiplicity, tokens) => tokens < multiplicity
}

const reset: ArcType = {
  getNewTokensAmount: (_, __) => 0,
  hasNecessaryTokens: (multiplicity, tokens) => tokens >= multiplicity
}

const arcTypes = {
  regular,
  inhibitor,
  reset
}

export default arcTypes
