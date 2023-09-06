listaNumeros=[]
listaQuadradoNmeros=[]
cont=1;
document.querySelector("#enviar").onclick=()=>{
    input=document.querySelector(".form-control").value;

    if(!isNaN(input)){
        numeros=document.querySelector(".numeros"); 
        quadrado=document.querySelector(".quadrado"); 
        if(cont==1){
            listaNumeros[0]=input
            listaQuadradoNmeros[0]=input*input
            cont++

            for (let index = 0; index < listaNumeros.length; index++) {
                p1=document.createElement("p")
                p2=document.createElement("p")
                p1.append(listaNumeros[index])
                p2.append(listaQuadradoNmeros[index])
                numeros.append(p1)
                quadrado.append(p2)

                //console.log(listaNomes[index]);
            } 
        }
        else{
            listaNumeros.unshift(input)
            listaQuadradoNmeros.unshift(input*input)
            numeros.innerText=""
            quadrado.innerText=""
            for (let index = 0; index < listaNumeros.length; index++) {
                p1=document.createElement("p")
                p2=document.createElement("p")
                p1.append(listaNumeros[index])
                p2.append(listaQuadradoNmeros[index])
                numeros.append(p1)
                quadrado.append(p2)

                //console.log(listaNomes[index]);
            } 
        }
    }
    else{
        alert("Nome iválido")
    } 
}