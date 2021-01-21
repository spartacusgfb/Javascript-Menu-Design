var buton = document.getElementsByClassName("akordion")
var ok = document.getElementsByClassName("fa-angle-double-down")

console.log(buton)



for(var i=0;i<buton.length; i++){

    buton[i].onclick = function(){
        var panel = this.nextElementSibling;
        this.lastElementChild.classList.toggle("fa-angle-double-up");
        console.log(panel);
        if(panel.style.maxHeight){
             panel.style.maxHeight=null;

        }else {
              
            panel.style.maxHeight=panel.scrollHeight + "px";


        }


    }
}