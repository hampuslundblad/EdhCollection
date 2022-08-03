import axios from 'axios'
const baseUrl = "https://api.scryfall.com"
const searchCardUrl = "/cards/search"
const searchQuery = "?q=savage knuckleblade"

export async function searchCard() {
    let result = await axios.get( baseUrl + searchCardUrl + searchQuery)
    const image_uri_small = result.data.data[0].image_uris.small
    const card_name = result.data.data[0].name
    console.log(card_name)
}