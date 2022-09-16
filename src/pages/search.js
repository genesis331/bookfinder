import * as React from "react"
import HeaderComponent from "../components/header"

const SearchPage = () => {
  return (
    <main className="min-h-screen bg-light-background dark:bg-dark-background text-black dark:text-white px-12 md:px-24">
      <HeaderComponent />
    </main>
  )
}

export default SearchPage

export const Head = () => <title>BookFinder</title>
