import axios from 'axios'

const BASE_URL = 'https://api.covid19api.com'

const formatDate = (date) => {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = `0${d.getMonth() + 1}`.slice(-2)
    const _date = d.getDate()
    return `${year}-${month}-${_date}`
}

export const daysHandler = (days) => {

    const d = new Date()
    const to = formatDate(d)
    const from = formatDate(d.setDate(d.getDate() - days))
    console.log(from)
    return { from, to }
}

export const capitalizeFirstLetter = (country) => {
    return country.charAt(0).toUpperCase() + country.slice(1);
}
