module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;

  let temp = [];
  
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][1] && temp[temp.length - 1] === bracketsConfig[j][0]) temp.pop();
        else if (str[i] === bracketsConfig[j][0]) temp.push(str[i]);
    }
  }

  if (temp.length === 0) return true;
  return false;
};