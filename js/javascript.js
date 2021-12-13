button.addEventListener("click", copyToClickBoard );

function copyToClickBoard(){
    var content = document.getElementById('n-contrato').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        alert("El contrato ha sido copiado con exito...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
 
}