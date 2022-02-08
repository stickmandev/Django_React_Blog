import React from 'react';


const MainLayout = (props) => {
    return(
        <div className="blog-container">
            <div  className="navbar">
                <a href='/'>
                <div  className="brand"> StickMan Blog </div>
                </a>
                <div  className="navRight">
                    <div  className="navLinks">
                        <a href="#" >Twitter</a>
                    </div>

                    <div  className="navLinks">
                        <a href="#" >Facebook</a>
                    </div>

                    <div  className="navLinks">
                        <a href="#" >LinkedIn</a>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    );
};

export default MainLayout;