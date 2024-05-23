document.addEventListener('DOMContentLoaded' , ()=>{
    const switcherTheme = document.querySelector('.main_check');
    const root = document.documentElement;



    switcherTheme.addEventListener('click' , toggleTheme);
    
    function toggleTheme(){
        const setTheme = switcherTheme.checked ? 'dark' : 'light';

        root.setAttribute('data-tema' , setTheme);
    }

})

const toggleMenu = () => {
    const navigation = document.querySelector(".navigation");
  
    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute("src");
  
    const isBurger = src === "assets/burger-menu.svg";
    const iconName = isBurger ? "assets/close.svg" : "assets/burger-menu.svg";
  
    burgerMenu.setAttribute("src", iconName);
  
    if (!isBurger) {
      navigation.classList.add("navigation--mobile--fadeout");
      setTimeout(() => {
        navigation.classList.toggle("navigation--mobile");
      }, 300);
    } else {
      navigation.classList.remove("navigation--mobile--fadeout");
      navigation.classList.toggle("navigation--mobile");
    }
  };