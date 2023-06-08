
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { headerData } from '../../data/headerData'
import { Navbar,Landing,About,Skills,Education,Experience,Contacts,Projects,Services } from '../../components'


function Main() {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{headerData.name} - Porfolio</title>
                </Helmet>
                <Navbar />   
                <Landing />
                <About />   
                <Skills/>  
                <Education/>
                <Experience/>
                <Projects/>
                <Services/>
                <Contacts/>
            </div>
        </HelmetProvider>
    )
}

export default Main