const { response } = require('express')
const request = require('request')


const news = (name, callback) => {
    const url = 'https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=e8e6ecb4896a41428d78a3147e4751df'
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Error Occured', undefined)
        } else if (response.body.message) {
            callback('Error : unable to reach the website', undefined)
        } else {
            callback(undefined, {
                news: response.body.articles

            })

        }

    })
}

module.exports = news