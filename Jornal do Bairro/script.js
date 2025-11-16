const excursaofunec = document.querySelector(".ExcursaoFunec")
const balaoexcursaofunec = document.querySelector("#balaoexcursaofunec")
const fundoborrado = document.querySelector(".fundoborrado")
excursaofunec.onclick = function () {
    if (balaoexcursaofunec.style.display === "block") {
    balaoexcursaofunec.style.display = "none";
  } else {
    balaoexcursaofunec.style.display = "block";
  }
    if (fundoborrado.style.display === "block") {
    fundoborrado.style.display = "none";
  } else {
    fundoborrado.style.display = "block";
  }
}
fundoborrado.onclick = function () {
  if (fundoborrado.style.display === "block") {
    fundoborrado.style.display = "none"
  }
  if (balaoexcursaofunec.style.display === "block") {
    balaoexcursaofunec.style.display = "none";
  }
}
