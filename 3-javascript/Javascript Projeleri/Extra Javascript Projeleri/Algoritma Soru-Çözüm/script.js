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

//16.Soru: Verilen bir dizideki tüm elemanların toplamını ve ortalamasını hesaplayan bir JavaScript fonksiyonu yazın.

const calculateSumAndAverage = (dizi) => {
  let a = 0;
  let b = 0;
  for (let i = 0; i < dizi.length; i++) {
    a += dizi[i];
  }
  b = a / dizi.length;

  return { toplam: a, ortalama: b };
};

const dizic = [1, 2, 3, 4, 5, 6, 7];
console.log(calculateSumAndAverage(dizic));

//17.Soru: Bir string içindeki en uzun kelimeyi bulan bir JavaScript fonksiyonu yazın.

const enUzunKelime = (dizi) => {
  const kelimeler = dizi.split(" ");
  let enUzun = "";
  for (let i = 0; i < kelimeler.length; i++) {
    if (kelimeler[i].length > enUzun.length) {
      enUzun = kelimeler[i];
    }
  }
  return enUzun;
};

console.log(enUzunKelime("Merhaba dünya! selamlarr  "));

//18.Soru: Verilen bir stringin içindeki tüm harflerin frekansını hesaplayan bir JavaScript fonksiyonu yazın.

const calculateCharacterFrequency = (metin) => {
  const frekans = {};

  for (let i = 0; i < metin.length; i++) {
    const karakter = metin[i];
    if (frekans[karakter]) {
      frekans[karakter]++;
    } else {
      frekans[karakter] = 1;
    }
  }
  return frekans;
};

console.log(calculateCharacterFrequency("Merhaba dünyaa!"));

//19.Soru: Verilen bir dizideki tek sayıların toplamını ve çift sayıların toplamını hesaplayan bir JavaScript fonksiyonu yazın.

const tekCift = (dizi) => {
  let a = 0;
  let b = 0;
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] % 2 === 0) {
      a += dizi[i];
    }
    if (dizi[i] % 2 === 1) {
      b += dizi[i];
    }
  }
  return { Tek: b, Çift: a };
};

console.log(tekCift([1, 2, 3, 4, 5, 6, 7]));

//20.Soru: Verilen bir dizideki en büyük üçüncü sayıyı bulan bir JavaScript fonksiyonu yazın.

const findThirdLargest = (dizi) => {
  if (dizi.length < 3) {
    return "Dizi en az 3 eleman içermelidir.";
  }

  dizi.sort((a, b) => b - a);

  return dizi[2];
};

console.log(findThirdLargest([50, 20, 100, 600, 50, 200, 300]));

//21.Soru: Verilen bir dizideki ardışık sayıları bulan bir JavaScript fonksiyonu yazın. Ardışık sayılar, birbirini takip eden sayılar olarak tanımlanır.

const ardisikSayilar = (dizi) => {
  dizi.sort((a, b) => a - b);

  let yeniDizi = [];
  let geciciDizi = [dizi[0]];

  for (let i = 1; i < dizi.length; i++) {
    if (dizi[i] === dizi[i - 1] + 1) {
      geciciDizi.push(dizi[i]);
    } else {
      if (geciciDizi.length > 1) {
        yeniDizi.push(geciciDizi);
      }
      geciciDizi = [dizi[i]];
    }
  }
  return yeniDizi;
};

console.log(ardisikSayilar([1, 2, 3, 5, 6, 7, 9]));

//22.Soru: Verilen bir dizideki sayıları, o sayının karesiyle değiştiren bir JavaScript fonksiyonu yazın.

const sayininKaresi = (dizi) => {
  const yeniDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    karesi = dizi[i] ** 2;
    yeniDizi.push(karesi);
  }
  return yeniDizi;
};

console.log(sayininKaresi([1, 2, 3, 4, 5, 100]));

//23.Soru: Verilen bir stringin bir anagram olup olmadığını kontrol eden bir JavaScript fonksiyonu yazın. (Anagramlar, aynı harflerin farklı bir sırayla kullanıldığı kelimeler veya cümlelerdir.)

const anagram = (dizi1, dizi2) => {
  const yeniDizi1 = dizi1.split("").sort();
  const yeniDizi2 = dizi2.split("").sort();
  if (yeniDizi1.length !== yeniDizi2.length) {
    return false;
  }
  for (let i = 0; i < yeniDizi1.length; i++) {
    if (yeniDizi1[i] === yeniDizi2[i]) {
      a = true;
    } else {
      a = false;
    }
  }
  return a;
};

