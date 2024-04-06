import { redirect } from 'next/navigation'
import React from 'react'

function Facebook() {
    redirect("https://www.facebook.com/profile.php?id=61557840159397")
  return (
    <div>Facebook</div>
  )
}

export default Facebook