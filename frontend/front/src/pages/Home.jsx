import React from 'react';

const Home = () => {
    return (
            <div className="img">
                <a href="/makeAroom">
                    <img src="/img/fire.jpg" alt="" onClick={handleClick}/>
                </a>
                <a href="/enterAroom">
                    <img src="/img/fire.jpg" alt="" onClick={handleClick}/>
                </a>
            </div>
    );
};
const handleClick = () => {
    console.log("Click");
}
export default Home;