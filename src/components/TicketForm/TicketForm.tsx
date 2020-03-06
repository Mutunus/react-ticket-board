import React, { useState, FormEvent } from 'react';
import { ITicket, TicketStatus } from '../../types/ticket';
import { Modal, Button } from 'react-bootstrap';

export interface TicketModalProps {
    onSubmit: Function
    onClose: Function
    ticket?: ITicket,
}

const TicketForm = (props: TicketModalProps) => {
    const { onClose, onSubmit, ticket } = props;
    const formInitState = ticket || getDefaultFormValues()
    const [formInvalid, setFormInvalidState] = useState(false)
    const [formVals, setFormVals] = useState(formInitState);

    // TODO - add status dropdown if ticket prop is provided
        
    return (
        <Modal show={true}>
            <Modal.Header closeButton>
            <Modal.Title>{ticket ? 'Update Ticket' : 'Create Ticket'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
            <form>

                <div>
                    <label>Name:</label>
                    <input name="name"  type='text' value={formVals.name} onChange={e => handleFormChange(e, formVals, setFormVals)} />
                </div>
                
                <div>
                    <label>Description:</label>
                    <textarea name="description"  value={formVals.description} onChange={e => handleFormChange(e, formVals, setFormVals)}/>
                </div>
                
                <div>
                    <label>Visible:</label>
                    <input name="visible" type='checkbox' checked={formVals.visible} onChange={e => handleFormChange(e, formVals, setFormVals)} />
                </div>
                {formInvalid ? <h4>Please fill all fields</h4> : null}
                
            </form>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={e => onClose()}>
                Close
            </Button>
            <Button variant="primary" onClick={e => submitForm(e, onSubmit, formVals, ticket, setFormInvalidState )}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

const getDefaultFormValues = (): Partial<ITicket> => ({
    name: '',
    description: '',
    visible: false,
    status: TicketStatus.TODO
})

const checkFormIsInvalid = (formVals): boolean => {
    const requiredFormInputs = ['name', 'description'];

    return requiredFormInputs.some(inputField => formVals[inputField].trim() === '')
}

const handleFormChange = (e: React.ChangeEvent<any>, formVals: Partial<ITicket>, setFormVals) => {
    const { target } = e
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const updatedVal = { [name]: value }

    setFormVals({ ...formVals, ...updatedVal })
}

const submitForm = (e: FormEvent<HTMLFormElement>, onSubmit, formVals: Partial<ITicket>, ticket: Partial<ITicket>, setFormValidState) => {
    e.preventDefault();
    e.stopPropagation();

    const formIsInvalid = checkFormIsInvalid(formVals)
    setFormValidState(formIsInvalid)
    if(formIsInvalid) return

    onSubmit({ ...ticket, ...formVals }, formVals.id)
}

export default TicketForm