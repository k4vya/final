var coronaArray = [];
// State, num cases, num death, overall population
coronaArray.push(["New York", 2495, 16, 8.6]);
coronaArray.push(["Washington", 1014, 55, 7.5]);
coronaArray.push(["California", 751, 13, 39]);
coronaArray.push(["Florida", 314, 7, 21]);
coronaArray.push(["New Jersey", 267, 3, 8.9]);

var el = document.getElementById("dataset");

function hitEvent() {
  buildTableBody();
}

function buildTableBody() {
  coronaArray.forEach(buildRows);
}

function buildRows(value, index) {
  if (index == 0) {
    el.innerHTML = rowBuilder(value);
  } else {
    el.innerHTML = el.innerHTML + rowBuilder(value);
  }
}

function rowBuilder(x) {
  console.log(x);
  var s = "<tr><td>{1}</td><td>{2}</td><td>{3}</td><td>{4}</td></tr>";
  s = s.replace("{1}", x[0]);
  s = s.replace("{2}", x[1]);
  s = s.replace("{3}", x[2]);
  s = s.replace("{4}", x[3]);
  //s = s.replace("{5}", x[4]);
  return s;
}