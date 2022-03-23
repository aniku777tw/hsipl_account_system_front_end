
const checkString = (user, setCheck, setHint) => {
  const letters = /^[0-9a-zA-Z]+$/;
  if (user === "") {
    setCheck(true);
    setHint("不能為空");
  } else if (letters.test(user) === false) {
    setCheck(true);
    setHint("非法字元");
  } else {
    setCheck(false);
    setHint("");
  }
};



const Validation = {
     checkString }

export default Validation;
