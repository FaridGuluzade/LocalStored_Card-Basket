let buttons= document.querySelectorAll(".btn");

for(const button of buttons){
   
        button.addEventListener("click",(ev)=>{
            
        let obj = generateCardItem(ev);
        addToBasket(obj);

    });
};                              


function generateCardItem(ev){
    

    let card =ev.target.parentNode.parentNode;
    
            
            let id = card.getAttribute("data-id");
            let imgUrl =card.children[0].getAttribute("src");
            let header =card.children[1].children[0].innerText;
            let price =card.children[1].children[2].innerText;
    
            let obj = {
                id,
                imgUrl,
                header,
                price
    
            };                                                                   
            return obj;
};
    

function addToBasket(obj){

    let basket = JSON.parse(localStorage.getItem("basket"));
    if(basket===null){
        basket =[];
    }
    basket.push(obj);       
    localStorage.setItem("basket", JSON.stringify(basket));
}


