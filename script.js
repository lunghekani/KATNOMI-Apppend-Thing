function compare() {
  a = document.getElementById("actual").value;
  b = document.getElementById("expected").value;

  arrActual = a.split("\n");
  arrExpected = b.split("\n");

  if (arrActual.length !== arrExpected.length) {
    console.log("not equal"); // show that the line amount is different
  } else {
    for (i = 0; i < arrExpected.length; i++) {
      if (arrActual[i] == arrExpected[i]) {
        var list = document
        .getElementById("differences");

        var entry = document.createElement("li");
// echo <li> "ON line:".i.": ". </li>
        entry.appendChild(
          document.createTextNode(
            "ON line " +
              i +
              ": " +
              arrActual[i] +
              " is equal to " +
              arrExpected[i]
          )
        );
        list.appendChild(entry);
      } else {
        var list = document
        .getElementById("differences");

        var entry = document.createElement("li");
// echo <li> "ON line:".i.": ". </li>
        entry.appendChild(
          document.createTextNode(
            "ON line " +
              i +
              ": " +
              arrActual[i] +
              " is NOT equal to " +
              arrExpected[i]
          )
        );

        list.appendChild(entry);
      }
    }
  }
}
