import gql from 'graphql-tag'
import { gqlClient } from '../config'
import { IOrganisation } from '../../types/organisation'

export const getOrganisation = async (organisationId: string = "806fb7b1-64fb-4ec1-853b-f4ac7554cc64") => {
    const query = gql` 
    query organisation($organisationId: ID!) {
        organisation(organisationId: $organisationId) {
          id
          name
          
          boards {
            id
            name
          }
          
        }
      }
    `
    const { data } = await gqlClient.query({query, variables: { organisationId }})
    return data.organisation as IOrganisation;
}