 <!--  JQUERY para controlar os eventos dos botões -->

<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>

    <script>
       Document.getElementById(".btn-menu").click(function(){
       $(".menu").show();
      });
        $(".btn-fechar").click(function(){
        $(".menu").hide();
      });
    </script>
