const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');  // Assuming there can be multiple main-content elements


function PageTransitions(){
    // Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelector('.active-btn');  // Changed to singular
            if (currentBtn) {
                currentBtn.classList.remove('active-btn');
            }
            this.classList.add('active-btn'); 
        })
    }

    // Sections Active class
    allSections.forEach(section => {
        section.addEventListener('click', (e) =>{
            const id = e.target.dataset.id;
            if(id){
                // Remove active class from the other buttons
                sectBtns.forEach((btn) =>{
                    btn.classList.remove('active')
                })

                e.target.classList.add('active')

                // Hide other sections
                sections.forEach((section) =>{
                    section.classList.remove('active')
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        });
    });
}

PageTransitions();