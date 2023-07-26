import { Displaygames } from "./ui.module.js";



export class detail{
    constructor(id){
        this.ui = new Displaygames()
        document.getElementById("iconClose").addEventListener("click",this.closeSection)
        this.getDetail(id)

    }

   async getDetail(id){
   const loading =document.querySelector(".loading")
        const detailSection =document.querySelector(".details")
        detailSection.classList.add("d-none");
        loading.classList.remove("d-none");

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1ab31b20a6msh1f1765fa5159b4bp1f508fjsn70bd94b9a6be',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options )
        let response = await api.json();
        this.ui.displayDetails(response) 
        detailSection.classList.remove("d-none");
        loading.classList.add("d-none");
    }
    closeSection(){
        document.querySelector(".games").classList.remove("d-none");
        document.querySelector(".details").classList.add("d-none");
    }
}