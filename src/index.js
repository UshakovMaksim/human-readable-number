module.exports = function toReadable (number) {

  if (number == 0) {
    return 'zero';
  }

  let res = '';
  const numStr = number.toString();

  if (numStr.length === 3) {
    res += ones(numStr[0]) + ' hundred';
    res += tens(numStr.substr(1,2));
  }
  else {
    res += tens(numStr);
  }
  
  return res.trim();
}

const ones = val => (['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'])[+val];

const tens = val => {
  if (+val < 20) {
    return ones(val);
  }
  return (['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'])[+val[0]] + ones(val[1]);
}
