import { Button } from "@/components/ui/button";
import useMode from "@/context/mode";

const HomePage = () => {
	const toggleMode = useMode((state) => state.toggleMode)
    return (
        <div className="">
            <h1 className="">Testing</h1>
            <Button onClick={toggleMode}>Click me!</Button>
        </div>
    );
};

export default HomePage;