console.log(anagram("listne", "silent"));
console.log(anagram("lesma", "selama"));

//24.Soru: Verilen bir sayı dizisinde, herhangi bir iki sayının toplamı, verilen bir hedef sayıya eşit olacak şekilde, dizinin içindeki sayıları bulun. Eğer böyle bir ikili çift bulunamazsa, boş bir dizi döndürün.

const esitSayi = (dizi, sayi) => {
  const yeniDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    for (let j = i + 1; j < dizi.length; j++) {
      if (sayi === dizi[i] + dizi[j]) {
        yeniDizi.push(dizi[i], dizi[j]);
      }
    }
  }
  return yeniDizi;
};

console.log(esitSayi([1, 2, 3, 4, 5], 9));
console.log(esitSayi([1, 2, 3, 4, 5], 10));

//25.Soru: Bir string içindeki en sık tekrarlanan karakteri bulan bir JavaScript fonksiyonu yazın. Eğer birden fazla karakter aynı sıklıkta tekrarlanıyorsa, ilk olarak karşılaşılan karakteri döndürün.

const enSıkTekrar = (str) => {
  const karakterFrekans = {};

  for (let karakter of str) {
    if (karakterFrekans[karakter]) {
      karakterFrekans[karakter]++;
    } else {
      karakterFrekans[karakter] = 1;
    }
  }

  let enSıkKarakter = "";
  let enSıkTekrarSayısı = 0;

  for (let karakter in karakterFrekans) {
    if (karakterFrekans[karakter] > enSıkTekrarSayısı) {
      enSıkKarakter = karakter;
      enSıkTekrarSayısı = karakterFrekans[karakter];
    }
  }

  return enSıkKarakter;
};

console.log(enSıkTekrar("helllooo"));
console.log(enSıkTekrar("banana"));
console.log(enSıkTekrar("merhaba"));

//26.Soru: Verilen bir dizideki tüm elemanların faktöriyellerini hesaplayan bir JavaScript fonksiyonu nasıl yazılır?

const diziFaktoriyel = (dizi) => {
  const yeniDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    let factoriyel = 1;
    for (let j = 1; j <= dizi[i]; j++) {
      factoriyel *= j;
    }
    yeniDizi.push(factoriyel);
  }
  return yeniDizi;
};

