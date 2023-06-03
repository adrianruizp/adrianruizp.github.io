var expr =/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

        $(document).ready(function(){
            $("#bEnviar").click(function(){
                var nombre= $("#itNombre").val();
                var correo= $("#itMail").val();
                var asunto= $("#itAsunto").val();
                var phone= $("#itPhone").val();
                if(nombre==""){
                    $("#msg1").fadeIn();
                    return false;
                }else{
                    $("#msg1").fadeOut();
                    if(correo==""||!expr.test(correo)){
                        $("#msg2").fadeIn();
                        return false;
                    }else{
                        $("#msg2").fadeOut();
                        if(phone==""){
                            $("#msg3").fadeIn();
                            return false;
                        }else{
                            $("#msg3").fadeOut();
                            $("#msg4").fadeIn();
                            return $("#bEnviar").click(function(){
                                $("#miformulario").slideDown("2000", function(){
                                    alert("Enviado con exito");
                                });
                            });
                        }
                    }
                }
            });
        });

        $("document").ready(function(){
            $("#textBox").on("click", whenmouseisclicked);
            $("#textBox").on("mouseleave",  whenmouseleaves);
            function whenmouseisclicked(){
                $("#textBox").html("<h3>Proyecto Personal</h3>");
            }
            function whenmouseleaves(){
                $("#textBox").html("<h5>Antes de ingresar a la universidad desarrolle "+
                    "un videojuego plataformero utilizando Blender</h5>");
            }
        });

        $("document").ready(function(){
            $("#textBox1").on("click", whenmouseisclicked);
            $("#textBox1").on("mouseleave",  whenmouseleaves);
            function whenmouseisclicked(){
                $("#textBox1").html("<h3>Proyecto Academico</h3>");
            }
            function whenmouseleaves(){
                $("#textBox1").html("<h5>Desarrolle una aplicación Movil de noticias anime usando React Native.</h5>");
            }
        });

        $("document").ready(function(){
            $("#textBox2").on("click", whenmouseisclicked);
            $("#textBox2").on("mouseleave",  whenmouseleaves);
            function whenmouseisclicked(){
                $("#textBox2").html("<h3>Proyecto Personal</h3>");
            }
            function whenmouseleaves(){
                $("#textBox2").html("<h5>A modo de hobbie, realice videos de animación "+
                    "stop motion y en un futuro planeo agregarles animaciones 3d.</h5>");
            }
        });

        $("document").ready(function(){
            $("#textBox3").on("click", whenmouseisclicked);
            $("#textBox3").on("mouseleave",  whenmouseleaves);
            function whenmouseisclicked(){
                $("#textBox3").html("Proyecto Academico</h3>");
            }
            function whenmouseleaves(){
                $("#textBox3").html("<h5>Realice un programa encargado de "+
                    "registrar la entrada y salida de alumnos de mi preparatoria.</h5>");
            }
        });

        $("document").ready(function(){
            $("#textBox4").on("click", whenmouseisclicked);
            $("#textBox4").on("mouseleave",  whenmouseleaves);
            function whenmouseisclicked(){
                $("#textBox4").html("<h3>Proyecto Personal</h3>");
            }
            function whenmouseleaves(){
                $("#textBox4").html("<h6>Usando blender y python desarrolle un 'remaster' "+
                    "de un videojuego que jugue en mi playstation one</h6>");
            }
        });

        $("document").ready(function(){
            $("#textBox5").on("click", whenmouseisclicked);
            $("#textBox5").on("mouseleave",  whenmouseleaves);
            function whenmouseisclicked(){
                $("#textBox5").html("<h3>Proyecto Academico</h3>");
            }
            function whenmouseleaves(){
                $("#textBox5").html("<h6>Desarrolle una aplicación movil en Android Studio "+
                    "que tuviese como punto principal el cuidado del medio ambiente.</h6>");
            }
        });