import { UseProps } from "./_shared.type"

export interface UseInputProps {
}

export interface InputProps {
}

export interface UseInputReturn extends UseProps {
    state: UseProps["state"] & {
        typeSomething: string
    }
    controller: UseProps["controller"] & {
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
        onClickRightButton: () => void
    }
}
