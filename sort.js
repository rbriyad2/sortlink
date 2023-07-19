// link sortnner javascript 




const loadData = async (inputValue) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${inputValue}`
    const res = await fetch(url)
    const data = await res.json()
    display(data.result.short_link)
}
display = db =>{

    const menuContainer = document.getElementById('copy');
    // menuContainer.innerHTML = '';

        const newDiv = document.createElement('div')
        newDiv.innerHTML = `
           <button class="font-bold text-white bg-cyan-600	 text-2xl px-8 py-4 mb-4 text-center">${db}</button>
        `
        menuContainer.appendChild(newDiv)
    
}




document.getElementById('submitbtn').addEventListener('click', function(){
       
    const inputValue = document.getElementById('sortinputField').value;
    loadData(inputValue)
})
 
