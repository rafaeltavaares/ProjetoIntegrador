function visibilidade(event,id){
    event.preventDefault()
    const sections = document.querySelectorAll('.conteudosec > div');
    sections.forEach(content =>{
       
        content.style.display = "none";
    });
    // Mostra apenas a seção selecionada
    var elemento = document.getElementById(id);
    if(elemento){
        
        elemento.style.display = "block";
    }
    

    
}