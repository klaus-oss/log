
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        
        function toggleMenu() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
        
        hamburger.addEventListener('click', toggleMenu);
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        document.addEventListener('click', (event) => {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        document.getElementById("hbtn1").addEventListener("click", function() {
            window.location.href = "assets/pages/categories.html"
        });

        document.getElementById('cbbtn').addEventListener('click', function () {
            window.location.href = "assets/pages/categories.html"
        });