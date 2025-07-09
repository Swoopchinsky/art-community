import React, { useState } from 'react'

export default function Zima() {
    let [zimaKa, setZimaKa] = useState(false)



    return (
        <zima>
            <div className='zima'>
                <p>reeds on kamshovaja street</p>
            </div>
            <div className='zimablock'>
                <button onClick={() => setZimaKa(zimaKa = !zimaKa)} className={`zimaBut ${zimaKa && 'active'}`} >among us</button>
                {zimaKa && (
                    <div className='zimacadr1'></div>
                )}
            </div>
        </zima>
    )
}
