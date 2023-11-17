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

    let ul = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");

    li1.append(results[1]);
    li2.append(results[0]);
    li3.append(results[2]);
    ul.append(li1, li2, li3);
    body.append(ul);
  })
})