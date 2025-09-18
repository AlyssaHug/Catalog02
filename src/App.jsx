import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./Buttons";
import Banner from "./Banner";
import Card from "./Card";

function App() {
    return (
        <body>
            <main>
                <div className='header'>
                    <Banner text='Book Catalog'></Banner>
                </div>
                <div className='container'>
                    <Button
                        size='large'
                        value='New'></Button>
                    <Card
                        src='programming.png'
                        text='By Jonathan Bartlett'
                        href='https://itbook.store/books/9781484287507'></Card>
                    <Card
                        src='software.png'
                        text='By Panagiotis Leludas'
                        href='https://itbook.store/books/9781484295137'></Card>
                </div>
                <div className='footer'>
                    <Banner text='Alyssa Huggins, 2025'></Banner>
                </div>
                <div className='background'></div>
            </main>
        </body>
    );
}

export default App;
