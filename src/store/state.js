let defaultCity = "上海"
try {
  defaultCity = localStorage.city
} catch (e) {}

 state: {
  city: defaultCity
}

export default {
  city: defaultCity
}
