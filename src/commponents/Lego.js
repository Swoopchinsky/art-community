import React, { useState } from 'react'

export default function Lego() {
    let [nigaLe, setNigaLe] = useState(false)
    let [nigaLe1, setNigaLe1] = useState(false)
    let [nigaLe2, setNigaLe2] = useState(false)
    let [nigaLe3, setNigaLe3] = useState(false)
    let [nigaLe4, setNigaLe4] = useState(false)
    let [nigaLe5, setNigaLe5] = useState(false)


    return (
        <lego>
            <div className='lego'>
                <div>
                    lego club
                    <button onClick={() => setNigaLe(nigaLe = !nigaLe)} className={`le ${nigaLe && 'active'}`} >comics</button>
                    {nigaLe && (
                        <div className='episode'>
                            <button onClick={() => setNigaLe1(nigaLe1 = !nigaLe1)} className={`ep1 ${nigaLe1 && 'active'}`} >Episode 1</button>
                            {nigaLe1 && (
                                <div className='cadr1'>
                                    <div className='text1'>Marty McFly</div>
                                    <button onClick={() => setNigaLe2(nigaLe2 = !nigaLe2)} className={`but1ep1 ${nigaLe2 && 'active'}`} >go to Doc Brown</button>
                                    {nigaLe2 && (
                                        <div className='cadr2'>
                                            <div className='text2'>new adventures</div>
                                            <button onClick={() => setNigaLe3(nigaLe3 = !nigaLe3)} className={`but2ep1 ${nigaLe3 && 'active'}`} >roll</button>
                                            {nigaLe3 && (
                                                <div className='cadr3'>
                                                    <button onClick={() => setNigaLe4(nigaLe4 = !nigaLe4)} className={`but3ep1 ${nigaLe4 && 'active'}`} >put up a skate</button>
                                                    {nigaLe4 && (
                                                        <div className='cadr4'>
                                                            <div className='text4'>Dog where are you ?</div>
                                                            <button onClick={() => setNigaLe5(nigaLe5 = !nigaLe5)} className={`but4ep1 ${nigaLe5 && 'active'}`} >call Doc Brown</button>
                                                            {nigaLe5 && (
                                                                <div className='cadr5'>
                                                                    <div className='text5'>I'm here Marty</div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>


            <div className='legoblock'></div>
        </lego>
    )
}
