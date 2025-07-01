import React from 'react'
import HeaderClient from '../components/HeaderClient'
import { Outlet } from 'react-router-dom'
import FooterClient from '../components/FooterClient'

const ClientLayout = () => {
    return (
        <>
            <HeaderClient />
            <main>
                <Outlet />
                <div>ClientLayout</div>
            </main>
            <FooterClient />
        </>
    )
}

export default ClientLayout