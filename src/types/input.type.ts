import { UseProps } from "./_shared.type"

export interface UseInputProps {
}

export interface InputProps {
    value?: string
    label?: string
    onClickRightButton?: () => void
    handleChange: (value: string) => void
}

export interface UseInputReturn extends UseProps {
    state: UseProps["state"] & {
        inputPlaceholder: string
        label?: string
        value: string | undefined
    }
    controller: UseProps["controller"] & {
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
        onClickRightButton?: () => void
    }
}
