import { detail } from "./details.module.js";
import { Displaygames } from "./ui.module.js";
 export class game{
    constructor(){
        this.getData()
        this.ui = new Displaygames
        this.navCatogray()
        this.startShow()
    }
    async getData(catogary="shooter"){
        const loading =document.querySelector(".loading")
        const home =document.querySelector(".games")
        home.classList.add("d-none");
        loading.classList.remove("d-none");
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '1ab31b20a6msh1f1765fa5159b4bp1f508fjsn70bd94b9a6be',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        };
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catogary}`, options )
        let response = await api.json();
        this.ui.displayHome(response) 
        loading.classList.add("d-none")
        home.classList.remove("d-none"); 

        this.startShow()
    }

    navCatogray(){
        let navLink =document.querySelectorAll(".nav-link")
        navLink.forEach(el => {
            el.addEventListener("click",el=>{
                document.querySelector(".nav-item .active").classList.remove("active");
                el.target.classList.add("active");
              let category=  el.target.getAttribute("catogary")
             this.getData(category);
            })    
        });
        
    }
  
    startShow(){
      document.querySelectorAll(".card").forEach(e =>{
        let idGame = e.getAttribute("gameId");
        e.addEventListener("click",()=>{
          this.showDetail(idGame);
        })

      })
    }

  showDetail(id){
    new detail(id);
    document.querySelector(".games").classList.add("d-none")
    document.querySelector(".details").classList.remove("d-none")
  }


}