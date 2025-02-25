import { UseHeaderReturn, UseHeaderProps } from "src/types/header.type";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

export const useHeader = (_?: UseHeaderProps): UseHeaderReturn => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const onClick = () => {
        // dispatch();
        navigate(`/`)
    }

    return {
        state: {
        },
        controller: {
            onClick,
        }
    }
}