function calculateArea() {
    let b1 = parseFloat(document.getElementById("b1").value);
    let b2 = parseFloat(document.getElementById("b2").value);
    let h = parseFloat(document.getElementById("h").value);
  
    let area = 0.5 * (b1 + b2) * h;
    document.getElementById("area").innerHTML = area;
  }
  