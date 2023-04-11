import Image from 'next/image'
import Head from "next/head";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Brett() {
    return (
        <div>
            <Head>
                <title>Serverless ServerSide Rendering</title>
                <meta property="og:title" content="Main Site Title" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://localhost" />
                {/* <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}
                <meta name="description" content="This is a generic description." />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div>
                    <div>Brett Hovenkotter</div>
                    <div>
                        <Image
                            src="/brett.jpg"
                            alt="Brett Hovenkotter"
                            width={300}
                            height={300}
                            priority />
                    </div>
                    <div>Brett loves AWS Big Time, but he also loves Kotlin.</div>
                </div>
            </main>
        </div>
    )
}