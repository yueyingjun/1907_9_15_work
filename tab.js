  function tab(obtn,content) {
        var links=document.querySelectorAll(obtn)
        var list=document.querySelectorAll(content)
            for(let i=0;i<links.length;i++){
                links[i].onclick=function () {
                      for(let j=0;j<list.length;j++){
                          list[j].style.display="none"
                          links[j].style.color=""
                          links[j].style.backgroundColor=""
                      }
                      list[i].style.display="block"
                         this.style.color="red"
                         this.style.backgroundColor="#fff";



                }

                }

        }