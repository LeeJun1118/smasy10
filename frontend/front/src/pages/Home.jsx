import React from 'react';
import '../css/Home.css';

const Home = () => {
    return (
        <div className="imgt">

                <a href="/room/create">
                    <img src="/img/fire3.gif" alt="" onClick={handleClick} className="img"/>
                    {/*<img src="/img/make.png" className="subimg"/>*/}
                </a>

                <a href="/rooms">
                    <img src="/img/fire3.gif" alt="" onClick={handleClick} className="img"/>
                    {/*<img src="/img/enter.png" alt="" onClick={handleClick} className="subimg"/>*/}
                </a>

        </div>

    );
};
const handleClick = () => {
    console.log("Click");
}
export default Home;