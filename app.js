const players = async () => {
    const inputFiled = document.getElementById('input-filed')
    const inputText = inputFiled.value
    inputFiled.value = ''
    const playerContainer = document.getElementById('player-detail')
    playerContainer.innerHTML = ''
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputText}`
    const res = await fetch(url)
    const data = await res.json()
    playerId(data.player[0])
}

const playerId = (player) => {
    const playerContainer = document.getElementById('player-detail')
    const div = document.createElement('div')
    div.classList.add('row')
    div.innerHTML = `       
        <div class="col-lg-6">
            <img src="${player.strFanart4}" class="img-fluid" alt="">
        </div>
        <div class="col-lg-6">
            <h2>${player.strPlayer}</h2>
            <p>${player.strDescriptionEN.slice(0,1000)}</p>
        </div>
    `
    playerContainer.appendChild(div)
}