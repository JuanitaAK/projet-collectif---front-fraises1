import React from "react";
import Users from "../components/Users";
import Navbar from "../components/Navbar";
import AllFurnitures from "../components/AllFurnitures";
import Footer from "../components/Footer";

const Admin = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                {/* passe la const displayCartContent comme propriété de Cart pour afficher les meubles à l'intérieur du panier */}
                {/* <Cart cart={displayCartContent} /> */}
            </header>

            <body className="App-body">
                <div className="container">
                    <h1>Bienvenue sur la page admin</h1>
                    <div className="categories-admin">
                        <AllFurnitures />
                        <Users />
                    </div>
                </div>
                <Footer />
            </body>
        </div>
    );
};

export default Admin;
