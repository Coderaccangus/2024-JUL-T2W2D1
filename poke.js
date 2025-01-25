function randomNumberGenerator() {
    // const random = Math.random() // returns a random number between 0 and 1
    // const randomUpto151 = random * 151 // returns a random number between 0 and 151
    // const randomNumberWeNeed = Math.ceil(randomUpto151) // returns a random number (without decimal) between 0 and 151
    // return randomNumberWeNeed

    return Math.ceil(Math.random() * 151)
}

async function getPokemonData() {
    // const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberGenerator()}`).then((responce) => {
    //     return responce.json()
    // })
    // return fetchPromise
    try {
        const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumberGenerator()}`)
        const pokemonData = await responce.json()
        return pokemonData
    } catch(err) {
        console.log(err)
    }
}

document.getElementById("get-pokemon-button").addEventListener("click", () => {
    
//     const pokemonList = []
    
//     getPokemonData().then((data) => {
//         pokemonList.push(data.Id, data.name)
//         return getPokemonData()
//         // document.getElementById("pokemon-name").innerText = data.name

//     }).then((data) => {
//         pokemonList.push(data.id, data.name)
//         return getPokemonData()
//     }).then((data) => {
//         pokemonList.push(data.id, data.name)
//         return getPokemonData()
//     }).then((data) => {
//         pokemonList.push(data.id, data.name)
//         return getPokemonData()
//     }).then((data) => {
//         pokemonList.push(data.id, data.name)
//         return getPokemonData()
//     }).then((data) => {
//         pokemonList.push(data.id, data.name)
//         console.log(pokemonList)
//     })

    const promiseList = []

    for (let i = 0; i < 5; i++) {
        const promise = getPokemonData().then((data) => {
            return data.name
        })
        promiseList.push(promise)
    }

    Promise.all(promiseList).then((dataList) => {
        console.log(dataList)
    }).catch((err) => {
        console.log(err)
    })
})


