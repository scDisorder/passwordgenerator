import styles from "../styles/Home.module.css";
import {
    Button,
    Checkbox,
    Flex, HStack,
    Input, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField, NumberInputStepper,
    Stack,
    useClipboard
} from "@chakra-ui/react";
import React, { useState } from "react";

const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
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
    enableLetters: boolean,
    enableNumbers: boolean,
    enableSpecials: boolean,
    length: number): string {
    let str = '';
    if (enableLetters) {
        str += letters;
    }
    if (enableNumbers) {
        str += numbers;
    }
    if (enableSpecials) {
        str += specials;
    }
    console.log('get src string', str);
    return generateString(str, length);
}

export const PasswordGenerator = () => {

    const {onCopy, value, setValue, hasCopied} = useClipboard("");
    const [length, setLength] = useState(16);
    const [enableLetters, setEnableLetters] = useState(true);
    const [enableNumbers, setEnableNumbers] = useState(true);
    const [enableSpecials, setEnableSpecials] = useState(false);

    return (
        <>
            <div className={styles.center}>
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
                <span className="spacer"></span>
                <Flex mb={2}>
                    <HStack maxW="100px">
                        <NumberInput defaultValue={16} onChange={(e) => {setLength(parseInt(e, 10))}} min={6} max={256}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </HStack>
                    <span className="spacer"></span>
                    <Button colorScheme='blue' onClick={(e) => {
                        setValue(getSrcString(enableLetters, enableNumbers, enableSpecials, length))
                    }}>Generate</Button>
                </Flex>
                <span className="spacer"></span>
                <Stack direction='column'>
                    <Checkbox defaultChecked={enableLetters}
                              onChange={(e) => {setEnableLetters(!enableLetters)}}>Use letters (a-zA-Z)</Checkbox>
                    <Checkbox defaultChecked={enableNumbers}
                              onChange={(e) => {setEnableNumbers(!enableNumbers)}}>Use numbers (0-9)</Checkbox>
                    <Checkbox defaultChecked={enableSpecials}
                              onChange={(e) => {setEnableSpecials(!enableSpecials)}}>Use symbols (!@#%^...)</Checkbox>
                </Stack>
            </div>
        </>
    )
}

export default PasswordGenerator;
