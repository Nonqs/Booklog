import { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Col, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
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

    const onCancel = () => {

        setModal(!modal)
        setState("Reading")
        setStateRating("Not Rated")
        setPages(0)

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

    return (
        <div>
            <button type="button" className="btn btn-success" onClick={()=>{setModal(!modal)}}>Add</button>
            <Modal centered={true} isOpen={modal} toggle={() => { setModal(!modal) }} {...args}>
                <ModalHeader toggle={() => { setModal(!modal) }}>Add book</ModalHeader>
                <ModalBody className="modal-container">
                    <Container centered={true}>
                        <Row xs="1" sm="2" md="4">
                            <Col className="conatiner-col-1" lg="5" sm="3" md="2" >
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
                            </Col>
                            <Col md="2">

                                <article>
                                    <h3>Rating</h3>
                                    <Dropdown isOpen={dropdownOpenRating} toggle={() => { setDropdownOpenRating(!dropdownOpenRating) }} direction={direction}>
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
                                <article className="">
                                    <label htmlFor="pages">Total pages read</label>
                                    <input type="number" name="pages" value={pages} />
                                    <p>/ {book.pages}</p>
                                </article>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter>
                <button type="button" className="btn btn-danger" onClick={onCancel}>Cancel</button>
                    <button type="button" className="btn btn-success"  onClick={onSave}>
                        Save
                    </button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    )

}