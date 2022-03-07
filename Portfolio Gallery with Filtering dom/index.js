
// virable declare
const items = document.querySelectorAll(".items");
const itembox = document.querySelectorAll(".itembox");

// itemx virable for lop
for (let i=0; i<items.length; i++){
    items[i].addEventListener("click", function(){
        for(let j=0; j<items.length; j++){
            items[j].classList.remove("active")
        }
        this.classList.add("active")

        // virable declare
        const dataFilter = this.getAttribute("data-filter");

        // itembox virable for lop
        for(let k=0; k<itembox.length; k++){
            itembox[k].classList.add("show")
            itembox[k].classList.add("hide")
            if(itembox[k].getAttribute('data-item') == dataFilter){
                itembox[k].classList.remove("hide")
                itembox[k].classList.add("show")
            }
            if(dataFilter == "all"){
                itembox[k].classList.remove("hide")
                itembox[k].classList.add("show")
            }
        }
    })
}
