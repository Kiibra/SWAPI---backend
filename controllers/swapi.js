import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'

async function getAllStarships(req, res) {
  try {
  
  
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}


export {
  getAllStarships,
}
