import { gql } from "apollo-boost"
import { ITicket } from "../../types/ticket"
import { gqlClient } from "../config"




export const getTicket = async (organisationId: string, ticketId: string) => {
  const query = gql` 
  query ticket($organisationId: ID!, $ticketId: ID!) {
    ticket(organisationId: $organisationId, ticketId: $ticketId) {
      id
      name
      description
      status
      visible
    }
  }
  `
  const { data } = await gqlClient.query({query, variables: { organisationId, ticketId }})
  return data.ticket as ITicket;
}

export const putTicket = async (organisationId: string, ticket: Partial<ITicket>, boardId: string, ticketId?: string): Promise<ITicket> => {
    const mutation = gql`
    mutation putTicket($organisationId: ID!, $boardId: ID!, $ticketId: ID $input: TicketInput!) {
        putTicket(organisationId: $organisationId, boardId: $boardId, ticketId: $ticketId, input: $input) {
          id
          name
          description
          status
          visible
        }
      }
    `
    // remove unnecessary ticket props
    const { id, ...input } = ticket;
    const { data } = await gqlClient.mutate({ mutation, variables: { organisationId, input, boardId, ticketId }})
    return data.putTicket as ITicket
  }

  export const deleteTicket = async (organisationId: string, ticketId: string): Promise<Partial<ITicket>> => {
    const mutation = gql`
    mutation deleteTicket($organisationId: ID!, $ticketId: ID!) {
        deleteTicket(organisationId: $organisationId, ticketId: $ticketId) {
          id
          name
        }
      }
    `
    const { data } = await gqlClient.mutate({ mutation, variables: { organisationId, ticketId }})
    return data.deleteTicket as Partial<ITicket>
  }

  