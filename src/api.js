const baseUrl = 'https://api.rawg.io/api/'


const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate()
    if (day < 10) {
        return `0${day}`
    } else {
        return day
    }
}


const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay()
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`
const key = '2b17b14ec5d143899c572409492da42e'

const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=15`
const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-adding&page_size=15`
const new_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=15`


export const popularGamesURL = () => `${baseUrl}${popular_games}`;
export const upcomingGamesURL = () => `${baseUrl}${upcoming_games}`;
export const newGamesURL = () => `${baseUrl}${new_games}`;
export const detailGameURL = (game_id) => `${baseUrl}games/${game_id}?key=${key}`;
export const screenshotsGameURL = (game_id) => `${baseUrl}games/${game_id}/screenshots?key=${key}`;