console.log(diziFaktoriyel([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//27.Soru: Verilen bir stringin palindrom olup olmadığını kontrol eden bir JavaScript fonksiyonu yazın. Palindrom, tersten okunduğunda da aynı olan bir stringtir. Örneğin, "radar" bir palindromdur.

const palindrom = (str) => {
  const yeniStr = str.split("");

  for (let i = 0; i < Math.floor(yeniStr.length / 2); i++) {
    if (yeniStr[i] !== yeniStr[yeniStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(palindrom("radar"));
console.log(palindrom("hello"));

//28.Soru: Verilen bir sayı dizisi içindeki en büyük iki farklı sayının farkını bulan bir JavaScript fonksiyonu yazın. Örneğin, [1, 5, 9, 2, 10] dizisi verildiğinde, en büyük iki farklı sayı 10 ve 9'dur, bu yüzden farkları 1'dir.

const enBuyukIkıFark = (dizi) => {
  if (dizi.length < 2) {
    return "Dizi en az iki eleman içermelidir.";
  }

  let enBuyuk = -Infinity;
  let ikinciEnBuyuk = -Infinity;

  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] > enBuyuk) {
      ikinciEnBuyuk = enBuyuk;
      enBuyuk = dizi[i];
    } else if (dizi[i] > ikinciEnBuyuk && dizi[i] !== enBuyuk) {
      ikinciEnBuyuk = dizi[i];
    }
  }

  return enBuyuk - ikinciEnBuyuk;
};

console.log(enBuyukIkıFark([1, 5, 9, 2, 10]));

//29.Soru: Bir dizi verildiğinde, dizideki her bir sayıyı ikiyle çarparak yeni bir dizi oluşturan ve bu yeni diziyi döndüren bir JavaScript fonksiyonu yazın.

const carpıIleYeniDiziOlustur = (dizi) => {
  yeniDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    yeniDizi.push(dizi[i] * 2);
  }
  return yeniDizi;
};

console.log(carpıIleYeniDiziOlustur([1, 2, 3, 4, 5, 500]));

//30.Soru: Verilen bir cümledeki her kelimenin baş harfini büyük harfe dönüştüren bir JavaScript fonksiyonu yazın.

function buyukHarfeDonustur(cumle) {
  let kelimeler = cumle.split(" ");
  let yeniCumle = "";

  for (let i = 0; i < kelimeler.length; i++) {
    let kelime = kelimeler[i];
    let ilkHarf = kelime.charAt(0).toUpperCase();
    let digerHarfler = kelime.slice(1);
    yeniCumle += ilkHarf + digerHarfler + " ";
  }

  return yeniCumle.trim();
}

let ornekCumle = "javascript fonksiyonu yazın";
let yeniCumle = buyukHarfeDonustur(ornekCumle);
console.log(yeniCumle);

//31.Soru: Verilen bir dizide (array), dizinin her elemanı kendisinden bir önceki elemanın karesi mi kontrol eden bir JavaScript fonksiyonu yazabilir misiniz?

function herElemanKaresiMi(dizi) {
  if (dizi.length < 2) {
    return false;
  }
  for (let i = 1; i < dizi.length; i++) {
    if (dizi[i] !== Math.pow(dizi[i - 1], 2)) {
      return false;
    }
  }
  return true;
}

const dizi1 = [4, 16, 256, 65536];
console.log(herElemanKaresiMi(dizi1));

//32.Soru: Verilen bir dizide (array), ardışık olan üç sayının toplamı en büyük olan alt diziyi bulan bir JavaScript fonksiyonu yazmanı istiyorum. Fonksiyon, bu üç sayıyı içeren alt diziyi döndürmelidir.

const enBuyukUcArdisik = (dizi) => {
  const yeniDizi = [];
  let enBuyuk = 0;
  let enBuyukIndex = 0;
  for (let i = 0; i < dizi.length - 2; i++) {
    const altDizi = dizi.slice(i, i + 3);
    yeniDizi.push(altDizi.slice());
    const toplam = altDizi.reduce((a, b) => a + b, 0);
    if (toplam > enBuyuk) {
      enBuyuk = toplam;
      enBuyukIndex = i;
    }
  }
  return yeniDizi[enBuyukIndex];
};

const arr = [4, 2, 1, 5, 0, 6, 3];
console.log(enBuyukUcArdisik(arr));

//33.Soru: Verilen bir string içindeki tüm sesli harfleri kaldıran ve kalan string'i döndüren bir JavaScript fonksiyonu yazın. Sesli harfler: 'a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü'. Örneğin, "merhaba dünya" string'i için fonksiyon şu çıktıyı vermelidir: "mrhb dny".

const sesliKaldıran = (str) => {
  const ayır = str.split("");
  const sesli = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];
  const yeniDizi = [];
  for (let i = 0; i < ayır.length; i++) {
    if (!sesli.includes(ayır[i])) {
      yeniDizi.push(ayır[i]);
    }
  }
  return yeniDizi.join("");
};

console.log(sesliKaldıran("Merhaba Dünya"));

//34.Soru: Dizi içerisindeki kendisi hariç diğer sayılarla çarpılan sayıların çıktısı veren bir fonksiyon yazınız.

const kendisiHaricCarpim = (dizi) => {
  let yeniDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    let a = 1;
    for (let j = 0; j < dizi.length; j++) {
      if (i !== j) {
        a *= dizi[j];
      }
    }
    yeniDizi.push(a);
  }
  return yeniDizi;
};

console.log(kendisiHaricCarpim([1, 2, 3, 4]));

//35.Soru: Verilen bir metinde (string), metindeki her karakterin ASCII değerini toplayarak bir toplam değeri döndüren bir JavaScript fonksiyonu yazın.

const degerDöndürme = (str) => {
  const ayrıDizi = str.split("");
  let a = 0;
  for (let i = 0; i < ayrıDizi.length; i++) {
    let b = ayrıDizi[i];
    let ascii = b.charCodeAt(0);
    a += ascii;
  }
  return a;
};

console.log(degerDöndürme("hello world"));

//36.Soru: Verilen bir tamsayı dizisinde (array), tüm negatif sayıları dizinin başına taşıyan ve sıfır hariç tüm pozitif sayıları dizinin sonuna taşıyan bir JavaScript fonksiyonu yazın. Dizideki sayıların sırasını değiştirmeden bu işlemi gerçekleştirmeniz gerekmektedir.

const düzenleyici = (dizi) => {
  const negatifDizi = [];
  const pozitifDizi = [];
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] < 0) {
      negatifDizi.push(dizi[i]);
    } else {
      pozitifDizi.push(dizi[i]);
    }
  }
  let hepsi = negatifDizi.concat(pozitifDizi);
  return hepsi;
};

console.log(düzenleyici([1, -2, 3, 0, -4, 5, -6]));

