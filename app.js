const loadAIs = async() =>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    // console.log(url)
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayAIs(data.data.tools));
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayAIs(data.data.tools);
    }
    catch(error){
        console.log(error)
    }
}
const displayAIs = tools =>{
//console.log(tools);
const aisContainer = document.getElementById('ais-container');
    aisContainer.innerText = ''
    tools.forEach(tool => {
        const aiDiv = document.createElement('div');
        mealDiv.classList.add('col');
        aiDiv.innerHTML =`
        
        `
        
        aisContainer.appendChild(aiDiv); 
     })
     
}
loadAIs();