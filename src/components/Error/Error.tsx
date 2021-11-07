import { ApolloError } from '@apollo/client'
import React from 'react'

interface Props {
    error: ApolloError;
}
const Error: React.FC<Props> = ({ error }) => {

    return (
        <div>
            Error {error}
        </div>
    )
}

export default Error
