import { UseProps } from "./_shared.type"

export interface MainProps {
}

export type UseMainProps = MainProps | undefined

export interface UseMainReturn extends UseProps {
    state: UseProps["state"] & {
    }
    controller: UseProps["controller"] & {
    }
}
