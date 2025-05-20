import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Eye, EyeOff, Truck, Mail, Lock, Github, Twitter, User, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import AuthLayout from '../components/AuthLayout';
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/authSlice';
import Loader from '../components/Loader';

const Register = () => {

    const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth)


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })

    const { name, email, phone, password, confirmPassword } = formData

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error('Passwords Not Match!!')
        } else {
            dispatch(registerUser(formData))
        }

    }

    useEffect(() => {

        if (user) {
            navigate("/")
        }

        if (isError && message) {
            toast.error(message)
        }

    }, [user, isError, message])


    if (isLoading) {
        return <Loader />
    }


    return (
        <AuthLayout
            title="Welcome To Move It"
            subtitle="Register Here To Create New Account"
        >
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                <FormInput
                    label="name"
                    type="text"
                    placeholder="Enter your name"
                    icon={<User size={18} className="text-gray-500" />}
                    handleChange={handleChange}
                    value={name}
                />
                <FormInput
                    label="email"
                    type="email"
                    placeholder="Enter your email"
                    icon={<Mail size={18} className="text-gray-500" />}
                    handleChange={handleChange}
                    value={email}
                />
                <FormInput
                    label="phone"
                    type="text"
                    placeholder="Enter your phone number"
                    icon={<Phone size={18} className="text-gray-500" />}
                    handleChange={handleChange}
                    value={phone}
                />

                <FormInput
                    label="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    handleChange={handleChange}
                    value={password}
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
                    label="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    handleChange={handleChange}
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