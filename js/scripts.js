window.addEventListener("load", function(e) {
  let form = document.querySelector("form");
  let body = document.querySelector("body");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let favThing1 = document.getElementById("favThing1").value;
    let favThing2 = document.getElementById("favThing2").value;
    let favThing3 = document.getElementById("favThing3").value;
    let favThing4 = document.getElementById("favThing4").value;
    let favThing5 = document.getElementById("favThing5").value;
    
    const results = [favThing1, favThing2, favThing3, favThing4, favThing5];

    let p = document.createElement("p");
    p.append(results);
    body.append(p);
  })
})