const BASE_URL='https://swapi.dev/api/'


async function getAllStarships(req, res) {
  try {
    const result = await fetch(`${BASE_URL}/starships`)
    const starships = await result.json()
    res.json(starships) 
  } catch (err) {
    console.log('Error getting all starships', err)
    res.status(500).json(err)
  }
}
async function getStarship(req, res) {
  try {
    const idx = req.params.starshipId
    const result = await fetch(`${BASE_URL}/starships/${idx}`)
    const starships = await result.json()
    res.json(starships) 
  } catch (err) {
    console.log('Error getting a starships', err)
    res.status(500).json(err)
  }
}


export {
  getAllStarships,
  getStarship,
}
