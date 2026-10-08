"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { loginSchema } from "../../utils/validation";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [authError, setAuthError] = useState('');
    const router = useRouter();

    // Setup form validation using react-hook-form and Zod
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });

    // Handle form submission and mock authentication check
    const onSubmit = (data) => {
        setAuthError('');
        if (data.email === 'test@example.com' && data.password === 'Password123') {
            localStorage.setItem('token', 'mock-jwt-token');
            router.replace('/menu'); // Overwrites login history instead of pushing
        } else {
            setAuthError('Invalid credentials. Use test@example.com / Password123');
        }
    };

    const loginAsGuest = () => {
        localStorage.setItem('token', 'guest-token');
        router.replace('/menu'); 
    };

    // Handler for secondary UI buttons/mockup flows
    const handleMockFeature = (featureName) => {
        alert(`${featureName} flow would open here.`);
    };

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Authentication error banner */}
                {authError && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
                        {authError}
                    </div>
                )}

                {/* Email input field */}
                <Input
                    label="Email"
                    placeholder="Mail ID"
                    type="email"
                    error={errors.email?.message}
                    {...register('email')}
                />

                {/* Password input field with show/hide toggle */}
                <div className="space-y-1">
                    <Input
                        label="Password"
                        placeholder="Password"
                        type={showPassword ? 'text' : 'password'}
                        error={errors.password?.message}
                        {...register('password')}
                        rightIcon={
                            <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        }
                    />
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => handleMockFeature('Alternate Login')}
                            className="text-sm text-[#DC2626] hover:underline"
                        >
                            Use Email-ID Instead
                        </button>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center space-x-4 my-6 text-gray-400">
                    <span>Or</span>
                </div>

                {/* Social media mock login buttons */}
                <div className="flex justify-center gap-4 mb-6">
                    <button
                        type="button"
                        onClick={() => handleMockFeature('Facebook Login')}
                        className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <FaFacebook className="text-blue-600" size={24} />
                    </button>
                    <button
                        type="button"
                        onClick={() => handleMockFeature('Telegram Login')}
                        className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <FaTelegramPlane className="text-blue-400" size={24} />
                    </button>
                    <button
                        type="button"
                        onClick={() => handleMockFeature('Google Login')}
                        className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <FcGoogle size={24} />
                    </button>
                </div>

                {/* Terms and conditions agreement disclaimer */}
                <p className="text-xs text-gray-600 text-center leading-relaxed">
                    By ordering, You have Read and Agreement to Our{' '}
                    <button type="button" onClick={() => handleMockFeature('Terms')} className="text-[#DC2626] font-semibold hover:underline">Terms of Use</button> and{' '}
                    <button type="button" onClick={() => handleMockFeature('Privacy')} className="text-[#DC2626] font-semibold hover:underline">Privacy Policy</button>
                </p>

                {/* Action buttons */}
                <div className="pt-4 space-y-3">
                    <Button type="submit">
                        Submit
                    </Button>
                    <Button type="button" variant="ghost" onClick={loginAsGuest}>
                        Sign as Guest
                    </Button>
                </div>
            </form>
        </div>
    );
};