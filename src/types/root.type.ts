import { UseProps } from "./_shared.type"

export interface RootProps {
}

export type UseRootProps = RootProps | undefined

export interface UseRootReturn extends UseProps {
    state: UseProps["state"] & {
    }
    controller: UseProps["controller"] & {
    }
}
