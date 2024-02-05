
const data = async (books) => {

    let pages = 0
    let score = 0
    let time = 0

    for (let i = 0; i < books.length; i++) {

        const sumPages = books[i].pages_read

        pages = pages + sumPages

    }

    for (let i = 0; i < books.length; i++) {

        if (books[i].rating == "Not Rated") {

            const sumScore = 0

            score = score + sumScore
            

        } else {

            const sumScore = parseInt(books[i].rating)

            score = score + sumScore


        }


    }

    score = score / books.length
    score = Number(score.toFixed(2))
    
    time = ((pages * 2)/60)/24 //Time in days
    time = Number(time.toFixed(2))

    const stats = {
        pages, 
        score,
        time
    }

    return stats
}

module.exports = data