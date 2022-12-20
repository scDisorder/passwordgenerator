import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import { Button, Checkbox, Input, Stack } from '@chakra-ui/react'
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    const [password] = useState({
        password: ''
    });

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

                <div className={styles.center}>
                    <div className={styles.row}>
                        <Input placeholder='' size="md"  />
                        <span className="spacer"></span>
                        <Button colorScheme='blue' onClick={gen}>Generate</Button>
                    </div>
                    <span className="spacer"></span>
                    <Stack direction='column'>
                        <Checkbox isDisabled defaultChecked>Use letters (a-zA-Z)</Checkbox>
                        <Checkbox isDisabled defaultChecked>Use numbers (0-9)</Checkbox>
                        <Checkbox isDisabled>Use symbols (!@#%^...)</Checkbox>
                    </Stack>
                </div>

                <div className={styles.center}>
                </div>

                <DarkModeSwitch />
                <footer className={styles.footer}>
                    <p className={inter.className}>Powered by <a href="https://vercel.com" target="_blank"
                                                                 rel="noopener noreferrer">Vercel</a></p>
                </footer>
            </main>
        </>
    )
}
