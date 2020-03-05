import React, {useEffect, useState} from 'react';
import { getOrganisation } from '../../graph-ql/organisation/organisation';
import Organisation from '../Organisation/Organisation';
import Loading from '../Loading/Loading';
import { RouteComponentProps } from 'react-router';

export interface OrganisationContainerProps extends RouteComponentProps {
    organisationId: string;
}

const OrganisationContainer = (props: OrganisationContainerProps) => {
    const { organisationId } = props;
    const [organisationState, setOrganisation] = useState()
    
    useEffect(() => {
        const request = async () => {
            const organisation = await getOrganisation(organisationId)
            setOrganisation(organisation)
        }
        request()
    }, [organisationId])

    return (
        <div>
            {!organisationState 
            ? <Loading />
            : <Organisation organisation={organisationState}/>}
        </div>
    )
}

export default OrganisationContainer