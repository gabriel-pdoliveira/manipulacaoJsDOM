document.querySelector("#enviar").onclick=()=>{
    input=document.querySelector(".form-control").value;
    if(!isNaN(input)){
        colunaMaior=document.querySelector(".maioresIdade");
        colunaMenor=document.querySelector(".menoresIdade");
        p=document.createElement("p")

        if(input>=18){        
            console.log(input);
            p.append(input)
            colunaMaior.append(p)       
            
        }
        else if(input<18){        
            console.log(input);
            p.append(input)
            colunaMenor.append(p)     
            
        }
        input=document.querySelector(".form-control").value=""
    }
    else{
        alert("Idade iválida")
    }
    
}