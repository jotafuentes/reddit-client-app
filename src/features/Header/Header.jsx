import React from "react";
import { FaReddit } from 'react-icons/fa'





export const Header = () => {
    return (
        <header className="flex justify-center align-middle gap-4 h-8 mt-4  shadow-md font-sans">
            <div className="flex gap-4 justify-center align-middle">
                <FaReddit 
                    className='text-2xl text-blue-500'
                />
                <h1>Reddit Lite</h1>
            </div>
            <form>
                <input
                  className=" outline-2 outline rounded-2xl shadow-sm bg-gray-100 pl-2"                  
                  type="text"
                  placeholder="Search"
                />
                <button
                type="submit">

                </button>
            </form>
        </header>
    )
}