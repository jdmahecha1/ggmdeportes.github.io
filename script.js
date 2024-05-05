document.addEventListener('DOMContentLoaded' , ()=>{
    const switcherTheme = document.querySelector('.main_check');
    const root = document.documentElement;



    switcherTheme.addEventListener('click' , toggleTheme);
    
    function toggleTheme(){
        const setTheme = switcherTheme.checked ? 'dark' : 'light';

        root.setAttribute('data-tema' , setTheme);
    }

})