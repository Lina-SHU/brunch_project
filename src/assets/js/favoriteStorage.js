export default {
  save (favorite) {
    const faovrites = JSON.stringify(favorite)
    localStorage.setItem('brunchFavorite', faovrites)
  },
  get () {
    return JSON.parse(localStorage.getItem('brunchFavorite'))
  }
}
