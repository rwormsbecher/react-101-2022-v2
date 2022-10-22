import { NavbarCompnent } from "./components/navbarComponent/NavbarComponent";
import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { SidebarComponent } from "./components/sidebarComponent/SidebarComponent";
import { MainComponent } from "./components/mainComponent/MainComponent";
import { ICity } from "./models/ICity";

import "./styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddBootcampComponent } from "./components/addBootcampComponent/AddBootcampComponent";

function App() {
    const [selectedCity, setSelectedCity] = useState({} as ICity);
    console.log("selected city", selectedCity);
    return (
        <BrowserRouter>
            <nav>
                <NavbarCompnent />
            </nav>

            <Container>
                <Row>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <SidebarComponent
                                        selectedCityHandler={setSelectedCity}
                                        currentSelectedCity={selectedCity}
                                    />
                                    <MainComponent selectedCityObject={selectedCity} />
                                </>
                            }
                        />

                        <Route
                            path="/add-bootcamp"
                            element={
                                <div className="col-12 bootcamp-container">
                                    <AddBootcampComponent />
                                </div>
                            }
                        />
                        <Route path="*" element={<p>404 route</p>} />
                    </Routes>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
