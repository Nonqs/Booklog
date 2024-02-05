import defaultIcon from "../img/defaultUserIcon.png"
import axios from "axios"
import { useEffect, useState } from "react"
import "../styles/MyLibrary.css"
import { BookInfo } from "../components/BookInfo"
import { AddBook } from "../components/AddBook"


export function MyLibrary() {

    const [library, setLibrary] = useState()
    const [completed, setCompleted] = useState([])
    const [toRead, setToRead] = useState([])
    const [dropped, setDropped] = useState([])
    const [reading, setReading] = useState([])
    const addBook = {
        pages: 0,
        image: null,
        name: false

    }

    useEffect(() => {

        const booksaas = async () => {

            try {

                const response = await axios.get("http://localhost:3000/library", {


                })

                const data = response.data
                setLibrary(data)

            } catch (error) {
                console.error("Error signing up:", error);

            }
        }

        booksaas()



    }, [])

    useEffect(() => {

        if (library) {

            console.log(library)

            const completedBooks = library.books.filter(book => book.state === "Complete");
            setCompleted(completedBooks);

            const booksToRead = library.books.filter(book => book.state === "Plan to read");
            setToRead(booksToRead)

            const booksDropped = library.books.filter(book => book.state === "Dropped");
            setDropped(booksDropped)

            const booksReading = library.books.filter(book => book.state === "Reading");
            setReading(booksReading)

            console.log(completed, dropped, toRead, reading)

        }

    }, [library]);

    return (
        <div>
            {library &&
                <div className="container mt-5">
                    <div className="w-100 m-5">
                        <section className="user-container">
                            <article className="d-flex flex-column">
                                <img src={defaultIcon} alt="" />
                                <h4 className="mb-4">Username</h4>
                            </article>

                            <article className="">
                                <AddBook book={addBook} />
                            </article>

                        </section>

                        <section className="nav-container">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Estadistics</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Complete</button>
                                    <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-reading" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Reading</button>
                                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Plan to read</button>
                                    <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Dropped</button>
                                </div>
                            </nav>
                            <div className="tab-content bg-light shadow-sm" id="nav-tabContent">
                                <div className="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">

                                    <div className="row">
                                        <div className=" m-4 card col">
                                            <article className="card-body d-flex flex-column">
                                                <h4 className="card-title">Overview</h4>
                                                <span>Books readed: {completed.length}</span>
                                                <span>Books reading: {reading.length}</span>
                                                <span>Books to read: {toRead.length}</span>
                                                <span>Books dropped: {dropped.length}</span>
                                            </article>
                                        </div>
                                        <div className="col">
                                            <div className="card m-4">
                                                <h4 className="text-center">Book stats</h4>
                                                <div className="d-flex justify-content-center">
                                                    <article className="me-4 d-flex flex-column text-center">
                                                        <span><strong>Total entries:</strong> </span>
                                                        <span>{library.books.length}</span>
                                                    </article>
                                                    <article className="me-4 d-flex flex-column text-center">
                                                        <span><strong>Pages read:</strong> </span>
                                                        <span>{library.stats.pages}</span>
                                                    </article>
                                                    <article className="me-4 d-flex flex-column text-center">
                                                        <span><strong>Days: </strong></span>
                                                        <span>{library.stats.time}</span>
                                                    </article>
                                                    <article className="me-4 d-flex flex-column text-center">
                                                        <span><strong>Mean score: </strong></span>
                                                        <span>{library.stats.score}</span>
                                                    </article>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row row-cols-2">

                                        <article className="col ">
                                            <h4 className="ms-3">Reading now: </h4>
                                            {reading.slice(0, 2).map((reading, index) => (
                                                <div key={index} className="card mb-3 card-container w-100">
                                                    <div className="row g-0">
                                                        <div className="col-md-3">
                                                            <img src={reading.image_url} className="img-fluid rounded-start" alt="book image" />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body">
                                                                <h5 className="card-title">{reading.title}</h5>
                                                                <p className="card-text"><strong>{reading.author}</strong></p>
                                                                <p className="card-text"><small className="text-body-secondary">Total pages: {reading.total_pages}</small></p>
                                                                <p className="card-text"><small className="text-body-secondary">Pages read: {reading.pages_read}</small></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </article>
                                        <article className="col">
                                            <h4 className="ms-3">Last uploads: </h4>
                                            {library.books.slice(-2).map((reading, index) => (
                                                <div key={index} className="card mb-3 card-container">
                                                    <div className="row g-0">
                                                        <div className="col-md-3">
                                                            <img src={reading.image_url} className="img-fluid rounded-start" alt="book image" />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body">
                                                                <h5 className="card-title">{reading.title}</h5>
                                                                <p className="card-text"><strong>{reading.author}</strong></p>
                                                                <p className="card-text"><small className="text-body-secondary">Total pages: {reading.total_pages}</small></p>
                                                                <p className="card-text"><small className="text-body-secondary">Pages read: {reading.pages_read}</small></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </article>
                                    </div>
                                </div>




                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">

                                    <BookInfo library={completed} />

                                </div>
                                <div className="tab-pane fade" id="nav-reading" role="tabpanel" aria-labelledby="nav-reading-tab" tabIndex="0">

                                    <BookInfo library={reading} />

                                </div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                                    <BookInfo library={toRead} />
                                </div>
                                <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabIndex="0">
                                    <BookInfo library={dropped} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            }
        </div>
    )
}