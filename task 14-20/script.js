// İstifadəçidən ədəd daxil etməsini istəyirik
let n = parseInt(prompt("Ədədi daxil edin:"));

// 14. Ədədin bölənlərini tapmaq
function bolenler(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

// 15. Ədədin bölənlərinin sayı
function bolenSayi(num) {
  return bolenler(num).length;
}

// 16. Ədədin bölənlərinin cəmi
function bolenCemi(num) {
  return bolenler(num).reduce((a, b) => a + b, 0);
}

// 17. Ədədin bölənlərinin hasili
function bolenHasili(num) {
  return bolenler(num).reduce((a, b) => a * b, 1);
}

// 18. Ədədin neçə rəqəmli olduğunu tapmaq
function reqemSayi(num) {
  return Math.abs(num).toString().length;
}

// 19. Ədədin rəqəmlərinin cəmi
function reqemCemi(num) {
  return Math.abs(num).toString().split("").reduce((a, b) => a + Number(b), 0);
}

// 20. Ədədin rəqəmlərinin hasili
function reqemHasili(num) {
  return Math.abs(num).toString().split("").reduce((a, b) => a * Number(b), 1);
}

// Nəticələri həm console.log, həm də ekrana çıxarırıq
console.log("14. Bölənlər:", bolenler(n));
console.log("15. Bölənlərin sayı:", bolenSayi(n));
console.log("16. Bölənlərin cəmi:", bolenCemi(n));
console.log("17. Bölənlərin hasili:", bolenHasili(n));
console.log("18. Ədədin rəqəm sayı:", reqemSayi(n));
console.log("19. Ədədin rəqəmlərinin cəmi:", reqemCemi(n));
console.log("20. Ədədin rəqəmlərinin hasili:", reqemHasili(n));

document.write("14. Bölənlər: " + bolenler(n) + "<br>");
document.write("15. Bölənlərin sayı: " + bolenSayi(n) + "<br>");
document.write("16. Bölənlərin cəmi: " + bolenCemi(n) + "<br>");
document.write("17. Bölənlərin hasili: " + bolenHasili(n) + "<br>");
document.write("18. Ədədin rəqəm sayı: " + reqemSayi(n) + "<br>");
document.write("19. Ədədin rəqəmlərinin cəmi: " + reqemCemi(n) + "<br>");
document.write("20. Ədədin rəqəmlərinin hasili: " + reqemHasili(n) + "<br>");
