import type React from "react"
import { useState } from "react"
import { submitQuery } from "../actions/submitQuery"
import Toast from "./Toast"
import Image from "next/image"

export default function Hero() {
  const [email, setEmail] = useState("")
  const [query, setQuery] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (honeypot) {
      console.log("Bot detected")
      return
    }

    if (email.length < 3 || query.length < 3) {
      setToast({ message: "Email and query must be at least 3 characters long", type: "error" })
      return
    }

    const formData = new FormData()
    formData.append("email", email)
    formData.append("query", query)

    const result = await submitQuery(formData)

    if (result.success) {
      setToast({ message: "Query submitted successfully!", type: "success" })
      setEmail("")
      setQuery("")
    } else {
      setToast({ message: "Failed to submit query. Please try again.", type: "error" })
    }
  }

  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32 min-h-screen flex items-center">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#86efac] to-[#10b981]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#86efac] to-[#10b981] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 p-8 sm:p-12">
            <div className="flex justify-center mb-8">
              <Image src="/images/design-mode/logo.png" alt="Mosquito Logo" width={200} height={50} priority />
            </div>
            <blockquote className="text-center text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl/8 mb-8">
              <p>"Transforming ideas into intelligent solutions"</p>
            </blockquote>
            <div className="text-center text-base text-gray-600 mb-8">
              <p>
                Innovation isn't about following trends<br/>it's about creating solutions that matter.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  aria-label="Email"
                />
              </div>
              <div>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Your message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  aria-label="Query"
                ></textarea>
              </div>
              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: "none" }}
                aria-hidden="true"
                tabIndex={-1}
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 shadow-md hover:shadow-lg"
              >
                Get in Touch
              </button>
            </form>
          </figure>
        </div>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  )
}
