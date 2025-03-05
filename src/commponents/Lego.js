import React, { useState } from 'react'

export default function Lego() {
    let [nigaLe, setNigaLe] = useState(false)
    let [nigaLe1, setNigaLe1] = useState(false)
    let [nigaLe2, setNigaLe2] = useState(false)


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
                                        <div className='cadr2'>new story</div>
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
