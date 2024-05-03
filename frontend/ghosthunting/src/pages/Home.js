import React from 'react';
import VideoPlayer from '../components/videoplayer';
import ProductsFrontpage from '../components/productsFrontpage';
import Collection from '../components/collection';

function Home() {
    return (
        <div>
            <div>
            <VideoPlayer />
            </div>
            <div className='bg-white py-20 mx-36 px-96'>
                <div className='container mx-auto'>
                    <p className='text-2xl font-light text-center'>Ghosthunting er som at søge svar i det usete, hvor historie møder det mystiske, og det uforklarlige bliver vores største udfordring.</p>
                    
                </div>
                <div className='pt-9'>
                    <hr></hr>
                </div>
            </div>

                <div className='bg-gray-900 py-16'>
                    <h1 className='text-2xl pl-32 text-white text-left font-bold pb-10'>NEW ARRIVALS</h1>
                    <ProductsFrontpage numberOfProductsToShow={4} />
                </div>

                <div className='bg-white py-16'>
                    <h1 className='text-2xl pl-32 text-black text-left font-bold pb-10'>ALL COLLECTION</h1>
                    <Collection />
                </div>
                
        </div>
    );
}

export default Home;