import gql from 'graphql-tag'
import { gqlClient } from '../config'
import { IBoard } from '../../types/board'

export const getBoard = async (organisationId: string, boardId: string) => {
    const query = gql` 
    query board($organisationId: ID!, $boardId: ID!) {
      board(organisationId: $organisationId, boardId: $boardId) {
        id
        name
        createdAt
        updatedAt
        tickets {
          id
          name
          description
          status
        }  
      }
    }
    `
    const { data } = await gqlClient.query({ query, variables: { organisationId, boardId }})
    return data.board as IBoard
}

export const putBoard = async (organisationId: string, input: Partial<IBoard>, boardId?: string): Promise<IBoard> => {
  const mutation = gql`
  mutation putBoard($organisationId: ID!, $boardId: ID, $input: BoardInput!) {
    putBoard(organisationId: $organisationId, boardId: $boardId, input: $input) {
      id
      name
      createdAt
      updatedAt
      tickets {
        id
        name
        description
        status
      }  
    }
  }
  `
  const { data } = await gqlClient.mutate({ mutation, variables: { organisationId, input, boardId }})
  return data.putBoard as IBoard
}