import React from 'react';
import {Link} from 'react-router-dom';
import {FcFinePrint} from 'react-icons/fc';

function Home() {
    return (
        <>
            <section className='heading'>
                <h1>Welcome to the FORGE App</h1>
                <p>What are you up to today?</p>
            </section>

            <section className="form">
                <Link to='/activities' className='btn btn-block btn-std'>
                    <FcFinePrint size={30} /> Check My Activities
                </Link>
            </section>
        </>
    )
}

export default Home;