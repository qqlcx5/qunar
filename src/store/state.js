let defaultCity = "上海"
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

state: {
  city: defaultCity
}

export default {
  city: defaultCity
}
