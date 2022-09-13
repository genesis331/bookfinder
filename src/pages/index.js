import * as React from "react"
import FooterComponent from "../components/footer"

const IndexPage = () => {
  return (
    <main className="min-h-screen bg-light-background dark:bg-dark-background text-black dark:text-white">
      <div className="flex flex-col min-h-screen">
        <section className="flex grow text-center justify-around items-center">
          <div className="inline-block w-8/12">
            <div>
              LOGO
            </div>
            <div className="mt-10">
              <div className="flex flex-col lg:flex-row h-36 lg:h-[4.5rem]">
                <input className="h-full px-12 grow text-light-text-less-emphasis bg-light-field dark:bg-dark-field dark:text-dark-text-less-emphasis"/>
                <div className="h-16"></div>
                <button className="h-full grow bg-light-component-less-emphasis dark:bg-dark-component-less-emphasis text-white lg:grow-0 aspect-auto lg:aspect-[1/1]">1</button>
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
