"use client";
import React, { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const validateForm = () => {
    let isValid = true;
    const newFormData = { ...formData };

    // Name validation
    if (!formData.name.value.trim()) {
      newFormData.name.error = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.value.trim()) {
      newFormData.email.error = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email.value)) {
      newFormData.email.error = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!formData.message.value.trim()) {
      newFormData.message.error = "Message is required";
      isValid = false;
    }

    setFormData(newFormData);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });
      // testes

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Track successful form submission
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submission', {
          'event_category': 'Contact',
          'event_label': 'Contact Form Success'
        });
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      setFormData(defaultFormState);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);

    } catch (error) {
      // Track form submission errors
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_error', {
          'event_category': 'Contact',
          'event_label': 'Contact Form Error'
        });
      }
      
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });

      // Also clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
};

  const handleChange = (
    field: keyof typeof defaultFormState,
    value: string
  ) => {
    setFormData({
      ...formData,
      [field]: {
        value,
        error: "",
      },
    });
  };

  return (
    <div className="w-full mx-auto">
      {submitStatus.type && (
        <div
          className={`flex absolute top-4 items-center p-2 mb-6 rounded-md ${
            submitStatus.type === "success"
              ? "bg-green-100 dark:bg-green-800"
              : "bg-red-100 dark:bg-red-800"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
          )}
          <p className="ml-2 text-sm text-neutral-700 dark:text-neutral-300">
            {submitStatus.message}
          </p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full bg-neutral-100 dark:bg-zinc-800 dark:text-zinc-400 dark:focus:ring-zinc-700 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 ${
                formData.name.error
                  ? "border-red-500 dark:border-red-400 border-2"
                  : ""
              }`}
              value={formData.name.value}
              onChange={(e) => handleChange("name", e.target.value)}
              disabled={isSubmitting}
            />
            {formData.name.error && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                {formData.name.error}
              </p>
            )}
          </div>

          <div className="flex-1">
            <input
              type="email"
              placeholder="Your email address"
              className={`w-full bg-neutral-100 dark:bg-zinc-800 dark:text-zinc-400 dark:focus:ring-zinc-700 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 ${
                formData.email.error
                  ? "border-red-500 dark:border-red-400 border-2"
                  : ""
              }`}
              value={formData.email.value}
              onChange={(e) => handleChange("email", e.target.value)}
              disabled={isSubmitting}
            />
            {formData.email.error && (
              <p className="mt-1 text-xs text-red-500 dark:text-red-400">
                {formData.email.error}
              </p>
            )}
          </div>
        </div>

        <div>
          <textarea
            placeholder="Your Message"
            rows={10}
            className={`w-full bg-neutral-100 dark:bg-zinc-800 dark:text-zinc-400 dark:focus:ring-zinc-700 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 ${
              formData.message.error
                ? "border-red-500 dark:border-red-400 border-2"
                : ""
            }`}
            value={formData.message.value}
            onChange={(e) => handleChange("message", e.target.value)}
            disabled={isSubmitting}
          />
          {formData.message.error && (
            <p className="mt-1 text-xs text-red-500 dark:text-red-400">
              {formData.message.error}
            </p>
          )}
        </div>

        <button
          className="w-full px-2 py-2 bg-neutral-100 dark:bg-zinc-800 dark:text-zinc-400 dark:focus:ring-zinc-700 rounded-md font-bold text-neutral-500 hover:bg-neutral-200 dark:hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;