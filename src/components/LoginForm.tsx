import axios  from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Card,
    CardContent,
} from "@/components/ui/card"


const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password
            });

            console.log('Login Successful', response.data);
            navigate('/dashboard')
        } catch (error) {
            console.error(error);

           if (axios.isAxiosError(error)) {
                // Use the server's response message if available, for both known and unknown errors
                const message = error.response?.data?.message || 'Authentication Failed';
                setErrorMessage(message);
            } else {
                // Handle non-Axios errors
                setErrorMessage('An error occurred. Please check your connection and try again.');
            }
        }
    }
    return (<>
        <Card className={'mt-4'}>
            <CardContent>
                <form onSubmit={handleLogin} autoComplete='off'>
                    <div className="grid gap-4 mt-4">
                        <div className="grid gap-2 ">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                placeholder="m@example.com"
                                autoComplete='off'
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
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={handlePassword}
                                autoComplete='off'
                                required />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>
                         {errorMessage && (
                            <div className="mt-2 text-red-500 text-sm text-center">
                                {errorMessage}
                            </div>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    </>);
};

export default LoginForm