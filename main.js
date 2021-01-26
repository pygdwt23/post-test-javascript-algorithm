// //FUNCTION CONDITIONAL
// function ifElse() {
//   let hariIni = prompt('Hari apa sekarang?');

//   if (hariIni == "senin") {
//     alert("berarti besok hari selasa!");
//   }else if (hariIni == "selasa") {
//     alert("berarti besok hari rabu!");
//   }else if (hariIni == "rabu") {
//     alert("berarti besok hari kamis!");
//   }else if (hariIni == "kamis") {
//     alert ("Berarti besok hari jumat!");
//   }else if (hariIni == "jumat") {
//     alert("Berarti besok hari sabtu!");
//   }else if (hariIni == "sabtu") {
//     alert ("Berarti besok hari minggu");
//   }else if (hariIni == "minggu") {
//     alert("Berarti besok hari senin!");
//   }else{
//     alert("Amnesia"); 
// }
// ifElse();


// function switchCase () {
//   let todayIs = prompt("What day is today?");

//   switch (todayIs) {
//     case "sunday":
//       alert("tomorrow is monday");
//       break;
//     case "monday":
//       alert("tomorrow is tuesday");
//       break;
//     case "tuesday":
//       alert("tomorrow is wednesday");
//       break;
//     case "wednesday":
//       alert("tomorrow is thursday");
//       break;
//     case "thursday":
//       alert ("tomorrow is friday");
//       break;
//     case "friday":
//       alert ("tomorrow is saturday");
//       break;
//     case "saturday":
//       alert ("tomorrow is sunday");
//       break;
//     default:
//       alert ("Alzhaimer");
//   }
// }
// switchCase();

// //FUNCTION LOOP
// function bilGenap(){
//   for (i = 0; i<15; i += 2){
//     console.log(i);
//   }
// }
// bilGenap()

// function bilGanjil(){
//   for (i = 1; i<12; i+=2){
//     console.log(i);
//   }
// }
// bilGanjil()

function cekPrima( n ) {
  var max = Math.sqrt(n);
  for( var i = 2;  i <= max;  i++ ) {
      if( n % i == 0 )
          return false;
  }
  return true;
}

for( var n = 2;  n < 18;  n++ ) {
      if( cekPrima(n) ) {
console.log( n );
}
}
cekPrima()