import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useRouter } from "next/navigation"

export function useRedirect() {
  const router = useRouter()

  function goTo(path: string, options?: NavigateOptions) {
    return router.push(path, options)
  }

  return { goTo }
}
