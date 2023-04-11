import Image from 'next/image'
import Head from "next/head";
import { Inter } from 'next/font/google'
import { render } from 'react-dom';
import { AppProps } from 'next/app';
const inter = Inter({ subsets: ['latin'] })
//{ facts: { id: string; text: string }[]})
function Nate({ props}
    : {props:{renderDate: string, title: string, url: string, imageUrl: string}}
    )
     {
    return (
        <div>
            <Head>
                <title>Serverless ServerSide Rendering</title>
                <meta property="og:title" content={props.title + props.renderDate}/>
                <meta property="og:type" content="website" />
                <meta property="og:url" content={props.url} />
                 <meta property="og:image" content={props.imageUrl} />
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

export async function getServerSideProps() {
    const renderDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "long",
    }).format(renderDate);
    console.log(
      `SSR ran ppo on ${formattedDate}. This will be logged in CloudWatch.`
    );
    return { props: { 
        renderDate: formattedDate,
        title: "nate title",
        url: "nate website url",
        imageUrl: "nate image url"
   } 
};
  }


  export default Nate