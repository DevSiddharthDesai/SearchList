let textfield = document.querySelector('#search');
let CountriesList = document.querySelector('#list');
let item = CountriesList.getElementsByTagName('li');
textfield.addEventListener('keyup', () =>{  
    for(var i=0;i<item.length;i++)
    {
        if(item[i].innerHTML.includes(textfield.value) == false)
        {
            item[i].style.display = "none";
        }
        else
        {
            item[i].style.display = "";
        }
    }
});
