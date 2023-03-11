// @ts-nocheck
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next";
import { getProviders, signIn } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextAuth]";
import Google from "next-auth/providers/google";

import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

import { useState } from "react";

export default function SignIn({
    providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "7px",
                }}
            >
                <div
                    style={{
                        marginTop: "7px",
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                        backgroundColor: "#dcdcdc",
                        padding: "30px",
                    }}
                >
                    <input
                        type="text"
                        style={{
                            padding: "10px",
                            fontSize: "18px",
                            marginBottom: "10px",
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <input
                        type="password"
                        style={{
                            padding: "10px",
                            fontSize: "18px",
                            marginBottom: "10px",
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button
                        style={{
                            padding: "10px",
                            fontSize: "18px",
                            marginBottom: "10px",
                            border: "none",
                            color: "white",
                            backgroundColor: "#14b814",
                        }}
                        onClick={() =>
                            logInWithEmailAndPassword(email, password)
                        }
                    >
                        Login
                    </button>
                    <button
                        style={{
                            fontSize: "18px",
                            marginBottom: "10px",
                            border: "none",
                            color: "white",
                            backgroundColor: "#4285f4",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                        }}
                        onClick={() => signIn("google")}
                    >
                        <GoogleIcon
                            style={{
                                paddingRight: "28px",
                                fontSize: "60px",
                            }}
                        ></GoogleIcon>
                        <p>Login with Google</p>
                    </button>
                    <button
                        style={{
                            fontSize: "18px",
                            marginBottom: "10px",
                            border: "none",
                            color: "white",
                            backgroundColor: "black",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "center",
                        }}
                        onClick={() => signIn("github")}
                    >
                        <GitHubIcon
                            style={{
                                fontSize: "60px",
                                paddingRight: "28px",
                            }}
                        ></GitHubIcon>
                        <p>Login with GitHub</p>
                    </button>
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    );

    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    if (session) {
        return { redirect: { destination: "/" } };
    }

    const providers = await getProviders();

    return {
        props: { providers: providers ?? [] },
    };
}
