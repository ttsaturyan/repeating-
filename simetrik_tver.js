let array = [];
let arr = [];
for (let i = 0; i < 100; i++) {
  array[i] = Math.round(Math.random() * 1000);
}
//  gumarumenq  andam  mich  stananq kent  tiv
//  gtnumenq  simetrik  tver@
let balance;
let sum = 0;
let sqr;
let i = 0;
let end = 0;
let multiplied = 0;
let simetrik;
array.forEach(sim => {
  simetrik = sim;
  if (sim !== 0) {
    while (sim > 0.9 || sim < -0.9) {
      balance = sim % 10;
      sim -= balance;
      sim /= 10;
      sum += balance;
      arr.push(balance);
      while (sum > 10) {
        balance = sum % 10;
        sum -= balance;
        sum /= 10;
        sum += balance;
      }
      i++;
    }
    while (i > 0) {
      arr.forEach(number => {
        --i;
        sqr = 10 ** i;
        multiplied = number * sqr;
        end += multiplied;
      });
    }
    arr = [];
    if (end > 10 && simetrik === end) {
      console.log("simetrik tver  en  " + end);
    }
    end = 0;
  }
});
console.log(sum);

//  krknvogh tver

let b = 0;
console.log(array);
array.forEach(value => {
  for (let index = 0; index <= array.length; index++) {
    if (value === array[index]) {
      b++;
      if (b == 2) {
        console.log("krknvum en " + array[index]);
      }
    }
  }
  b = 0;
  array = array.filter(function(item) {
    return item !== value;
  });
});
