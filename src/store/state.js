let defaultCity = "上海";
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {
  console.log(e);
}

{
  defaultCity;
}

export default {
  city: defaultCity
};
