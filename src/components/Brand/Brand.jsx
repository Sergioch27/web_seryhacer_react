import { useNavigate } from "react-router-dom"



const Brand = (props) => {
    const navigate = useNavigate()
    return (
        <span  onClick={() => navigate('/')}>
            <img src={props.logoimg} alt={props.alt}/>
        </span>
    )
}

export default Brand