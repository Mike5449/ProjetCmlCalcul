

document.addEventListener('click', (e) => {

  const valeur = e.target.value;
  calculons(valeur)
   
})

const calculons = (val) => {

   
  const operation= document.getElementById('afficher');
                                                         
    if(val=="Del"){

        operation.value= "";
           
    }else if(val=="="){

        const sommes = eval(operation.value);
        operation.value=sommes;
         

    }else if(val=="ce"){

        operation.value=operation.value.slice(0,operation.value.length-1);

    }else if(val=="rac"){
        alert("dfghj")

    }else{

        operation.value+=val;
               
    }

}
  
