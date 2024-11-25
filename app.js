class Utility {
    static isPrime(number) {
      if (number <= 1) return false;
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    }
  
    static generatePassword(length = 8) {
      const chars = "abcdefghijklmnopqrstuvwxyzABC";
      let password = "";
      for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return password;
    }
  
  
    static factorial(n) {
      if (n === 0 || n === 1) return 1;
      return n * this.factorial(n - 1);
    }
  
    static celsiusToFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
    }
  
   
    static currentDateTime() {
      return new Date().toLocaleString();
    }
  
  
    static isPalindrome(str) {
      return str === str.split("").reverse().join("");
    }
  
    static gcd(a, b) {
      while (b) {
        [a, b] = [b, a % b];
      }
      return a;
    }
  
  
    static countVowels(str) {
      const vowels = "aeiouAEIOU";
      return Array.from(str).filter((char) => vowels.includes(char)).length;
    }
  
    static circleArea(radius) {
      return Math.PI * Math.pow(radius, 2);
    }
  
  
    static reverseString(str) {
      return str.split("").reverse().join("");
    }
  }
          

  class Hayvon {
    constructor(nomi, yoshi) {
      this.nomi = nomi;
      this.yoshi = yoshi;
    }
  
  
    tovushChiqar() {
      return `${this.nomi} tovush chiqarmoqda!`;
    }
  
  
    maLumot() {
      return `${this.nomi} ${this.yoshi} yoshda.`;
    }
  }
  
  
  class Quyon extends Hayvon {
    constructor(nomi, yoshi, tusi) {
      super(nomi, yoshi); 
      this.tusi = tusi; 
    }
  
  
    sakrash() {
      return `${this.nomi} sakramoqda!`;
    }
  
  
    maLumot() {
      return `${super.maLumot()} Uning tusi ${this.tusi}.`;
    }
  }
  
  
  class Kuchuk extends Hayvon {
    constructor(nomi, yoshi, turi) {
      super(nomi, yoshi); 
      this.turi = turi; 
    }
  
    qoRiqlash() {
      return `${this.nomi} uyni qo‘riqlayapti!`;
    }
  
  
    maLumot() {
      return `${super.maLumot()} U ${this.turi} turiga mansub.`;
    }
  }
  
  const quyon = new Quyon("Chuchuk", 2, "oq");
  console.log(quyon.tovushChiqar()); 
  console.log(quyon.sakrash());
  console.log(quyon.maLumot());
  
  const kuchuk = new Kuchuk("Bobik", 3, "Ovcharka");
  console.log(kuchuk.tovushChiqar()); 
  console.log(kuchuk.qoRiqlash());
  console.log(kuchuk.maLumot()); 