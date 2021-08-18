import onChange from 'on-change'
import View from './view'
import { getRepositoriesURL, debounce } from './utils'

export default () => {
  const view = new View()
  view.init()

  const state = onChange({
    results: [],
    searchQuery: '',
    preview: null
  }, (path, value, previousValue) => {
    switch (path) {
      case 'results':
        view.renderResults(value)
        break;
      case 'searchQuery':
        getRepositoriesDebounce()
        break;
      case 'preview':
        value ? openRepo(value) : view.hidePreview()
        break;
      default:
        throw new Error(`Uncaught mutation type. Path:${path}, value:${value}`)
    }
  })

  async function getRepositories () {
    console.log(state.searchQuery)
    if (state.searchQuery.length === 0) {
      view.hideResults()
      return
    }
    const response = await fetch(getRepositoriesURL(state.searchQuery))
    const repositories = await response.json()
    state.results = repositories.items
  }

  const getRepositoriesDebounce = debounce(getRepositories, 300)

  function openRepo(repositoryName) {
    const repoData = state.results.find(repository => repository.name === repositoryName)
    view.renderPreview(repoData)
  }

  view.$search.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim()
  })

  view.resultsElements.forEach(element => {
    element.addEventListener('click', (e) => {
      state.preview = e.target.textContent
    })
  })

  view.$previewCloseBtn.addEventListener('click', () => {
    state.preview = null
  })
}
