import React from 'react'
import { Spinner, SpinnerWrapper } from './LoadingElements'
const Loading = () => {
    return (
        <SpinnerWrapper>
            <Spinner />
            <div>Loading...</div>
        </SpinnerWrapper>
    )
}
export default Loading
