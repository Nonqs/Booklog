import { useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import "../styles/AddBook.css"
import axios from "axios"

//Ventana modal
// Cancel lleva todo los usestate a default
export function AddBook({ book, direction, ...args }) {

    const [modal, setModal] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [dropdownOpenRating, setDropdownOpenRating] = useState(false)
    const [state, setState] = useState("Reading")
    const [stateRating, setStateRating] = useState("Not Rated")
    const [pages, setPages] = useState(0)
    const [err, setErr] = useState()

    const onCancel = () => {

        setModal(!modal)
        setState("Reading")
        setStateRating("Not Rated")
        setPages(0)
        setErr()

    }

    const onSave = async () => {
        console.log(book.name, state, stateRating, pages)

        setModal(!modal)
        try {

            const response = await axios.post("http://localhost:3000/search/add", {

                bookName: book.name,
                bookImg: book.image,
                bookPages: book.pages,
                author: book.author,
                state: state,
                rating: stateRating,
                pages: pages

            })

        } catch (error) {
            console.error("Error saving book:", error);
        }

    }

    const handleChange = (e) => {

        const newPage = parseInt(e.target.value)
        setErr()

        if (newPage <= book.pages) {
            setPages(newPage)

        } else if (!newPage) {
            setPages(0)
        } else {
            console.log(newPage)
            setErr("There can be no more pages read than total pages")
        }
    }

    return (
        <div>
            <button type="button" className="btn btn-success" onClick={() => { setModal(!modal) }}>Add</button>
            <Modal size="lg" centered="true" isOpen={modal} toggle={() => { setModal(!modal) }} {...args}>
                <ModalHeader toggle={onCancel}>Add book</ModalHeader>
                <ModalBody className="modal-container">
                    <Container>
                        <div className="d-flex">
                        <div className="container-1 shadow p-3 bg-body-tertiary rounded" >
                            <img src={book.image} alt="book image" />
                            <h3>{book.name}</h3>
                            <Dropdown isOpen={dropdownOpen} toggle={() => { setDropdownOpen(!dropdownOpen) }} direction={direction}>
                                <DropdownToggle caret>{state}</DropdownToggle>
                                <DropdownMenu {...args}>
                                    <DropdownItem onClick={() => { setState("Complete"); setPages(book.pages) }}>Complete</DropdownItem>
                                    <DropdownItem onClick={() => { setState("Plan to read") }}>Plan to read</DropdownItem>
                                    <DropdownItem onClick={() => { setState("Dropped") }}>Dropped</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                        </div>
                        <div className="container-2 ms-4">
                              <article className="d-flex">
                                    <h4 className="me-2">Rating</h4>
                                    <Dropdown className="p-0" isOpen={dropdownOpenRating} toggle={() => { setDropdownOpenRating(!dropdownOpenRating) }} direction={direction}>
                                        <DropdownToggle caret>{stateRating}</DropdownToggle>
                                        <DropdownMenu {...args}>
                                            <DropdownItem onClick={() => { setStateRating("No Rated") }}>Not Rated</DropdownItem>
                                            <DropdownItem divider></DropdownItem>
                                            <DropdownItem onClick={() => { setStateRating("1") }}>1: Very bad</DropdownItem>
                                            <DropdownItem onClick={() => { setStateRating("2") }}>2: Bad</DropdownItem>
                                            <DropdownItem onClick={() => { setStateRating("3") }}>3: Poor</DropdownItem>
                                            <DropdownItem onClick={() => { setStateRating("4") }}>4: Below Average</DropdownItem>
                                            <DropdownItem onClick={() => { setStateRating("5") }}>5: Average</DropdownItem>
                                            <DropdownItem onClick={() => { setStateRating("6") }}>6: Above Aberage</DropdownItem>
                                            <DropdownItem onClick={() => { setStateRating("7") }}>7: Good</DropdownItem>
                                            <DropdownItem onClick={() => { setStateRating("8") }}>8: Very Good</DropdownItem>
                                            <DropdownItem onClick={() => { setStateRating("9") }}>9: Excellent</DropdownItem>
                                            <DropdownItem onClick={() => { setStateRating("10") }}>10: Masterpiece</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </article>
                            <div className="d-flex mt-3 info">

                                <article>
                                    <h4 htmlFor="pages" className="me-1">Total pages read: </h4>
                                    <input type="number" className="input" name="pages" placeholder={pages} onChange={handleChange} />
                                    <span className="ms-1">/ {book.pages}</span>
                                </article>

                            </div>
                            {err &&
                                <div className="alert alert-danger w-100" role="alert">
                                    {err}
                                </div>
                            }

                        </div>
                        </div>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-danger" onClick={onCancel}>Cancel</button>
                    <button type="button" className="btn btn-success" onClick={onSave}>
                        Save
                    </button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    )

}