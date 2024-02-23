'use client'

import { useEffect } from 'react'

type Props = {
  error: Error
  reset (): void
}

export default function Error ({ error, reset }: Props) {

  useEffect(() => {
    console.error(error)
    alert('Error! Check the console.')
  }, [error])

  return (
    <div>
      {String(error)}
    </div>
  )
}
