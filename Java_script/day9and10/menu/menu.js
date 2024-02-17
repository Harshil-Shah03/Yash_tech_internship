const buttons = document.querySelectorAll("button");
const menu_items = document.querySelectorAll(".menu-item")

buttons.forEach(btn =>{
    const targetCategory = btn.dataset.target;
    btn.addEventListener("click",()=>{
        buttons.forEach(button=>{button.setAttribute("class","null")})
        btn.setAttribute("class","active")
        menu_items.forEach(menuItem => {
            const itemCategories = menuItem.dataset.category.split(' ');

            if (itemCategories.includes(targetCategory) || targetCategory=== 'all') {
                menuItem.style.display = 'block';
            } else {
                menuItem.style.display = 'none';
            }
        });
    });
});







