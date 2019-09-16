function tabs(list,con) {
	var list1=document.querySelectorAll(list)
	var con1=document.querySelectorAll(con)
	for(let i=0;i<list1.length;i++){
		list1[i].onclick=function () {
			for(let j=0;j<con1.length;j++){
				con1[j].style.display="none"
				list1[j].style.color="black"
			}
			con1[i].style.display="block"
			this.style.color="red";
		}

	}
}
