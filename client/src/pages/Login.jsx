import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Eye, EyeOff, Truck, Mail, Lock, Github, Twitter } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import AuthLayout from '../components/AuthLayout';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const Login = () => {

    const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth)


    const [formData, setFormData] = useState({

        email: "",
        password: "",

    })

    const { email, password } = formData

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
        dispatch(loginUser(formData))
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
            title="Welcome back"
            subtitle="Enter your credentials to access your account"
        >
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                <FormInput
                    label="email"
                    value={email}
                    handleChange={handleChange}
                    type="email"
                    placeholder="Enter your email"
                    icon={<Mail size={18} className="text-gray-500" />}
                />

                <FormInput
                    label="password"
                    value={password}
                    handleChange={handleChange}
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

                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                        Forgot password?
                    </a>
                </div>

                <Button type="submit" fullWidth>
                    Sign in
                </Button>





                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{' '}
                    <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                        Sign up
                    </Link>
                </p>
            </form>
        </AuthLayout>
    );
};

export default Login;