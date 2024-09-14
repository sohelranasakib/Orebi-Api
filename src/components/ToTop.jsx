import React, { useEffect, useState } from 'react'
import { RxCaretUp } from "react-icons/rx";

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <>
            {isVisible && <div>
                <button className="text-white bg-[#181617] flex justify-center items-center text-[27px] z-[50] fixed bottom-5 right-1 rounded-full h-12 w-12" onClick={handleToTop}><RxCaretUp className='icon2' /></button>
            </div>}
        </>
    )
}

export default ToTop
