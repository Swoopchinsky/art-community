import React, { useState } from 'react'
import { DiProlog } from "react-icons/di";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiGoose } from "react-icons/gi";

export default function Header() {
    let [nigaYo, setNigaYo] = useState(false)
    let [nigaYo1, setNigaYo1] = useState(false)
    let [nigaYo2, setNigaYo2] = useState(false)
    return (
        <header>
            <div>
                <span className='logo'>IT Art Community</span>
            </div>
            <BsFillPersonLinesFill onClick={() => setNigaYo(nigaYo = !nigaYo)} className={`pers ${nigaYo && 'active'}`} />
            {nigaYo && (
                <div className='pers1'>
                    salam
                </div>
            )}
            <DiProlog onClick={() => setNigaYo1(nigaYo1 = !nigaYo1)} className={`menu ${nigaYo1 && 'active'}`} />
            {nigaYo1 && (
                <div className='menu1'>
                    shalom
                </div>
            )}
            <GiGoose onClick={() => setNigaYo2(nigaYo2 = !nigaYo2)} className={`goo ${nigaYo2 && 'active'}`} />
            {nigaYo2 && (
                <div className='goo1'>
                    Гусь это не просто птица!
                </div>
            )}

            <div className='presentation'></div>

        </header>
    )
}
