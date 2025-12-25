import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type React from "react"
import { Link, useNavigate } from "react-router-dom"

type inputProps = {
	id: string
	label: string
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
	type: "text" | "email" | "password"
	placeholder?: string
}

type userManagementCardProps = {
	title: string
	paragraph: string
	otherLink: string
	otherText: string
	inputs: inputProps[]
	handleSubmit: () => void
}

const UserManagementCard = ({
	title, paragraph, otherText, otherLink, inputs, handleSubmit

}: userManagementCardProps) => {
	const navigate = useNavigate();
	return (	
    <Card className="w-full max-w-sm">
      <CardHeader className="justify-between">
        <CardTitle><h4>{title}</h4></CardTitle>
        <CardDescription>
          <p>{paragraph}</p>
        </CardDescription>
        <CardAction>
          <Button onClick={() =>  navigate(otherLink)} variant="link">{otherText}</Button>
        </CardAction>
      </CardHeader>
	  <form
	  	onSubmit={(e) => {
			e.preventDefault()
			handleSubmit()
		}}
		className="flex flex-col gap-4"
	  >
      <CardContent>
          <div className="flex flex-col gap-6">
            {inputs.map((input, index) => (
				<div key={index} className="grid gap-2">
					<Label htmlFor={input.id}>{input.label}</Label>
					<Input
						id={input.id}
						type={input.type}
						placeholder={input.placeholder}
						required
						value={input.value}
						onChange={event => input.setValue(event.target.value)}
					/>
				</div>
			))}
          </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-center gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
		<Link
			to="#"
			className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-center w-full"
		>
			Forgot your password?
		</Link>
      </CardFooter>
	  </form>
    </Card>
  )
}


export default UserManagementCard