export const REPOSITORIES_COUNT = 5

export function getRepositoriesURL (count) {
  return `https://api.github.com/search/repositories?q=${count}in:name&per_page=${REPOSITORIES_COUNT}&sort=stars`
}

export function debounce (fn, debounceTime)  {
  let deb;
  return function () {
    clearTimeout(deb)
    deb = setTimeout(() => fn.apply(this, arguments), debounceTime)
  }
}
