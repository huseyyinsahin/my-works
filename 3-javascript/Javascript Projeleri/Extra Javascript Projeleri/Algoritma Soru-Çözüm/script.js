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

//4.Soru: Bir dizideki tüm negatif sayıları filtreleyen ve geri kalan sayıları içeren bir JavaScript fonksiyonu yazın.
//const numbers4 = [3, -1, 7, -5, 2, -8, 4];

const numbers4 = [3, -1, 7, -5, 2, -8, 4];
const negatifFiltreleme = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (0 <= array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
console.log(negatifFiltreleme(numbers4));

//5.Soru: Verilen bir dizideki en büyük sayıyı bulan bir JavaScript fonksiyonu yazın.
//const numbers5 = [3, 7, 2, 9, 1, 6, 5];

const numbers5 = [3, 7, 2, 9, 1, 6, 5];

const findMax = (array) => {
  let maxx = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxx) {
      maxx = array[i];
    }
  }
  return maxx;
};

console.log(findMax(numbers5));

//6.Soru: Bir string içindeki tüm harflerin sayısını hesaplayan bir JavaScript fonksiyonu yazın. Fonksiyon, büyük-küçük harf ayrımı yapmamalıdır.
//const str = "Merhaba Dunya";

const countLetters = (str) => {
  let count = 0;
  for (const char of str) {
    if (char !== " ") {
      count++;
    }
  }
  return count;
};

const str = "Merhaba Dunya";
console.log(countLetters(str));

//7.Soru: Verilen bir sayının faktöriyelini hesaplayan bir JavaScript fonksiyonu yazın. Faktöriyel, pozitif bir tam sayının kendisi ile 1 arasındaki tüm tam sayıların çarpımıdır.

const factorial = (number) => {
  let result = 1;
  for (let i = number; i > 1; i--) {
    result *= i;
  }
  return result;
};

console.log(factorial(10));

//8.Soru: Bir stringin tersini oluşturan bir JavaScript fonksiyonu yazın.

const reverseString = (str) => {
  const characters = str.split("");
  const reversedArr = characters.reverse();
  const arr = reversedArr.join("");
  return arr;
};

console.log(reverseString("Merhaba"));
console.log(reverseString("Selam"));

//9.Soru: Verilen bir string içindeki bir harfin kaç kez tekrarlandığını bulan bir JavaScript fonksiyonu yazın.

const count = (a, b) => {
  const array = a.split("");
  let say = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == b) {
      say++;
    }
  }
  return say;
};

console.log(count("Merhaba", "a"));

//10.Soru: Verilen bir sayının asal olup olmadığını kontrol eden bir JavaScript fonksiyonu yazın.

const prime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(prime(7));
console.log(prime(30));
console.log(prime(1));

//11.Soru: Verilen bir dizideki tüm çift sayıları toplayan bir JavaScript fonksiyonu yazın.
const dizi = [3, -1, 7, 5, 2, 8, 4];

const pozToplama = (array) => {
  let toplam = 0;
  for (let num of array) {
    if (num % 2 == 0) {
      toplam += num;
    }
  }
  return toplam;
};
console.log(pozToplama(dizi));

//12.Soru: Verilen bir string içindeki tüm rakamları toplayan bir JavaScript fonksiyonu yazın.
const yazi = "Merhaba123Dunya456";

const rakamToplama = (verilen) => {
  const newArray = verilen.split("");
  const intDizi = newArray.map((item) => parseInt(item));
  let toplam = 0;
  for (let item of intDizi) {
    if (Number.isInteger(item)) {
      toplam += item;
    }
  }

  return toplam;
};

console.log(rakamToplama(yazi));

//13.Soru: Bir dizideki sayıların çiftlerini bulup, bu çiftleri çıkartarak yeni bir dizi oluşturun. Örneğin, [1, 2, 3, 4, 5] dizisi verildiğinde, çıktı [1, 3, 5] olmalıdır.

const tekSayi = (dizi) => {
  const yeniDizi = [];
  for (let item of dizi) {
    if (item % 2 == 1) {
      yeniDizi.push(item);
    }
  }
  return yeniDizi;
};
const tekDizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(tekSayi(tekDizi));

//14.Soru: Bir dizi içindeki en büyük iki farklı sayının toplamını bulan bir JavaScript fonksiyonu yazın.

const findLargestSum = (dizi) => {
  let enBuyuk = dizi[0];
  let enBuyuk2 = dizi[0];
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] > enBuyuk) {
      enBuyuk2 = enBuyuk;
      enBuyuk = dizi[i];
    } else if (dizi[i] > enBuyuk2 && dizi[i] !== enBuyuk) {
      enBuyuk2 = dizi[i];
    }
  }
  return enBuyuk + enBuyuk2;
};

const dizia = [10, 20, 30, 40, 50];
console.log(findLargestSum(dizia));

//15.Soru: Bir dizideki tekrarlanan sayıları bulan bir JavaScript fonksiyonu yazın.

const findDuplicates = (dizi) => {
  const yeniDizi = [];

  for (let i = 0; i < dizi.length; i++) {
    for (let j = i + 1; j < dizi.length; j++) {
      if (dizi[i] === dizi[j] && !yeniDizi.includes(dizi[i])) {
        yeniDizi.push(dizi[i]);
      }
    }
  }

  return yeniDizi;
};

const dizib = [1, 2, 3, 4, 5, 2, 7, 8, 5, 8, 8];
console.log(findDuplicates(dizib));
