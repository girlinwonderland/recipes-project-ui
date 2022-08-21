import { useParams, useNavigate } from 'react-router-dom';
import {useEffect} from "react";

export const SinglePage = () => {

    const navigate = useNavigate();
    const goToBack = navigate(-1)

    useEffect(() => {

    })

    const { id } = useParams();
    return <div>`single page ${id}`</div>
}
