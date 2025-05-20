function handleSubmit(event){
  event.preventDefault();
  let form = event.target;
  document.querySelector('h1').textContent = form.texto.value;
   let estilo = form.texto2.value;
  document.querySelector('h1').style[estilo] = form.texto3.value;
}
