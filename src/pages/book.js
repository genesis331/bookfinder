import * as React from "react"
import HeaderComponent from "../components/header"
import testcover from "../images/testcover.png"

const BookPage = () => {
  return (
    <main className="min-h-screen bg-light-background dark:bg-dark-background text-black dark:text-white px-12 md:px-24">
      <HeaderComponent />
      <div className="flex flex-col md:flex-row md:gap-32 pt-4">
        <div className="md:w-3/12">
          <img alt="book cover" src={testcover} draggable={false} className="w-full"/>
        </div>
        <div className="grow py-10">
          <div>ISBN</div>
          <div>Book Title</div>
          <div>Author and Date</div>
          <div className="text-xs border-b-2 border-black dark:border-white mb-4">&nbsp;</div>
          <div>Book Description</div>
          <div>Book Rating</div>
          <div>Download Section</div>
        </div>
      </div>
    </main>
  )
}

export default BookPage

export const Head = () => <title>BookFinder</title>
