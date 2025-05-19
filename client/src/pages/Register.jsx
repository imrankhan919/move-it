import React, { useState } from 'react';
import { Eye, EyeOff, Truck, Mail, Lock, Github, Twitter, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import AuthLayout from '../components/AuthLayout';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);


    return (
        <AuthLayout
            title="Welcome To Move It"
            subtitle="Register Here To Create New Account"
        >
            <form className="space-y-6 w-full">
                <FormInput
                    label="Name"
                    type="text"
                    placeholder="Enter your name"
                    icon={<User size={18} className="text-gray-500" />}
                />
                <FormInput
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    icon={<Mail size={18} className="text-gray-500" />}
                />
                <FormInput
                    label="Phone"
                    type="text"
                    placeholder="Enter your phone number"
                    icon={<Phone size={18} className="text-gray-500" />}
                />

                <FormInput
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"



                    icon={<Lock size={18} className="text-gray-500" />}
                    endAdornment={
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    }
                />

                <FormInput
                    label="Confirm Password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"



                    icon={<Lock size={18} className="text-gray-500" />}
                    endAdornment={
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    }
                />



                <Button type="submit" fullWidth>
                    Sign in
                </Button>





                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                        Login
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Register;