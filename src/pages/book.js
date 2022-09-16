import * as React from "react"
import HeaderComponent from "../components/header"

const BookPage = () => {
  return (
    <main className="min-h-screen bg-light-background dark:bg-dark-background text-black dark:text-white px-12 md:px-24">
      <HeaderComponent />
    </main>
  )
}

export default BookPage

export const Head = () => <title>BookFinder</title>
