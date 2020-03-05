import React from 'react';
import { IOrganisation } from '../../types/organisation';
import BoardList from '../BoardList/BoardList';
import { flexColumn, centreTitle } from '../../styles/layout';

export interface OrganisationProps {
    organisation: IOrganisation
}

const Organisation = (props: OrganisationProps) => {
    return (
        <div style={flexColumn}>
            <h1 style={centreTitle}>{props.organisation.name}</h1>
            <BoardList boards={props.organisation.boards} organisationId={props.organisation.id}/>
        </div>
    )
}

export default Organisation;