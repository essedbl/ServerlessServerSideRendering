import Image from 'next/image'
import Head from "next/head";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const urlBase = "https://main.d2efw40k4rx4wc.amplifyapp.com"

export async function getServerSideProps() {
    const renderDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(renderDate);
    return {
        props: {
            data: {
                renderDate: formattedDate,
                title: "Brett Hovenkotter",
                url: `${urlBase}/brett`,
                imageUrl: `${urlBase}/brett.jpg`
            }
        }
    };
}



export default function Brett({data}) {
    return (
        <div>
            <Head>
                <title>Serverless ServerSide Rendering</title>
                <meta property="og:title" content={`${data.title} ${data.renderDate}`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={data.url} />
                <meta property="og:image" content={data.imageUrl} />
                <meta name="description" content="This is a generic description." />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div>
                    <div>Brett Hovenkotter</div>
                    <div>
                    <img src={`${urlBase}/brett.jpg`} alt="Brett Hovenkotter" width={300} height={300} />
                    
                    </div>
                    <div>Brett loves AWS Big Time, but he also loves Kotlin.</div>
                </div>
                <div>
                    <a
                        href="/"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Return Home</a>
                </div>
            </main>
        </div>
    )
}