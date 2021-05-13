import React from 'react';
import './Home.css';
import Banner from "./Banner";
import Card from "./Card";
// import airbnbs from './airbnbs.json';


function Home() {
    return (
        <div className='home'>
            
            <Banner />
            

            <div className='home__section'>
                <Card 
                    src="https://images.unsplash.com/photo-1490806230066-f7e6f7bf5052?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ca889535ea01f912f94ac4ddf0034e0&auto=format&fit=crop&w=500&q=80"
                    title="Centrally-located Manhattan studio"
                    description="Free cancellation"
                    price="$105 per night"
                />
                <Card 
                    src="https://images.unsplash.com/photo-1519424187720-db6d0fc5a5d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=19f783ae564d7c6da4777cde1a84c1c9&auto=format&fit=crop&w=500&q=80"
                    title="Denver apartment outside Union Station"
                    description=""
                    price="$130 per night"
                />
                <Card 
                src="https://images.unsplash.com/photo-1495136568018-11a54caad6b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b4d19de84a578b1175e85e0811f41c97&auto=format&fit=crop&w=500&q=80"
                title="Quaint 3-bedroom home in Gamla stan"
                description="Free cancellation"
                price="$230 per night"
                />
            </div>

            
        </div>
    )
}

export default Home