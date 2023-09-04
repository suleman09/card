import React from "react";

function NavBar() {
    return (
        <>
            <div className="container">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item"><button href="#" className=" btn btn-secondary" aria-current="page">Home</button></li>
                        <li className="nav-item"><a href="#faq" className="nav-link link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">FAQs</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">About</a></li>
                    </ul>
                </header>
            </div>
        </>
    )
}

export default NavBar;