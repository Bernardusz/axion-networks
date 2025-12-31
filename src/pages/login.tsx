import UserManagementCard from "@/components/privateComponent/userManagementCard";
import { useState } from "react";
import { useHead } from "@unhead/react";

const LoginPage = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleLogin = () => {
        alert("Frontend App only !");
    };
    useHead({
        title: "Login | Axion Networks",
        meta: [
            {
                name: "description",
                content:
                    "Login to your account | A VPS deployment for you to deploy your app.",
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { name: "robots", content: "index, follow" },

            // Open Graph (Social sharing)
            { property: "og:title", content: "Login | Axion Networks" },
            {
                property: "og:description",
                content:
                    "Login to your account | A VPS deployment for you to deploy your app.",
            },
            { property: "og:type", content: "website" },
            // Twitter Card
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "Login | Axion Networks" },
            {
                name: "twitter:description",
                content:
                    "Login to your account | A VPS deployment for you to deploy your app.",
            },
        ],
        link: [
            { rel: "icon", type: "image/png", href: "/icon/Axion Icon.svg" },
        ],
    });
    return (
        <div className="page">
            <section className="section my-20 flex w-full items-center justify-center">
                <UserManagementCard
                    title="Login to your account"
                    paragraph="Enter yout username below to login to your account"
                    otherText="Sign Up"
                    otherLink="/signup"
                    inputs={[
                        {
                            id: "username",
                            label: "Username",
                            value: username,
                            setValue: setUsername,
                            type: "text",
                            placeholder: "Enter your username",
                        },
                        {
                            id: "password",
                            label: "Password",
                            value: password,
                            setValue: setPassword,
                            type: "password",
                            placeholder: "Enter your password",
                        },
                    ]}
                    handleSubmit={handleLogin}
                    buttonText="Login"
                />
            </section>
        </div>
    );
};

export default LoginPage;
