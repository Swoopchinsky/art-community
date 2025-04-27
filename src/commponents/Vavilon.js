import React, { useState } from 'react'

export default function Vavilon() {

    let [vavYo1, setVavYo1] = useState(false)
    let [vavYo2, setVavYo2] = useState(false)
    let [vavYo3, setVavYo3] = useState(false)
    let [vavYo4, setVavYo4] = useState(false)

    return (
        <vavilon>
            <div className='vav'>
                <p>Vavilon</p>
            </div>
            <div className='vavblock'>
                <button onClick={() => setVavYo1(vavYo1 = !vavYo1)} className={`vavbut1 ${vavYo1 && 'active'}`} >white sea</button>
                {vavYo1 && (
                    <div className='vav1'>
                        <button onClick={() => setVavYo2(vavYo2 = !vavYo2)} className={`vavbut2 ${vavYo2 && 'active'}`} >island</button>
                        {vavYo2 && (
                            <div className='vav2'>
                                <button onClick={() => setVavYo3(vavYo3 = !vavYo3)} className={`vavbut3 ${vavYo3 && 'active'}`} >trail</button>
                                {vavYo3 && (
                                    <div className='vav3'>
                                        <button onClick={() => setVavYo4(vavYo4 = !vavYo4)} className={`vavbut4 ${vavYo4 && 'active'}`} >maze</button>
                                        {vavYo4 && (
                                            <div className='vav4'>
                                                <p className='vavtext'>
                                                    Pomor secrets
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </vavilon>
    )
}
