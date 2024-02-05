import { useState } from "react"
import "../styles/MyLibrary.css"

export function BookInfo({ library }) {

    const [hover, setHover] = useState(false)

    return (
        <div className="d-flex flex-wrap justify-content-center">
            {library.map((books, index) => (
                <div key={index} className="card text-bg-dark cont">
                    <img src={books.image_url} className="card-img" alt="..." />
                        <div className="card-img-overlay info-books shadow">
                            <h5 className="card-title"><strong>{books.title}</strong></h5>
                            <hr />
                            <span className="card-text">Pages: {books.total_pages}</span><br />
                            <span className="card-text">Rate: {books.rating}</span>
                        </div>                  
                </div>
            ))}
        </div>
    )
}