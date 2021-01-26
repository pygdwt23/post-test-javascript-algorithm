//FUNCTION CONDITIONAL
function ifElse() {
  let hariIni = prompt('Hari apa sekarang?');

  if (hariIni == "senin") {
    alert("berarti besok hari selasa!");
  }else if (hariIni == "selasa") {
    alert("berarti besok hari rabu!");
  }else if (hariIni == "rabu") {
    alert("berarti besok hari kamis!");
  }else if (hariIni == "kamis") {
    alert ("Berarti besok hari jumat!");
  }else if (hariIni == "jumat") {
    alert("Berarti besok hari sabtu!");
  }else if (hariIni == "sabtu") {
    alert ("Berarti besok hari minggu");
  }else if (hariIni == "minggu") {
    alert("Berarti besok hari senin!");
  }else{
    alert("Amnesia");
   
  }
  i++;
}
ifElse();


function switchCase () {
  let todayIs = prompt("What day is today?");

  switch (todayIs) {
    case "sunday":
      alert("tomorrow is monday");
      break;
    case "monday":
      alert("tomorrow is tuesday");
      break;
    case "tuesday":
      alert("tomorrow is wednesday");
      break;
    case "wednesday":
      alert("tomorrow is thursday");
      break;
    case "thursday":
      alert ("tomorrow is friday");
      break;
    case "friday":
      alert ("tomorrow is saturday");
      break;
    case "saturday":
      alert ("tomorrow is sunday");
      break;
    default:
      alert ("Alzhaimer");
  }
}
switchCase();
//FUNCTION LOOP