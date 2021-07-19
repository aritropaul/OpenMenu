import Head from 'next/head'
import Category from '../components/foodCategory'
import menu from './menu.json'

export default function Home() {

  const categories = menu.map((category, index) => {
    return <Category key={index} title={category.title} items={category.items}></Category>
  });

  console.log(categories)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white dark:bg-gray-900">
      <Head>
        <title>OpenMenu - Built with Next.js and Tailwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-20 mb-10">
        <h1 className="text-6xl font-bold dark:text-white">
          Welcome to OpenMenu
        </h1>
        <h6 className="text-base font-semibold p-4 dark:text-gray-300">
          Host an instance of this to serve your own purpose
        </h6>
      </header>
      {categories}
      <footer className="mb-10 mt-10">
        <span className="text-xs font-medium m-4 dark:text-gray-600">Made with ❤️ by Aritro Paul</span>
      </footer>
    </div>
  )
}
