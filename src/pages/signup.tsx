import UserManagementCard from "@/components/privateComponent/userManagementCard";
import { useState } from "react";

const SignUpPage = () => {
	const [ username, setUsername ] = useState<string>("");
	const [ email, setEmail ] = useState<string>("");
	const [ password, setPassword ] = useState<string>("");
	const handleSignUp = () => {
		alert("Frontend App only !")
	}
    return (
		<div className="page">
			<section className="section w-full items-center justify-center flex my-20">
				<UserManagementCard
				title="Sign Up"
				paragraph="Enter your username, email and password to create an account"
				otherText="Login"
				otherLink="/login"
				inputs={[
					{id: "username", label: "Username", value: username, setValue: setUsername, type: "text", placeholder: "Enter your username"},
					{id: "email", label:"Email", value: email, setValue: setEmail, type: "email", placeholder: "Enter your email"},
					{id: "password", label: "Password", value: password, setValue: setPassword, type: "password", placeholder: "Enter your password"},
				]}
				handleSubmit={handleSignUp}
			/>
			</section>
		</div>
	);
};

export default SignUpPage;
