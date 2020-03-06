import React, { useState, ChangeEvent } from 'react';
import './BoardForm.css'
import { Modal, Button } from 'react-bootstrap';

export interface BoardFormProps {
    onSubmit: Function
    onClose: Function
}

const BoardForm = (props: BoardFormProps) => {
    const { onClose, onSubmit } = props;
    const [formVals, setFormState] = useState({name: null})
    
    return (
        <Modal show={true}>
            <Modal.Header closeButton>
            <Modal.Title>Create Board</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
                <form>
                    <label className="Label">Board Name:</label>
                    <input onChange={setFormVal(setFormState)} className="Input" placeholder="Enter Board Name" type='text'/>
                </form>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={e => onClose()}>
                Close
            </Button>
            <Button variant="primary" onClick={e => submitForm(e, onSubmit, formVals)}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
        
    )
}

const setFormVal = (setFormVals: Function) => (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setFormVals({name: target.value})
}

const submitForm = (e: React.FormEvent<HTMLFormElement>, onSubmit: Function, formVals) => {
    e.preventDefault()
    e.stopPropagation()
    const { name } = formVals
    onSubmit({name})
}

export default BoardForm;