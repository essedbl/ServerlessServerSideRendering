import Image from 'next/image'
import Head from "next/head";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const urlBase = "https://main.d2efw40k4rx4wc.amplifyapp.com"


export default function David() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div>
                    <div>David Berlier</div>
                    <div>
                        <img src={`${urlBase}/david.jpg`} alt="David Berlier"  width={300} height={300}/>
                    
                    </div>
                    <div>David likes challenging architecture, and donuts.</div>
                    
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