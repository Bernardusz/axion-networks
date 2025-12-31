import UserManagementCard from "@/components/privateComponent/userManagementCard";
import { useState } from "react";
import { useHead } from "@unhead/react";

const SignUpPage = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleSignUp = () => {
        alert("Frontend App only !");
    };
	useHead({
		title: "Sign Up | Axion Networks",
		meta: [
			{ name: "description", content: "Create an Account | A VPS deployment for you to deploy your app." },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "robots", content: "index, follow" },

			// Open Graph (Social sharing)
			{ property: "og:title", content: "Sign Up | Axion Networks" },
			{ property: "og:description", content: "Create an Account | A VPS deployment for you to deploy your app." },
			{ property: "og:type", content: "website" },
			// Twitter Card
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: "Sign Up | Axion Networks" },
			{ name: "twitter:description", content: "Create an Account | A VPS deployment for you to deploy your app." },
		],
		link: [
			{ rel: "icon", type: "image/png", href: "/icon/Axion Icon.svg" },
		],
		});
    return (
        <div className="page">
            <section className="section my-20 flex w-full items-center justify-center">
                <UserManagementCard
                    title="Sign Up"
                    paragraph="Enter your username, email and password to create an account"
                    otherText="Login"
                    otherLink="/login"
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
                            id: "email",
                            label: "Email",
                            value: email,
                            setValue: setEmail,
                            type: "email",
                            placeholder: "Enter your email",
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
                    handleSubmit={handleSignUp}
                    forgetPassHidden={true}
                    buttonText="Sign Up"
                />
            </section>
        </div>
    );
};

export default SignUpPage;
