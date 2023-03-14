
        var cont7  = document.getElementById('cont');
        var home = document.querySelector('.home');
        var about = document.querySelector('.about');
        var skills = document.querySelector('.skills');
        var portofolio= document.querySelector('.portofolio');
        var contact = document.querySelector('.contact');

        cont.style.top="0px"

        home.addEventListener('click', function(){
            cont.style.top= "0px"
        });
        about.addEventListener('click', function(){
            cont.style.top="-450px"
        });
        skills.addEventListener('click', function(){
            cont.style.top="-900px"
        });
        portofolio.addEventListener('click', function(){
            cont.style.top="-1400px"
        });
        contact.addEventListener('click', function(){
            cont.style.top="-1860px"
        });

