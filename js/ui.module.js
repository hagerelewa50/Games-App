export class Displaygames{
   displayHome(response){ 
    let temp=""
    response.forEach((el) => {
      temp+=` <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="card-container">
        <div class="card h-100" gameId=${el.id}>
          <img src="${el.thumbnail}" class="card-img-top w-100 p-3" alt="...">
          <div class="card-body py-1 px-3">
            <div class="card-title d-flex justify-content-between align-items-center ">
              <h5 class="card-title small">${el.title}</h5>
            <button class="btn btn-free" type="submit">Free</button>
            </div>
            <p class="card-text text-muted text-center">${el.short_description}</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <small class="text-uppercase">${el.genre}</small>
            <small>${el.platform}</small>
          </div>
      </div>
      </div> 
        </div>`
    });
    document.getElementById("cards").innerHTML= temp
  }

   displayDetails(response){
    let temp=`<div class="col-md-4 py-4">
    <img src=${response.thumbnail} alt="image of game" class="image-game w-100">
  </div>
  <div class="col-md-8 py-4">
    <div class="details-game">
      <h3>Title: ${response.title}</h3>
      <p>Category: 
        <span class="badge">
          ${response.genre}
        </span>
      </p>
      <p>Platform: 
        <span class="badge">
          ${response.platform}
        </span>
      </p>
      <p>Status: 
        <span class="badge">
          ${response.status}
        </span>
      </p>
      <p class="small">${response.description}</p>
      <a class="btn btn-outline-warning text-white" target="_blank" href="${response.game_url}">Show Game</a>
    </div>
  </div>`;
  document.getElementById("detailContentGame").innerHTML= temp;

  }
  
}
