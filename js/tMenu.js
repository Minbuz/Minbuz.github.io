function toggleMenu() {
    if (estado === false) {
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.transform = "translateY(0px)";
        menuItems[i].style.opacity = "1";
        estado = true;
      }
      menuCheck1.style.opacity = "0";
      menuCheck1.style.transform = "translateX(60px)";
    } else {
      for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].style.transform = "translateY(-40px)";
        menuItems[i].style.opacity = "0";
        estado = false;
      }
      menuCheck1.style.opacity = "1";
      menuCheck1.style.transform = "translateX(0px)";
    }
  }
