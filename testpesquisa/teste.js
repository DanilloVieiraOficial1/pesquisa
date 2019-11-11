paises = ["Brasil", "Argentina", "Peru", "Arabia", "Belgica"];
p = ""
for (i in paises) {
    p += "<li>" + paises[i] + "</li>"
    paises[i] = paises[i].toLowerCase()

}
lista.innerHTML = p
pesquisa.onkeyup = function (e) {
    p = this.value

    t = new RegExp(p, "g")
    for (i in paises) {
        if (paises[i].match(t))
            lista.children[i].removeAttribute("style")
        else
            lista.children[i].style.display = "none"
    }
}