//37.Soru: Verilen bir tamsayı dizisinde (array), "çiftlet" olarak adlandırdığımız bir alt diziyi bulun. Çiftlet, dizi içindeki her elemanın kendisinden bir önceki elemandan daha büyük olduğu bir alt dizi demektir. Bu durumda, her elemanın kendisinden önceki elemandan daha büyük olduğu bir alt dizi bulunamazsa, çiftlet yoktur.

const oncekiEleman = (dizi) => {
  const ciftLet = [];
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] < dizi[i + 1]) {
      ciftLet.push(dizi[i + 1]);
    }
  }
  return ciftLet;
};

console.log(oncekiEleman([3, 8, 1, 5, 2, 7, 4, 6]));

//38.Soru: Verilen bir tam sayı dizisinde (pozitif ve negatif), dizinin ardışık alt dizilerinden en büyük toplamı bulan bir JavaScript fonksiyonu yazın. Örneğin, [-2, 1, -3, 4, -1, 2, 1, -5, 4] dizisi verildiğinde, ardışık alt dizilerden en büyük toplam 6'dır (dizinin [4, -1, 2, 1] alt dizisi). Bu işlevi yazabilir misiniz?

function maksAltDiziToplami(arr) {
  let simdikiBitis = arr[0];
  let suAnaKadarMaksimum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    simdikiBitis = Math.max(arr[i], simdikiBitis + arr[i]);
    suAnaKadarMaksimum = Math.max(suAnaKadarMaksimum, simdikiBitis);
  }

  return suAnaKadarMaksimum;
}

console.log(maksAltDiziToplami([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//39.Soru: Bir dizi, 1'den N'ye kadar olan sayıları içeriyor, ancak bu dizide bir sayı eksik. Eksik olan sayıyı bulmak için bir fonksiyon yazmanız gerekiyor.Dizi, 1'den N'ye kadar olan sayılardan oluşur (her sayı yalnızca bir kez geçer).Dizi karışık bir sırada olabilir.

function kayipSayiyiBul(arr) {
  let enBuyukSayi = Math.max(...arr);
  let a = 0;
  const diziToplam = arr.reduce((a, b) => a + b, 0);
  for (let i = enBuyukSayi; i > 0; i--) {
    a += i;
  }
  return a - diziToplam;
}

console.log(kayipSayiyiBul([1, 2, 4, 6, 3, 7, 8]));
console.log(kayipSayiyiBul([1, 2, 4, 6, 3, 7, 8, 5, 10]));

//40.Soru: Verilen bir string içindeki açma ve kapama parantezlerinin eşleşip eşleşmediğini kontrol eden bir fonksiyon yazın.String içinde yalnızca açma [ ve kapama ] parantezleri bulunabilir.Parantezlerin sıralaması doğru olmalıdır (örneğin, [[]] geçerlidir, ancak [[[]] veya ][ geçerli değildir).

function eslesenParantezleriKontrolEt(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "[") {
      stack.push(char);
    } else if (char === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(eslesenParantezleriKontrolEt("[][][][]"));
console.log(eslesenParantezleriKontrolEt("[[][][[]]]"));
console.log(eslesenParantezleriKontrolEt("[[]][][[]]"));
console.log(eslesenParantezleriKontrolEt("[[][][][]"));
console.log(eslesenParantezleriKontrolEt("][][][]["));

//41.Soru: Verilen bir metin içindeki en sık görülen kelimeyi bulan bir fonksiyon yazın. Metin içindeki kelimeler sadece küçük harflerle ve boşluklarla ayrılmıştır.Metin içinde yalnızca küçük harfler ve boşluklar bulunur.Kelimeler arasında yalnızca birer boşluk bulunur ve metin boşluk ile başlamaz veya bitmez.

function enSikGorulenKelime(metin) {
  const ayir = metin.split(" ");
  const kelimeler = {};
  for (let i = 0; i < ayir.length; i++) {
    const karakter = ayir[i];
    if (kelimeler[karakter]) {
      kelimeler[karakter]++;
    } else {
      kelimeler[karakter] = 1;
    }
  }
  let maxKey = null;
  let maxValue = -Infinity;

  for (let key in kelimeler) {
    if (kelimeler[key] > maxValue) {
      maxValue = kelimeler[key];
      maxKey = key;
    }
  }
  return maxKey;
}
console.log(enSikGorulenKelime("a a a b b c c c c d d d"));
console.log(enSikGorulenKelime("kırmızı mavi kırmızı yeşil mavi mavi"));

//42.Soru: Verilen bir ikili dizi (binary array) içindeki en uzun ardışık 1'ler dizisinin uzunluğunu bulan bir fonksiyon yazın.Dizi sadece 0 ve 1 değerlerinden oluşur.Dizi en az bir eleman içerir.

function enUzunArdisikBirlerDizisi(arr) {
  let sayac = 0;
  const dizi = [];
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      sayac++;
    } else if (arr[i] === 0) {
      dizi.push(sayac);
      sayac = 0;
    }
  }
  if (sayac !== 0) {
    dizi.push(sayac);
  }
  return Math.max(...dizi);
}

console.log(enUzunArdisikBirlerDizisi([1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1]));

//43.Soru: Verilen bir tam sayı dizisi içinde toplamları sıfıra eşit olan tüm üçlüleri (üç elemanlı grupları) bulun. Çözüm kümelerindeki elemanlar artan sıralı olmalıdır. Çözüm kümeleri herhangi bir sırada döndürülebilir.

function ucElemanliToplam(nums) {
  const yeniDizi = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let a = j + 1; a < nums.length; a++) {
        if (nums[i] + nums[j] + nums[a] === 0) {
          yeniDizi.push([nums[i], nums[j], nums[a]]);
        }
      }
    }
  }
  return yeniDizi;
}

