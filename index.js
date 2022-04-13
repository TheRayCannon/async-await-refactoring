const ask = require("./ask")


async function askQuestion(question) {
    await ask(question).then(result => {
        console.log('Promnise 1:', result.response)
    }).ask(question).then(result => {
        console.log('Promise 2:', result.response)
    })
}

askQuestion("Why is the sky blue?")