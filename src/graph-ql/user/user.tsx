import gql from 'graphql-tag'
import { gqlClient } from '../config'

export const createUser = async () => {
    const mutation = gql`{
        mutation createUser($user: UserInput!) {
            createUser(user: $user) {
                id,
                email,
                firstName,
                lastName
            }
        }
    }`
    const data = await gqlClient.mutate
}