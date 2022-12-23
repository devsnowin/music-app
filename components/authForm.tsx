import {Flex, Input, Button, Heading, HStack, Text} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {FC, useState} from "react";
import {useSWRConfig} from "swr";

import {auth} from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({mode}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isloading, setIsloading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setIsloading(true);

        try {
            const res = await auth(mode, {
                name,
                email,
                password,
            } as unknown as FormData);

            setIsloading(false);
            await router.push("/");

        } catch (e) {
            console.log(e.message)
        }
    };

    return (
        <Flex
            flexDir="column"
            minH="100vh"
            w="100vw"
            bg="black"
            justify="center"
            align="center"
            gap="5rem"
        >
            <HStack>
                <Image src="/logo.png" alt="app logo" width={60} height={60}/>
                <Heading textAlign="center">Music app</Heading>
            </HStack>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "grid",
                    placeItems: "center",
                    width: "100%",
                }}
            >
                <Flex
                    w="full"
                    maxW="32rem"
                    padding="4rem"
                    bg="gray.900"
                    borderRadius="10px"
                    flexDir="column"
                    justify="center"
                    align="center"
                    gap="1rem"
                >
                    {mode === "signup" && (
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Name"
                            size="lg"
                            focusBorderColor="#6b46c1"
                        />
                    )}

                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        size="lg"
                        focusBorderColor="#6b46c1"
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        size="lg"
                        focusBorderColor="#6b46c1"
                    />
                    <Button
                        type="submit"
                        color="black"
                        w="full"
                        size="lg"
                        colorScheme="purple"
                        isLoading={isloading}
                    >
                        {mode}
                    </Button>
                    {mode === "signup" ? (
                        <Text>
                            Already have an account?
                            <Link href="/signin" style={{marginLeft: "1rem"}}>
                                SignIn
                            </Link>
                        </Text>
                    ) : (
                        <Text>
                            {`Don't have an account?`}
                            <Link href="/signup" style={{marginLeft: "1rem"}}>
                                SignUp
                            </Link>
                        </Text>
                    )}
                </Flex>
            </form>
        </Flex>
    );
};

export default AuthForm;
