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
                title: "Bob Dhaens",
                url: `${urlBase}/bob`,
                imageUrl: `${urlBase}/bob.jpg`
            }
        }
    };
}

export default function Bob() {
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
                    <div>Bob Dhaens, Emeritus</div>
                    <div>
                        <Image
                            src="/bob.jpg"
                            alt="Bob Dhaens"
                            width={300}
                            height={300}
                            priority />
                    </div>
                    <div>Bob has retired, and he is now living the good life</div>
                </div>
            </main>

        </div>
    )
}