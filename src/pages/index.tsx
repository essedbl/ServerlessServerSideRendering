import Image from 'next/image'
import Head from "next/head";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const urlBase = "https://main.d2efw40k4rx4wc.amplifyapp.com"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Serverless ServerSide Rendering</title>
        <meta property="og:title" content="Main Site Title" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://localhost" />
        <meta property="og:image" content={`${urlBase}/slalom.png`} />
        <meta name="description" content="This is a generic description." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Serverless Server-Side Rendering, with AWS Amplify and NextJS
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://slalom.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="relative "
                src={`${urlBase}/slalom.png`}
                alt="Next.js Logo"
                width={141}
                height={70}
              />
            </a>
          </div>
        </div>

        <div className="relative  place-items-center ">
          <p className='margin-bottom-10'>
            Have you ever wondered how previews work when you share a link? Do you ever noticed that when you send a link in a text messsage,
            or share a link on social media, that sometimes there is a beautiful preview, and sometimes there isn't? 
            The preview is provided by something called Open Graph Protocol (<a href="https://ogp.me">https://ogp.me/</a>). 
          </p>
          <p className='margin-bottom-10'>
            Open Graph relies on Meta tags in the HTML. This can be a problem for SPA websites, where the initial HTML is delivered once,
            and subsequent changes are made via JavaScript. 
          </p>
          <p className='margin-bottom-10'>
            Consider a React application. The "app" is downloaded once, and subsequent changes are made locally, using JavaScript and new data fetched
            from API calls. What this means is, the Meta tags are only fetched on the initial download.
          </p>
          <p className='margin-bottom-10'>
            Why is this an issue? Well, what if you browse to a page on a web site... For example, a particular news article. If you share the 
            link to that article, the Meta tags that are delivered to the client are the main site's meta tags... The index.tsx document, for example.
          </p>
          <p className='margin-bottom-10'>
            In order to deliver a preview (hense new Meta tags) for a specific page, we need to be able to inject new meta tags
            into the HEAD of the document, and doing so requires Server Side action...
          </p>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
            href="/dan"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              Dan{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Learn more about Nate
            </p>
          </a>

          <a
            href="/nate"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              Nate{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Learn more about Nate
            </p>
          </a>
          <a
            href="/david"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              David{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Learn more about Nate
            </p>
          </a>
          <a
            href="/brett"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              Brett{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Learn more about Brett
            </p>
          </a>

          <a
            href="/bob"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
              Bob{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              Learn more about Bob
            </p>
          </a>

        </div>
      </main>
    </div>
  )
}
