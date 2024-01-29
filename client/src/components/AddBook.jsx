import { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Col, Row } from 'reactstrap'
import "../styles/AddBook.css"

//Ventana modal
export function AddBook({ book, ...args }) {

    const [modal, setModal] = useState(false)

    const handleClick = () => {
        setModal(!modal)
    }

    return (
        <div>
            <Button color="success" onClick={() => { setModal(!modal) }}>
                success
            </Button>
            <Modal centered={true} isOpen={modal} toggle={() => { setModal(!modal) }} {...args}>
                <ModalHeader toggle={() => { setModal(!modal) }}>Add book</ModalHeader>
                <ModalBody>
                    <Container centered={true}>
                        <Row xs="1" sm="2" md="4">
                            <Col lg="5" sm="3" md="2" >
                            <img src={book.image} alt="book image" />
                            <h3>{book.name}</h3>
                            </Col>
                            <Col md="2">
                            <h1>Rating</h1>
                            
                            <label htmlFor="pages">Total pages read</label>
                            <input type="number" name="pages"/>
                            <p>/ {book.pages}</p>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { setModal(!modal) }}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={() => { setModal(!modal) }}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}