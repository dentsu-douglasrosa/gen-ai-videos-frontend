import { UseProps } from "./_shared.type"

export interface RootProps {
}

export type UseRootProps = RootProps | undefined

export interface UseRootReturn extends UseProps {
    state: UseProps["state"] & {
        title: string
        description: string
        isLoading: boolean
        isReady: boolean
        result: any | null
        error: string | null
        promptText: string
    }
    controller: UseProps["controller"] & {
        handleInput: (value: string) => void
        generateVideo: () => void
    }
}
