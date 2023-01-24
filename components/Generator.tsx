import styles from "../styles/Home.module.css";
import {
    Button,
    Checkbox,
    Flex,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Stack,
    Text,
    useClipboard
} from "@chakra-ui/react";
import React, { useState } from "react";

const letters = 'qwertyuiopasdfghjklzxcvbnm';
const numbers = '0123456789';
const specials = '!@#$%^&*()_-+=?;:][{}';

function generateString(src: string, len: number): string {
    let result = '';
    for (let i = 0; i < len; i++) {
        const randInd = Math.floor(Math.random() * src.length);
        result += src[randInd];
    }
    return result;
}

function getSrcString(
    enableLetters: boolean = true,
    enableCapitalizedLetters: boolean = true,
    enableNumbers: boolean = true,
    enableSpecials: boolean = false
): string {
    let str = '';
    if (enableLetters) {
        str += letters;
    }
    if (enableCapitalizedLetters) {
        str += letters.toUpperCase();
    }
    if (enableNumbers) {
        str += numbers;
    }
    if (enableSpecials) {
        str += specials;
    }
    return str;
}

interface GeneratorOpts {
    length?: number;
    letters?: boolean;
    lettersCap?: boolean;
    numbers?: boolean;
    specials?: boolean;
    save?: boolean;
}

const defaultState: GeneratorOpts = {
    length: 16,
    letters: true,
    lettersCap: true,
    numbers: true,
    specials: false,
};

function generatePassword(opts: GeneratorOpts): string {
    return generateString(
        getSrcString(opts.letters, opts.lettersCap, opts.numbers, opts.specials),
        length
    );
}

export const PasswordGenerator = () => {

    const {onCopy, value, setValue, hasCopied} = useClipboard("");
    const [length, setLength] = useState(16);
    const [enableLetters, setEnableLetters] = useState(true);
    const [enableLettersCap, setEnableLettersCap] = useState(true);
    const [enableNumbers, setEnableNumbers] = useState(true);
    const [enableSpecials, setEnableSpecials] = useState(true);

    return (
        <>
            <div className={styles.center}>
                <Stack direction='column'>
                    <Text>Specify password length:</Text>
                    <NumberInput defaultValue={16} onChange={(e) => {
                        setLength(parseInt(e, 10))
                    }} min={6} max={256}>
                        <NumberInputField/>
                        <NumberInputStepper>
                            <NumberIncrementStepper/>
                            <NumberDecrementStepper/>
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>
                <span className="spacer"></span>
                <Text>Extra conditions:</Text>
                <Stack direction='column'>
                    <Checkbox defaultChecked={enableLetters}
                              onChange={(e) => {
                                  setEnableLetters(!enableLetters)
                              }}>Use letters (a-z)</Checkbox>
                    <Checkbox defaultChecked={enableLettersCap}
                              onChange={(e) => {
                                  setEnableLettersCap(!enableLettersCap)
                              }}>Use letters (A-Z)</Checkbox>
                    <Checkbox defaultChecked={enableNumbers}
                              onChange={(e) => {
                                  setEnableNumbers(!enableNumbers)
                              }}>Use numbers (0-9)</Checkbox>
                    <Checkbox defaultChecked={enableSpecials}
                              onChange={(e) => {
                                  setEnableSpecials(!enableSpecials)
                              }}>Use symbols (!@#%^...)</Checkbox>
                </Stack>
                <span className="spacer"></span>
                <span className="spacer"></span>
                <Button colorScheme='blue' onClick={(e) => {
                    setValue(generatePassword({
                        length,
                        letters: enableLetters,
                        lettersCap: enableLettersCap,
                        numbers: enableNumbers,
                        specials: enableSpecials,
                    }))
                }}>Generate passphrase</Button>
                <span className="spacer"></span>
                <Flex mb={2}>
                    <Input
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        mr={2}
                    />
                    <span className="spacer"></span>
                    <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
                </Flex>
            </div>
        </>
    )
}

export default PasswordGenerator;
