const search = () =>{
    const barrapesquisa = document.getElementById("procurar-item").value.toUpperCase()
    const guardarbus = document.getElementById("lista-onibus")
    const onibus = document.querySelectorAll(".onibus")
    const nome = guardarbus.getElementsByTagName("h2")

    for(var i = 0; i < nome.length; i++){
        let match = onibus[i].getElementsByTagName('h2')[0]

        if(match){
          let textvalue = match.textContent || match.innerHTML

          if(textvalue.toUpperCase().indexOf(barrapesquisa) > -1){
              onibus[i].style.display = "";
          }else{
            onibus[i].style.display = "none"; 
          }
        }
    }
}