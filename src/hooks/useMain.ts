import { UseMainReturn, UseMainProps } from "src/types/main.type";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { BREAKPOINTS } from "src/constants/breakpoints";
import { setIsMobile } from "src/redux/slices/breakpoints.slice";

export const useMain = (_?: UseMainProps): UseMainReturn => {
    const { t } = useTranslation();

    // const { id } = useParams<{ id: string }>();
    const location = useLocation();
    // const match = location.pathname.match(/\/sample\/([^/]+)/);
    // const id = match ? match[1] : null; // eg.: .../sample/1

    const dispatch = useDispatch()

    const onChangeMedia = (mediaEvent: MediaQueryListEvent| MediaQueryList) => {
        dispatch(setIsMobile(mediaEvent.matches));
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${BREAKPOINTS["$breakpoint-md"]})`);

        onChangeMedia(mediaQuery)

        mediaQuery.addEventListener("change", onChangeMedia);
    }, [])

    return {
        state: {
        },
        controller: {
        }
    }
}