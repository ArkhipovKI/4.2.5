import { REPOSITORIES_COUNT } from './utils'

const generateRepoItem = () => {
  const el = document.createElement('li')
  el.className = 'autocomplete-item'
  return el
}

export default class {
  init () {
    this.$search = document.getElementById('mySearch')
    this.$list = document.querySelector('.autocomplete-list')
    this.resultsElements = [...new Array(REPOSITORIES_COUNT)].map(() => generateRepoItem())
    this.$list.append(...this.resultsElements)
    this.$preview = document.querySelector('.repo-preview')
    this.$previewCloseBtn = this.$preview.querySelector('.repo-preview--btn')
    this.$previewInfo = this.$preview.querySelector('.repo-preview--content')
  }

  renderResults (results) {
    this.hidePreview()
    results.forEach((repo, idx) => {
      this.resultsElements[idx].textContent = repo.name
    })
    this.showResults()
  }

  renderPreview (repositoryData) {
    const { name, owner, stargazers_count } = repositoryData
    this.hideResults()
    this.$previewInfo.innerHTML = `Name: ${name}<br>Owner: ${owner.login}<br>Stars: ${stargazers_count}`
    this.showPreview()
  }

  hideResults () {
    this.$list.style.display = 'none'
  }

  showResults () {
    this.$list.style.display = ''
  }

  hidePreview () {
    this.$preview.style.display = 'none'
  }

  showPreview () {
    this.$preview.style.display = ''
  }
}
