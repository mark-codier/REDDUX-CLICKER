const objOfRegax = {
  nickname: "^[a-zA-Z0-9]+$",
  password: "^[a-zA-Z0-9-]{4,16}$",
};
const validate = (type, value) => {
  return value.trim() === "" ? true : objOfRegax[type].test(value);
};
export default validate
