async function traerPiplup() {
    let piplupdata = await fetch('https://pokeapi.co/api/v2/pokemon/piplup')
    let piplupJson = await piplupdata.json()
        //    console.log(piplupJson)
    return piplupJson
}

async function imprimirPiplup() {
    let objetoPiplup = await traerPiplup()
        //console.log(objetoPiplup)

    const card = document.createElement('div')
    const body = document.querySelector('body')
    body.appendChild(card)
    card.innerHTML = `
    <img class='piplup-img' src=${objetoPiplup.sprites.front_shiny}></img>
    <p>${objetoPiplup.name}</p>
    `
}

imprimirPiplup()