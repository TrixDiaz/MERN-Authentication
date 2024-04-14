import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const RegisterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage(''); // Reset error message on new submission

        // Client-side validation for password length
        if (password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long.');
            return; // Stop the registration process if validation fails
        }

        try {
            await axios.post('http://localhost:3000/api/auth/signup', {name, email, password});
            console.log('Register Successful');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
             if (axios.isAxiosError(error)) {
                // Use the server's response message if available, for both known and unknown errors
                const message = error.response?.data?.message || 'An unexpected error occurred. Please try again.';
                setErrorMessage(message);
            } else {
                // Handle non-Axios errors
                setErrorMessage('An error occurred. Please check your connection and try again.');
            }
        }
    };

    return (<>
        <Card className="mx-auto mt-4">
            <CardContent className={'mt-4'}>
                <form onSubmit={handleRegister}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                value={name}
                                onChange={handleName}
                                placeholder="Jane Doe"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password"
                                   type="password"
                                   value={password}
                                   onChange={handlePassword}
                                   required
                            />
                        </div>
                       <div>
                            <Button type="submit" className="w-full">
                            Create an account
                        </Button>
                       </div>
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

export default RegisterForm