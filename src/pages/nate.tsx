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
                title: "Nate Holcomb",
                url: `${urlBase}/nate`,
                imageUrl: `${urlBase}/nate.jpg`
            }
        }
    };
}

function Nate({data}) {
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
                    <div>Nate Holcomb</div>
                    <div>
                        <Image
                            src="/nate.jpg"
                            alt="Nate Holcomb"
                            width={300}
                            height={300}
                            priority />
                    </div>
                    <div>Nate is currently studying for an Azure cert, but he's actually hardcore AWS!</div>
                </div>
            </main>
        </div>
    )
}



export default Nate