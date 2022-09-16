import * as React from "react"
import FooterComponent from "../components/footer"
import logodark from "../images/logo-dark.png"
import logowhite from "../images/logo-white.png"

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-light-background dark:bg-dark-background text-black dark:text-white">
      <div className="flex flex-col min-h-screen">
        <section className="flex grow text-center justify-around items-center">
          <div className="inline-block w-9/12 md:w-8/12">
            <div>
              <img alt="logo" src={logodark} className="w-10/12 md:w-96 inline-block dark:hidden"/>
              <img alt="logo" src={logowhite} className="w-10/12 md:w-96 hidden dark:inline-block"/>
            </div>
            <div className="mt-10">
              <div>
                <div class="hidden md:flex rounded-md">
                  <input type="text" placeholder="Enter Book Name or ISBN" id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" class="py-4 px-8 block w-full border-gray-200 rounded-l-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-dark-field dark:border-gray-700 dark:text-dark-text-less-emphasis"/>
                  <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-[4rem] w-[4rem] rounded-r-md border border-transparent font-semibold bg-light-component-less-emphasis dark:bg-dark-component-less-emphasis text-white hover:bg-zinc-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-6 md:hidden">
                  <input type="text" placeholder="Enter Book Name or ISBN" class="py-3 px-4 block w-full h-[3rem] text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-dark-field dark:border-gray-700 dark:text-gray-400 placeholder:text-center"/>
                  <button type="button" class="py-3 px-4 inline-flex h-[3rem] justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-light-component-less-emphasis dark:bg-dark-component-less-emphasis text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex-none">
          <FooterComponent />
        </section>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>BookFinder</title>
