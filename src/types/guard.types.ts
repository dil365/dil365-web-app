import type { ReactElement } from "react"

export type GuardPropsType = {
  children: ReactElement,
  config: {
    path: string,
    middleware: () => boolean | void | Promise<void> | Promise<boolean>,
    isAuthRequired: boolean,
  }
}
