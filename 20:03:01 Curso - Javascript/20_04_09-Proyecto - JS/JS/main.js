$(document).ready(function() {

    // Slider

    if (window.location.href.indexOf('index') > -1) {
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }


    // Post
    if (window.location.href.indexOf('index') > -1) {
        var posts = [{
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim ut hic quibusdam accusamus commodi soluta, nam laboriosam dolorum impedit recusandae quasi odio nesciunt ipsam aliquam, consequuntur laborum saepe temporibus.Optio explicabo numquam quas provident est unde nihil praesentium at error.Et dignissimos ipsam voluptas dolores a eaque itaque,aspernatur nesciunt esse consectetur excepturi nostrum ab ad ? Praesentium,iure dolores ? Enim non,omnis quis natus cumque impedit molestiae!Architecto adipisci ab laboriosam sequi alias.Minima quis reiciendis quos corrupti,architecto expedita,culpa modi beatae laboriosam maxime dicta itaque ipsam ex.Aspernatur quod temporevoluptatum doloremque veniam voluptatibus dignissimos cum in placeat,nemo rem,modi dolor nisi omnis dolores a non blanditiis.Consequuntur explicabo temporibus hic maiores et eos dignissimos ea!Nemo,quo ex ? Laborum cum,nemocorporis necessitatibus nobis doloribus error repellendus facere,quis consequuntur sapiente et pariatur soluta fugit laudantium perspiciatis tempora assumenda culpa libero blanditiis officiis maxime id!'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el Dia: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim ut hic quibusdam accusamus commodi soluta, nam laboriosam dolorum impedit recusandae quasi odio nesciunt ipsam aliquam, consequuntur laborum saepe temporibus.Optio explicabo numquam quas provident est unde nihil praesentium at error.Et dignissimos ipsam voluptas dolores a eaque itaque,aspernatur nesciunt esse consectetur excepturi nostrum ab ad ? Praesentium,iure dolores ? Enim non,omnis quis natus cumque impedit molestiae!Architecto adipisci ab laboriosam sequi alias.Minima quis reiciendis quos corrupti,architecto expedita,culpa modi beatae laboriosam maxime dicta itaque ipsam ex.Aspernatur quod temporevoluptatum doloremque veniam voluptatibus dignissimos cum in placeat,nemo rem,modi dolor nisi omnis dolores a non blanditiis.Consequuntur explicabo temporibus hic maiores et eos dignissimos ea!Nemo,quo ex ? Laborum cum,nemocorporis necessitatibus nobis doloribus error repellendus facere,quis consequuntur sapiente et pariatur soluta fugit laudantium perspiciatis tempora assumenda culpa libero blanditiis officiis maxime id!'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el Dia: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim ut hic quibusdam accusamus commodi soluta, nam laboriosam dolorum impedit recusandae quasi odio nesciunt ipsam aliquam, consequuntur laborum saepe temporibus.Optio explicabo numquam quas provident est unde nihil praesentium at error.Et dignissimos ipsam voluptas dolores a eaque itaque,aspernatur nesciunt esse consectetur excepturi nostrum ab ad ? Praesentium,iure dolores ? Enim non,omnis quis natus cumque impedit molestiae!Architecto adipisci ab laboriosam sequi alias.Minima quis reiciendis quos corrupti,architecto expedita,culpa modi beatae laboriosam maxime dicta itaque ipsam ex.Aspernatur quod temporevoluptatum doloremque veniam voluptatibus dignissimos cum in placeat,nemo rem,modi dolor nisi omnis dolores a non blanditiis.Consequuntur explicabo temporibus hic maiores et eos dignissimos ea!Nemo,quo ex ? Laborum cum,nemocorporis necessitatibus nobis doloribus error repellendus facere,quis consequuntur sapiente et pariatur soluta fugit laudantium perspiciatis tempora assumenda culpa libero blanditiis officiis maxime id!'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el Dia: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim ut hic quibusdam accusamus commodi soluta, nam laboriosam dolorum impedit recusandae quasi odio nesciunt ipsam aliquam, consequuntur laborum saepe temporibus.Optio explicabo numquam quas provident est unde nihil praesentium at error.Et dignissimos ipsam voluptas dolores a eaque itaque,aspernatur nesciunt esse consectetur excepturi nostrum ab ad ? Praesentium,iure dolores ? Enim non,omnis quis natus cumque impedit molestiae!Architecto adipisci ab laboriosam sequi alias.Minima quis reiciendis quos corrupti,architecto expedita,culpa modi beatae laboriosam maxime dicta itaque ipsam ex.Aspernatur quod temporevoluptatum doloremque veniam voluptatibus dignissimos cum in placeat,nemo rem,modi dolor nisi omnis dolores a non blanditiis.Consequuntur explicabo temporibus hic maiores et eos dignissimos ea!Nemo,quo ex ? Laborum cum,nemocorporis necessitatibus nobis doloribus error repellendus facere,quis consequuntur sapiente et pariatur soluta fugit laudantium perspiciatis tempora assumenda culpa libero blanditiis officiis maxime id!'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el Dia: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim ut hic quibusdam accusamus commodi soluta, nam laboriosam dolorum impedit recusandae quasi odio nesciunt ipsam aliquam, consequuntur laborum saepe temporibus.Optio explicabo numquam quas provident est unde nihil praesentium at error.Et dignissimos ipsam voluptas dolores a eaque itaque,aspernatur nesciunt esse consectetur excepturi nostrum ab ad ? Praesentium,iure dolores ? Enim non,omnis quis natus cumque impedit molestiae!Architecto adipisci ab laboriosam sequi alias.Minima quis reiciendis quos corrupti,architecto expedita,culpa modi beatae laboriosam maxime dicta itaque ipsam ex.Aspernatur quod temporevoluptatum doloremque veniam voluptatibus dignissimos cum in placeat,nemo rem,modi dolor nisi omnis dolores a non blanditiis.Consequuntur explicabo temporibus hic maiores et eos dignissimos ea!Nemo,quo ex ? Laborum cum,nemocorporis necessitatibus nobis doloribus error repellendus facere,quis consequuntur sapiente et pariatur soluta fugit laudantium perspiciatis tempora assumenda culpa libero blanditiis officiis maxime id!'
            },
            {
                title: 'Prueba de titulo 6',
                date: 'Publicado el Dia: ' + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim ut hic quibusdam accusamus commodi soluta, nam laboriosam dolorum impedit recusandae quasi odio nesciunt ipsam aliquam, consequuntur laborum saepe temporibus.Optio explicabo numquam quas provident est unde nihil praesentium at error.Et dignissimos ipsam voluptas dolores a eaque itaque,aspernatur nesciunt esse consectetur excepturi nostrum ab ad ? Praesentium,iure dolores ? Enim non,omnis quis natus cumque impedit molestiae!Architecto adipisci ab laboriosam sequi alias.Minima quis reiciendis quos corrupti,architecto expedita,culpa modi beatae laboriosam maxime dicta itaque ipsam ex.Aspernatur quod temporevoluptatum doloremque veniam voluptatibus dignissimos cum in placeat,nemo rem,modi dolor nisi omnis dolores a non blanditiis.Consequuntur explicabo temporibus hic maiores et eos dignissimos ea!Nemo,quo ex ? Laborum cum,nemocorporis necessitatibus nobis doloribus error repellendus facere,quis consequuntur sapiente et pariatur soluta fugit laudantium perspiciatis tempora assumenda culpa libero blanditiis officiis maxime id!'
            }
        ];

        posts.forEach((item, index) => {
            var post = `
        <article class="post">
        <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                    ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                    </article>
        `;

            $("#posts").append(post);
        });
    }

    // Selector de tema

    var theme = $("#theme");

    $("#to-green").click(function() {
        theme.attr("href", "./../CSS/green.css");
    })

    $("#to-red").click(function() {
        theme.attr("href", "./../CSS/red.css");
    })

    $("#to-blue").click(function() {
        theme.attr("href", "./../CSS/blue.css");
    });

    // Scroll arriba de la web
    $('.subir').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso
    $("#login form").submit(function() {
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

        $("#login").hide();

        $("#logout").click(function() {
            localStorage.clear();
            location.reload();
        });
    }
    // Acordeon

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    // Reloj
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function() {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000)
    }

    // Validacion
    if (window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});