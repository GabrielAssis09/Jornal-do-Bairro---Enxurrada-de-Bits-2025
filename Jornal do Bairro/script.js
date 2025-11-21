const excursaofunec = document.querySelector(".ExcursaoFunecbutton")
const balaoexcursaofunec = document.querySelector("#balaoexcursaofunec")
const fundoborradoEF = document.querySelector(".fundoborradoEF")
excursaofunec.onclick = function () {
    if (balaoexcursaofunec.style.display === "block") {
    balaoexcursaofunec.style.display = "none";
  } else {
    balaoexcursaofunec.style.display = "block";
  }
    if (fundoborradoEF.style.display === "block") {
    fundoborradoEF.style.display = "none";
  } else {
    fundoborradoEF.style.display = "block";
  }
}
fundoborradoEF.onclick = function () {
  if (fundoborradoEF.style.display === "block") {
    fundoborradoEF.style.display = "none"
  }
  if (balaoexcursaofunec.style.display === "block") {
    balaoexcursaofunec.style.display = "none";
  }
}
const ej = document.querySelector(".Ejbutton")
const balaoej = document.querySelector("#balaoej")
const fundoborradoEJ = document.querySelector(".fundoborradoEJ")
ej.onclick = function () {
  if (balaoej.style.display === "block") {
    balaoej.style.display = "none"; 
  } else {
    balaoej.style.display = "block";
  }
    if (fundoborradoEJ.style.display === "block") {
    fundoborradoEJ.style.display = "none";
  } else {
    fundoborradoEJ.style.display = "block";
  }
}
fundoborradoEJ.onclick = function () {
  if (fundoborradoEJ.style.display === "block") {
    fundoborradoEJ.style.display = "none"
  }
  if (balaoej.style.display === "block") {
    balaoej.style.display = "none";
  }
}