const input = '001-Radith-5,002-Putra-92,003-Levy-100'

let arr = [];
let temp = '';

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '-') {
    temp += input[i]
  } else {
    arr.push(temp);
    temp = '';
    continue
  }
  if (i === input.length -1) {
    arr.push(temp);
  }
}

console.log(arr)
