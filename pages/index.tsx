import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import { Button, Checkbox, Input, Stack } from '@chakra-ui/react'
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import PasswordGenerator from "../components/Generator";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    function gen(): void {
        console.log('Generate!');
    }

    return (
        <>
            <Head>
                <title>Password Generator</title>
                <meta name="description" content="Generated random password"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <header className={styles.header}>
                    <h1 className={inter.className}>Password generator</h1>
                    <p>Generate and copy random password to use later</p>
                </header>

                <PasswordGenerator></PasswordGenerator>

                <DarkModeSwitch />
                <footer className={styles.footer}>
                    <p className={inter.className}>Powered by <a href="https://vercel.com" target="_blank"
                                                                 rel="noopener noreferrer">Vercel</a></p>
                </footer>
            </main>
        </>
    )
}
