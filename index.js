import { readable, derived } from 'svelte/store'

const setupMq = (queryString) => (set) => {
  const query = window.matchMedia(queryString)
  const callback = (e) => set(e.matches)
  query.addListener(callback)
  callback(query)
  return () => query.removeListener(callback)
}

const defaultQueries = {
  desktop: 'screen and (min-width: 769px)',
  mobile: 'screen and (max-width: 768px)'
}

const makeMediaStoreInstance = (queries) => {
  const qs = Object.entries(queries).reduce((acc, [mediaName, queryString]) => (acc[mediaName] = readable(false, setupMq(queryString)), acc), {})
  return derived(Object.values(qs), ($queryStores) => $queryStores.reduce((acc, q, i) => (acc[Object.keys(qs)[i]] = q, acc), {}))
}

export let media
export const setup = (queries = defaultQueries) => { media = makeMediaStoreInstance(queries) }
export const createMedia = (queries = defaultQueries) => ({ media: makeMediaStoreInstance(queries) })