console.log(ucElemanliToplam([-1, 0, 1, 2, -1, -4]));
console.log(ucElemanliToplam([0, 0, 0]));

//44.Soru: İki dizinin (array) kesişimini bulan bir algoritma yazın. Kesişim, her iki dizide de bulunan ortak elemanlardan oluşan bir dizi olmalıdır.

const kesisim = (arr1, arr2) => {
  const yeniDizi = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !yeniDizi.includes(arr1[i])) {
        yeniDizi.push(arr1[i]);
      }
    }
  }
  return yeniDizi;
};

console.log(kesisim([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(kesisim([4, 9, 5, 8, 1], [9, 4, 9, 8, 4, 8, 8, 9, 4, 1]));

//45.Soru: Verilen bir dizi içinde birden fazla kez bulunan elemanları bulan bir algoritma yazın. Sonuç dizisi, tekrar eden her elemanı yalnızca bir kez içermelidir.

const tekrarEdenElemanlar = (arr) => {
  const yeniDizi = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        yeniDizi.push(arr[i]);
      }
    }
  }
  return yeniDizi;
};

console.log(tekrarEdenElemanlar([9, 4, 9, 8, 4]));
console.log(tekrarEdenElemanlar([1, 1, 2, 2, 3, 3, 4, 4, 5]));

//46.Soru: Verilen bir string içindeki benzersiz karakterleri (yalnızca bir kez görünen karakterler) bulan bir algoritma yazın ve bunları bir string olarak döndürün. Sonuç stringi, benzersiz karakterleri bulundukları ilk sıraya göre içermelidir.

function benzersizKarakterler(str) {
  const karakterSayisi = {};
  const benzersiz = [];

  for (let char of str) {
    if (karakterSayisi[char]) {
      karakterSayisi[char]++;
    } else {
      karakterSayisi[char] = 1;
    }
  }

  for (let char of str) {
    if (karakterSayisi[char] === 1) {
      benzersiz.push(char);
    }
  }
  return benzersiz.join("");
}

console.log(benzersizKarakterler("programming"));
console.log(benzersizKarakterler("swiss"));

//47.Soru: Bir sayı, ardışık pozitif tam sayıların toplamı olarak ifade edilebiliyorsa, bu sayı "üçgen sayı" olarak adlandırılır. Örneğin, 6 bir üçgen sayıdır çünkü 1 + 2 + 3 = 6.

function ucgenSayiMi(int) {
  let toplama = 0;
  for (let i = 1; i < int; i++) {
    toplama += i;
    if (toplama === int) {
      return true;
    }
  }
  return false;
}

console.log(ucgenSayiMi(6));
console.log(ucgenSayiMi(10));
console.log(ucgenSayiMi(14));

//48.Soru: Verilen iki pozitif tam sayının en büyük ortak bölenini (EBOB) bulan bir fonksiyon yazın.

function ebobBul(sayi1, sayi2) {
  let bolenDizi = [];
  for (let i = 1; i <= sayi2; i++) {
    if (sayi1 % i === 0 && sayi2 % i === 0) {
      bolenDizi.push(i);
    }
  }
  let maxSayi = Math.max(...bolenDizi);
  return maxSayi;
}

console.log(ebobBul(12, 18));
console.log(ebobBul(36, 96));
