function xxk(xx, dy) {
    var ops = document.querySelectorAll(xx)
    var cos = document.querySelectorAll(dy)
    for (let i = 0; i < ops.length; i++) {
        ops[i].onmouseover = function () {
            for (var j = 0; j < cos.length; j++) {
                cos[j].style.display = "none"
                ops[j].style.color = ""
            }
            cos[i].style.display = "flex"
            ops[i].style.background = "#0a56bb"
        }
        ops[i].onmouseout = function () {
            for (var j = 0; j < cos.length; j++) {
                cos[j].style.display = "none"
                ops[j].style.color = ""
            }

            cos[0].style.display = "block"
            cos[0].style.display = "flex"
            ops[i].style.background = ""
        }

    }
}

function xxk1(xx, dy) {
    var ops = document.querySelectorAll(xx)
    var cos = document.querySelectorAll(dy)
    for (let i = 0; i < ops.length; i++) {
        ops[i].onclick = function () {
            for (var j = 0; j < cos.length; j++) {
                cos[j].style.display = "none"
                ops[j].style.color = ""
            }
            cos[i].style.display = "block"
        }
    }
}