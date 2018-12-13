
<!--  JQUERY para controlar os eventos dos botões -->

       document.getElementById(".btn-menu").click(function(){
       $(".menu").show();
      });
        $(".btn-fechar").click(function(){
        $(".menu").hide();
      });

<!--Função para contar os caracteres das mensagens-->


    function contaCaracteres(campoPassado){
      var limite = 500;
      var campo = campoPassado.value.length;
      var maxlenght = document.getElementById("campoTexto").setAttribute("maxlenght", limite);
      var Contagem = document.getElementById("idContagem");
      var restante = limite - campo;
      Contagem.innerHTML = restante;
}
