import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import { Button, Checkbox, Input, Link, Stack } from '@chakra-ui/react'
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import PasswordGenerator from "../components/Generator";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    function gen(): void {
        console.log('Generate!');
    }

    return (
        <>
            <Head>
                <title>Password Generator</title>
                <meta name="description" content="Generate random password"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <DarkModeSwitch />

                <header className={styles.header}>
                    <h1 className={inter.className}>Password generator</h1>
                    <p>Generate and copy random password to use later</p>
                </header>

                <PasswordGenerator></PasswordGenerator>

                <footer className={styles.footer}>
                    <Link href='https://github.com/scDisorder/passwordgenerator' isExternal>
                        View source code (GitHub) <ExternalLinkIcon mx='2px' />
                    </Link>
                    <Link href='https://chakra-ui.com' isExternal>
                        Chakra Design system <ExternalLinkIcon mx='2px' />
                    </Link>
                    <Link href='https://vercel.com' isExternal>
                        Vercel <ExternalLinkIcon mx='2px' />
                    </Link>
                </footer>
            </main>
        </>
    )
}
