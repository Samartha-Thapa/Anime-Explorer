"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Eye, EyeOff, User, Mail, Lock, Check } from "lucide-react"
import { 
    Button, 
    Input, 
    toast,
    Form, 
    FormControl, 
    FormDescription, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage } from "@/lib/components-index"
import api from "@/lib/api"
import axios from "axios"

const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(255, { message: "Username must be at most 255 characters" }),
    //   .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" }),
    email: z.string().email({ message: "Please enter a valid email address" }).max(255, {message: "Email must be at most 255 characters"}),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    //   .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    //   .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    //   .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    password_confirmation: z.string().min(8, { message: "Password must be at least 8 characters" }),
    // .refine((data) => data.password === data.password_confirmation, {
    //         message: "Password don't match",
    //         path: ["password_confirmation"],
        // }),
    // acceptTerms: z.boolean().refine((val) => val === true, {    
    //   message: "You must accept the terms and conditions",
    //     }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  })

export function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showpassword_confirmation, setShowpassword_confirmation] = useState(false)
  // const [success, setSuccess] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    //   acceptTerms: false,
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try{
        const response = await api.post("/register", data);
        localStorage.setItem("token", response.data.token);
        // setSuccess(`Welcome, ${response.data.user.name}! Registration successful.`);
        setTimeout(() => router.push("/dashboard"), 2000); // Redirect after 2 seconds
    } catch(error) {
        console.error("Error adding class:", error)   
              let errorMessage = "An error occurred while registering account."
              if (axios.isAxiosError(error)) {
                errorMessage = error.response?.data?.message || errorMessage
              }
              
              toast({
                title: "Error",
                description: errorMessage,
                variant: "destructive",
              })
            } finally {
              setIsLoading(false)
            }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-purple-100">Username</FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-purple-300" />
                  <Input
                    placeholder="Choose your hero name"
                    className="pl-10 bg-gray-800/50 border-purple-500/30 focus-visible:ring-purple-500 text-white placeholder:text-purple-300/50"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-pink-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-purple-100">Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-purple-300" />
                  <Input
                    placeholder="your.email@example.com"
                    className="pl-10 bg-gray-800/50 border-purple-500/30 focus-visible:ring-purple-500 text-white placeholder:text-purple-300/50"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-pink-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-purple-100">Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-purple-300" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="pl-10 pr-10 bg-gray-800/50 border-purple-500/30 focus-visible:ring-purple-500 text-white placeholder:text-purple-300/50"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-purple-300 hover:text-purple-100 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </FormControl>
              <FormDescription className="text-xs text-purple-300/70">
                At least 8 characters with uppercase, lowercase, and a number
              </FormDescription>
              <FormMessage className="text-pink-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-purple-100">Confirm Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Check className="absolute left-3 top-2.5 h-4 w-4 text-purple-300" />
                  <Input
                    type={showpassword_confirmation ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="pl-10 pr-10 bg-gray-800/50 border-purple-500/30 focus-visible:ring-purple-500 text-white placeholder:text-purple-300/50"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-purple-300 hover:text-purple-100 transition-colors"
                    onClick={() => setShowpassword_confirmation(!showpassword_confirmation)}
                  >
                    {showpassword_confirmation ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </FormControl>
              <FormMessage className="text-pink-400" />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 mt-6">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-purple-500/50 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-xs font-normal text-purple-200">
                  I agree to the{" "}
                  <a href="/terms" className="text-pink-400 underline-offset-4 hover:underline">
                    terms of service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-pink-400 underline-offset-4 hover:underline">
                    privacy policy
                  </a>
                </FormLabel>
              </div>
            </FormItem>
          )}
        /> */}
        <Button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white border-none shadow-lg shadow-purple-900/30"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Creating character...
            </div>
          ) : (
            "Begin Your Anime Journey"
          )}
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-purple-500/20" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-gray-900/50 px-2 text-purple-300">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="bg-gray-800/50 border-purple-500/30 text-white hover:bg-gray-700/50 hover:text-purple-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Google
          </Button>
          <Button
            variant="outline"
            className="bg-gray-800/50 border-purple-500/30 text-white hover:bg-gray-700/50 hover:text-purple-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                fill="#ffffff"
              />
            </svg>
            GitHub
          </Button>
        </div>
      </form>
    </Form>
  )
}
