export default {
  handleCity(state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}

  },
  // gallaryImg(state, e) {
  //   state.gallaryImg = e
  // }
}
