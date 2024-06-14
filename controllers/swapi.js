const BASE_URL='https://swapi.dev/api/'


async function getAllStarships(req, res) {
  try {
    const result = await fetch(`${BASE_URL}/starships`)
    const starships = result.json()
    res.json(starships) 
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}


export {
  getAllStarships,
}
