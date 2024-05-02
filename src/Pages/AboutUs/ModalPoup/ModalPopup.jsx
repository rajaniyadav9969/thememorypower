import { Modal } from "react-bootstrap";

const ModalPopup = (props) => {
    return (
        <Modal
            show={props.flag}
            onHide={props.close}
            size={props.size}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={` ${props.className}`}
        >
            <Modal.Header closeButton className="modalheader">
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.component}</Modal.Body>
        </Modal>
    );
};

export default ModalPopup;
