const loadAIs = async()=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url);
    const data = await res.json();
    displayAIs(data.data.tools);

}
const loadAllAIs = async()=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools';
    const res = await fetch(url);
    const data = await res.json();
    displayAllAIs(data.data.tools);
}
const displayAIs = tools =>{
    const tests = tools.slice(0,6);
    console.log(tests);
    const aisContainer = document.getElementById('ais-container');
        aisContainer.innerText = ''
        tests.forEach(tool => {
            console.log(tool)
            const aiDiv = document.createElement('div');
        aiDiv.classList.add('col');
        aiDiv.innerHTML =`
        <div class="card h-100">
            <img src="${tool.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                `
                
                // const ol = document.getElementById('features-list');
                //  tool.features.forEach(f=>{
                //  console.log(f)
                //      const featureLi = document.createElement('li');  
                //      featureLi.innerHtml = f;
                //      ol.appendChild(featureLi); 
                //  });
            +    
    `
            
            <ol>
                    <li>${tool.features[0]}</li>
                    <li>${tool.features[1]}</li>
                    <li>${tool.features[2]}</li>
                </ol>
                </div>
            <div class="card-footer bg-white">
                <div class="float-start">
                    <h5 class="card-title ">${tool.name}</h5>
                    <small class="">${tool.published_in}</small>
                </div>
                <button onclick="loadAiDetail(${tool.id})" type="button"  class="float-end btn btn-danger-subtle" data-bs-toggle="modal" data-bs-target="#aiDetails">
                <i class="text-danger fs-2 fa-regular fa-circle-right "></i>
                </button>
            </div>
        </div>
        
        `
        aisContainer.appendChild(aiDiv); 
         })
         
    }

   

    const displayAllAIs = tools =>{
        const aisContainer = document.getElementById('ais-container');
        aisContainer.innerText = ''
        tools.forEach(tool => {
            console.log(tool)
            const aiDiv = document.createElement('div');
            aiDiv.classList.add('col');
            aiDiv.innerHTML =`
            <div class="card h-100">
                <img src="${tool.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    `
                    
                    // const ol = document.getElementById('features-list');
                    //  tool.features.forEach(f=>{
                    //  console.log(f)
                    //      const featureLi = document.createElement('li');  
                    //      featureLi.innerHtml = f;
                    //      ol.appendChild(featureLi); 
                    //  });
                +    
        `
                
                <ol>
                        <li>${tool.features[0]}</li>
                        <li>${tool.features[1]}</li>
                        <li>${tool.features[2]}</li>
                    </ol>
                    </div>
                <div class="card-footer bg-white">
                    <h5 class="card-title">${tool.name}</h5>
                    <small class="">${tool.published_in}</small>
                </div>
            </div>
            
            `
            aisContainer.appendChild(aiDiv); 
         })
    }

    const loadAiDetail = id => {
        const url = `https://openapi.programming-hero.com/api/ai/tool/0${id}`;
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => displayAiDetails(data.data))
        .catch(error => {
    
            console.log(error)
        })
    }

    const displayAiDetails = tool => {
        document.getElementById('aiDetailsLabel').innerText = tool.tool_name;
        const aiDetails = document.getElementById('aiDetailsBody');
        aiDetails.innerHTML = `
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col-md-6">
                <div class="card mx-2">
                    <div class="card-body">
                        <h5 class="card-title">${tool.description}</h5>
                        <div class="row row-cols-1 row-cols-md-3 g-2">
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                    <h5 class="card-title text-success">${tool.pricing[0].price} ${tool.pricing[0].plan}</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                    <h5 class="card-title text-warning">${tool.pricing[1].price} ${tool.pricing[1].plan}</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                    <h5 class="card-title text-danger">${tool.pricing[2].price} ${tool.pricing[2].plan}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-md-2 g-2">
                            <div class="col-md-6">
                                
                                <div class="p-1">
                                    <h5 class="card-title">Features</h5>
                                    <ul>
                                        <li>${tool.features['1'].feature_name}</li>
                                        <li>${tool.features['2'].feature_name}</li>
                                        <li>${tool.features['3'].feature_name}</li>
                                    </ul>
                                    
                                </div>
                                
                            </div>
                            <div class="col-md-6">
                                
                                <div class="p-1">
                                    <h5 class="card-title">Integrations</h5>
                                    <ul>
                                        <li>${tool.integrations[0]}</li>
                                        <li>${tool.integrations[1]}</li>
                                        <li>${tool.integrations[2]}</li>
                                    </ul>
                                    
                                </div>
                                
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <img src="${tool.image_link[0]}" class="img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">  </h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
            
       
        `
    }

    loadAIs();