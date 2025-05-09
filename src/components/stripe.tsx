"use client"

import { useEffect, useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"

// This is a placeholder component to make the code work
// In a real implementation, you would use your actual Stripe publishable key
const stripePromise = loadStripe("pk_test_placeholder")

interface StripeProps {
  children: React.ReactNode;
  options?: Omit<StripeElementsOptions, "clientSecret">; // Exclude clientSecret from options
  className?: string;
}

export function Stripe({ children, options, className }: StripeProps) {
  const [clientSecret, setClientSecret] = useState("")

    // In a real implementation, you would fetch the client secret from your server
    useEffect(() => {
      setClientSecret("cs_test_placeholder");
      // async function fetchClientSecret() {
      //   try {
      //     const response = await fetch("/api/stripe/create-payment-intent", { method: "POST" });
      //     const { clientSecret } = await response.json();
      //     setClientSecret(clientSecret);
      //   } catch (error) {
      //     console.error("Failed to fetch client secret:", error);
      //   }
      // }
      // fetchClientSecret();
    }, [])

  return (
    <div className={className}>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret, ...options } as StripeElementsOptions}>
          {children}
        </Elements>
      )}
    </div>
  )
}
