let dataDisplay = document.querySelector(".dataDisplay")
let url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?          query=godfather&api-key=0NxZHTsGZRP8WmOHAEiduMCdeOCPP7Uh";

let color=[
    "linear-gradient(to bottom,rgb(33,243,230) ,rgb(45,184,192))",
    "linear-gradient(to bottom,rgb(234,110,190) ,rgb(75,102,251))",
    "linear-gradient(to bottom,rgb(86,90,205) ,rgb(195,0,16))",
    "linear-gradient(to bottom,rgb(40,51,217) ,rgb(178,61,54))",
    "linear-gradient(to bottom,rgb(165,222,186) ,rgb(247,60,84))",
    "linear-gradient(to bottom,rgb(42,97,226) ,rgb(204,4,97))",
    "linear-gradient(to bottom,rgb(156,116,241) ,rgb(45,237,149))",
    "linear-gradient(to bottom,rgb(123,12,127) ,rgb(246,57,90))",
    "linear-gradient(to bottom,rgb(19,86,150) ,rgb(157,28,121))",
    "linear-gradient(to bottom,rgb(201,72,96) ,rgb(215,125,5))",
    "linear-gradient(to bottom,rgb(216,69,19) ,rgb(200,13,105))"
]


window.addEventListener("load",data)



async function data(){
    try{
        let data =await fetch(url)
        let json = await data.json()
        let results  = json.results
    
       
        results.forEach((r)=>{
            let {display_title,headline,} = r
            let {url} = r.link
            let {src} = r.multimedia
          
           dataDisplay.innerHTML+=`
           <div class="card">
            <h2>${display_title}</h2>
            <p>${headline}</p>
            <img src=${src} alt="image"/>
            <a href=${url} target="_blank">Source</a>
            </div>
           `
        
           let card = document.querySelectorAll(".card")
           card.forEach((c)=>{
            let colorRandom =Math.floor(Math.random() * color.length)
            c.style.background=color[colorRandom]
           })
        })
    }
    catch(error){

    }
}