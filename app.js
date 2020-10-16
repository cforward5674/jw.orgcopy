let toggleNavStatus = false;

let toggleNav = function() {
  let getMenuHeader = document.querySelector(".menu-header");
  let getMenuHeaderNav = document.querySelector(".menu-header nav");
  let getMenuHeaderUl = document.querySelector(".menu-header nav ul");
  let getMenuHeaderList = document.querySelector(".menu-header nav ul li");
  let getMenuHeaderLinks = document.querySelectorAll(".menu-header ul li a");
  let getSearchHeaderLogin = document.getElementById("#login");
  if (toggleNavStatus === false)  {
        getMenuHeaderUl.style.opacity = "1";
        getMenuHeader.style.width = "250px";
        getMenuHeader.style.height = "275px";
        getMenuHeader.style.display = "flex";
        getMenuHeader.style.float = "right";
        // getSearchHeaderLogin.display = "flex";
        


        let arraylength = getMenuHeaderLinks.length;
        for (let i = 0; i < arraylength; i++)  {
        getMenuHeaderLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
  }
  
  else if (toggleNavStatus === true)  {
    getMenuHeaderUl.style.opacity = "1";
    getMenuHeader.style.width = "100%";
    getMenuHeader.style.display = "none";
    getMenuHeader.style.transition = "all 0s ease-in-out";
    



    let arraylength = getMenuHeaderLinks.length;
    for (let i = 0; i < arraylength; i++)  {
    getMenuHeaderLinks[i].style.opacity = "1";
    }

    toggleNavStatus = false;
  }
  
}