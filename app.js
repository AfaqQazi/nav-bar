 let dropDownArrows = document.getElementsByClassName('dropdownarrows');
 let subMenus = document.getElementsByClassName('submenus');

Array.from(dropDownArrows).forEach(arrow => {
	arrow.addEventListener('click' , () => {

	//caching this specific ul below the arrow clicked	
	let unorderedList = arrow.parentElement.nextElementSibling;
	let lis = unorderedList.querySelectorAll('li');

	let conditions = function() {
			if (unorderedList.classList == 'submenus active') {
			//close other menus when opening the menu you are clickin on
				Array.from(subMenus).forEach(submenu => {
				if (submenu.classList == 'submenus') {
					submenu.style.height = '0px';
					submenu.style.visibility = 'hidden';
					submenu.style.opacity = '0';
					submenu.classList.add('active')
					}
				})
	   		// set height of li to li length.
	   		if (lis.length == 3) {unorderedList.style.height = "97.5px"} 
	   		else if (lis.length == 2) {unorderedList.style.height = "65px" }
	   		else if(lis.length == 1) {unorderedList.style.height = '32.5px'}
	   		else {unorderedList.style.height = '130px'}
	   		unorderedList.style.visibility = "visible";
	   		unorderedList.style.opacity = "1";
	   		unorderedList.classList.remove('active');
		  } else if (unorderedList.className == 'submenus') {
			unorderedList.style.height = '0px';
			unorderedList.style.visibility = 'hidden';
			unorderedList.style.opacity = '0';
			unorderedList.classList.add('active');
		}
	}
		conditions();
	})
});