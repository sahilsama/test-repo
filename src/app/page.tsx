// import { SignInButton } from '@clerk/nextjs'
"use client"
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      homepage
      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  )
}

export default HomePage
