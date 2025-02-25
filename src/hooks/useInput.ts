import { t } from 'i18next';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/types/redux.type';
import { UseInputReturn } from "src/types/input.type";

export const useInput = (): UseInputReturn => {
    // const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setValue(value);
    };

    const onClickRightButton = () => {

    };

    return {
        state: {
            typeSomething: t('typeSomething'),
        },
        controller: {
            handleChange,
            onClickRightButton,
        }
    }
}