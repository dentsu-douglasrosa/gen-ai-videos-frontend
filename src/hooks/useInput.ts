import { t } from 'i18next';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/types/redux.type';
import { InputProps, UseInputReturn } from "src/types/input.type";

export const useInput = (props?: InputProps): UseInputReturn => {
    // const dispatch = useDispatch();
    const [value, setValue] = useState(props?.value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;


        props?.handleChange(value)

        setValue(value);
    };

    const onClickRightButton = () => {
        props?.onClickRightButton && props.onClickRightButton()
    }

    return {
        state: {
            inputPlaceholder: t('typeSomething'),
            label: props?.label,
            value
        },
        controller: {
            handleChange,
            onClickRightButton,
        }
    }
}