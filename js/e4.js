listaNomes=[]
cont=1;
document.querySelector("#enviar").onclick=()=>{
    input=document.querySelector(".form-control").value;

    if(isNaN(input)){
        nomes=document.querySelector(".nomes"); 
        if(cont==1){
            listaNomes[0]=input
            cont++

            for (let index = 0; index < listaNomes.length; index++) {
                p=document.createElement("p")
                p.append(listaNomes[index])
                nomes.append(p)

                console.log(listaNomes[index]);
            } 
        }
        else{
            listaNomes.unshift(input)
            nomes.innerText=""
            for (let index = 0; index < listaNomes.length; index++) {
                
                p=document.createElement("p")
                p.append(listaNomes[index])
                
                nomes.append(p)

                console.log(listaNomes[index]);
            } 
        }
    }
    else{
        alert("Nome iválido")
    } 
}