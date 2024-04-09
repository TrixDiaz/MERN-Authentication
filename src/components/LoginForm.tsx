import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (<>
        <Card className={'mt-4'}>
            <CardContent>
                <div className="grid gap-4 mt-4">
                    <div className="grid gap-2 ">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <Link to="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </Link>
                        </div>
                        <Input id="password" type="password" required/>
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </div>
            </CardContent>
        </Card>
    </>);
};

export default LoginForm