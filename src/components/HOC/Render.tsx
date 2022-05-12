import React, { useEffect, useState } from 'react'

export interface RenderProps {
    client?: boolean
    server?: boolean
    children: React.ReactElement
}

const Render: React.FC<RenderProps> = (props) => {
    const { client, server, children } = props
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => setIsMounted(true), [])

    if (!isMounted && client) {
        return null
    }

    if (isMounted && server) {
        return null
    }

    return children
}

export default Render
