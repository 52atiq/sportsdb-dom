const allPlayers = () => {
    const searchValue = document.getElementById('search-box').value;
    console.log(searchValue);
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
   

    fetch(url)
    .then(res => res.json())
    .then(data=> showPlayerDetails(data.player));
}

const showPlayerDetails = (players) => {
    for(const player of players){

        console.log(player);
        const playerContainer = document.getElementById('player-container');

        const div = document.createElement('div');
        div.innerHTML=` <div class="card border p-2">
        <div class="pro-pic">
            <img class="w-25" src="${player.strThumb}" alt="">
        </div>
        <h2>Name:${player.strPlayer}</h2>
        <h5> Country : ${player.strNationality}</h5>
        <p></p>
        <div class="allButton mb-3">
            <button class="btn btn-danger">Delete</button>
            <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
        </div>
    </div>`;
    playerContainer.appendChild(div)
    }
 
}

const details=(id) =>{
   const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
   fetch(url)
   .then(res => res.json())
   .then(data => setDetails(data.players[0]))
}

// for right side 
const setDetails = (info)=>{
    document.getElementById('details-container').innerHTML =`
    <div>
    <img src="" alt="">
    <h1> Name: ${info.strPlayer} </h1>
    </div>
    `;
console.log(info);
}