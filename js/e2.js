listaNumeros=[]
cont=0;
vez=1
document.querySelector("#enviar").onclick=()=>{
    input=document.querySelector(".form-control").value; 
    input=input.replace(",",".")
    if(!isNaN(input)){
        
        numeros=document.querySelector(".numeros");
        maiorNumero=document.querySelector(".maiorNumero");

        listaNumeros[cont++]=input

        function sortfunction(a, b){
            return (a-b)
        }

        listaNumeros.sort(sortfunction)
        console.log(listaNumeros);


        numeros.innerText=""
        for (let index = 0; index < listaNumeros.length; index++) {   
            p=document.createElement("p")
            p.append(listaNumeros[index])            
            numeros.append(p)
            
        }

        if(vez==1){
            vez++
            ultimoNumeroArray=listaNumeros.pop()
            pNumeroMaior=document.createElement("p")
            pNumeroMaior.setAttribute("class","bigNumber")
            pNumeroMaior.append(ultimoNumeroArray)
            maiorNumero.append(pNumeroMaior)            
            listaNumeros.push(ultimoNumeroArray)
        }
        else{
            ultimoNumeroArray=listaNumeros.pop()
            document.querySelector(".bigNumber").innerHTML=ultimoNumeroArray
            listaNumeros.push(ultimoNumeroArray)
        }
    }
    else{
        alert("Oque vc digitou não é um numero")
    }
    

        
}