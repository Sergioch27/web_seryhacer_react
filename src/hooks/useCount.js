import { useState } from "react";

const useCount = ({ initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const decrement = ()=>{
        if(count != 0) {
            setCount(Stock=>Stock-1)
        }
    }
    const increment = () =>{
        setCount(Stock=> Stock+1)
    }
    return {
        count,
        decrement,
        increment
}
}
export default useCount