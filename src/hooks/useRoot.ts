import { UseRootReturn, UseRootProps } from "src/types/root.type";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export const useRoot = (_?: UseRootProps): UseRootReturn => {
    const dispatch = useDispatch()
    const { t } = useTranslation();

    // const { id } = useParams<{ id: string }>();
    // const location = useLocation();
    // const match = location.pathname.match(/\/sample\/([^/]+)/);
    // const id = match ? match[1] : null; // eg.: .../sample/1

    return {
        state: {
            title: t("projectName"),
            description: t("projectDescription")
        },
        controller: {
        }
    }
}