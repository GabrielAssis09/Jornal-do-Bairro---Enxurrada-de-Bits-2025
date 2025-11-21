const excursaofunec = document.querySelector(".ExcursaoFunecbutton");
const balaoexcursaofunec = document.querySelector("#balaoexcursaofunec");
const fundoborradoEF = document.querySelector(".fundoborradoEF");

excursaofunec.onclick = function () {
  if (balaoexcursaofunec.style.display === "block") {
    balaoexcursaofunec.style.display = "none";
    document.body.style.overflow = 'auto';
    fundoborradoEF.style.display = "none";
  } else {
    balaoexcursaofunec.style.display = "block";
    fundoborradoEF.style.display = "block";
    document.body.style.overflow = 'hidden';
    // centraliza o balão na tela
    balaoexcursaofunec.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

fundoborradoEF.onclick = function () {
  if (fundoborradoEF.style.display === "block") {
    fundoborradoEF.style.display = "none";
    document.body.style.overflow = 'auto';
    balaoexcursaofunec.style.display = "none";
  }
}

const ej = document.querySelector(".Ejbutton");
const balaoej = document.querySelector("#balaoej");
const fundoborradoEJ = document.querySelector(".fundoborradoEJ");

ej.onclick = function () {
  if (balaoej.style.display === "block") {
    balaoej.style.display = "none";
    document.body.style.overflow = 'auto';
    fundoborradoEJ.style.display = "none";
  } else {
    balaoej.style.display = "block";
    fundoborradoEJ.style.display = "block";
    document.body.style.overflow = 'hidden';
    // centraliza o balão na tela
    balaoej.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

fundoborradoEJ.onclick = function () {
  if (fundoborradoEJ.style.display === "block") {
    fundoborradoEJ.style.display = "none";
    document.body.style.overflow = 'auto';
    balaoej.style.display = "none";
  }
}
