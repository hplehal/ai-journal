import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <SignUp
      signInFallbackRedirectUrl="/new-user"
      fallbackRedirectUrl={'/new-user'}
    />
  )
}
