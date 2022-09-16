import * as React from "react"
import logodark from "../images/logo-dark.png"
import logowhite from "../images/logo-white.png"

const HeaderComponent = () => {
  return (
    <div className="pt-12">
      <div className="hidden md:flex">
        <div className="flex grow items-center">
          <img alt="logo" src={logodark} className="h-10 inline-block dark:hidden"/>
          <img alt="logo" src={logowhite} className="h-10 hidden dark:inline-block"/>
        </div>
        <div className="grow">
          <div class="hidden md:flex justify-end align-middle">
            <div className="flex">
              <input type="text" placeholder="Enter Book Name or ISBN" id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" class="py-4 px-8 block w-96 h-[3rem] border-gray-200 focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-dark-field dark:border-gray-700 dark:text-dark-text-less-emphasis placeholder:text-dark-text-less-emphasis"/>
              <button type="button" class="inline-flex flex-shrink-0 justify-center items-center h-[3rem] w-[3rem] border border-transparent font-semibold bg-light-component-less-emphasis dark:bg-dark-component-less-emphasis text-white hover:bg-zinc-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex grow justify-center">
          <img alt="logo" src={logodark} className="h-10 inline-block dark:hidden"/>
          <img alt="logo" src={logowhite} className="h-10 hidden dark:inline-block"/>
        </div>
        <div className="pt-8 pb-5">
          <div className="flex flex-col gap-5">
            <input type="text" placeholder="Enter Book Name or ISBN" class="py-3 px-4 block w-full h-[3rem] text-sm border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:bg-dark-field dark:border-gray-700 dark:text-gray-400 placeholder:text-center"/>
            <button type="button" class="py-3 px-4 inline-flex h-[3rem] justify-center items-center gap-2 border border-transparent font-semibold bg-light-component-less-emphasis dark:bg-dark-component-less-emphasis text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
              <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default HeaderComponent
