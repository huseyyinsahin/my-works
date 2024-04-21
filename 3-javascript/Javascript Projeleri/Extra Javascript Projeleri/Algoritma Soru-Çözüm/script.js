//1.Soru: Verilen bir dizideki sayıların toplamını bulan bir JavaScript fonksiyonu yazın.
//const numbers = [3, 7, 11, 5, 9];

const sumArray = (array) => {
  let total = 0;
  for (let num of array) {
    total += num;
  }
  return total;
};

const numbers = [3, 7, 11, 5, 9];
console.log(sumArray(numbers));

//2.Soru: Verilen bir dizi içindeki en büyük ve en küçük sayı arasındaki farkı bulan bir JavaScript fonksiyonu yazın.
//const numbers2 = [4, 7, 2, 9, 1, 6, 5];

const hesaplama = (array) => {
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return max - min;
};

const numbers2 = [4, 7, 2, 9, 1, 6, 5];
console.log(hesaplama(numbers2));

//3.Soru: Bir dizi verildiğinde, bu dizinin elemanlarını tersine çeviren bir JavaScript fonksiyonu yazın.
//const numbers3 = [1, 2, 3, 4, 5];

const numbers3 = [1, 2, 3, 4, 5];

const tersineCevirme = (array) => {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
};
tersineCevirme(numbers3);
console.log(numbers3);
