import React, { LegacyRef, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   // Récupérer les données du formulaire
  const formData = new FormData(e.target as HTMLFormElement);
  const formObject: { [key: string]: string } = {};
  formData.forEach((value, key) => {
    formObject[key] = value as string;
  });

  // Ajouter des valeurs hors formulaire
  formObject["app_name"] = "Portfolio";

  emailjs
    .send("service_erxgbwh", "template_zqmjxft", formObject, "C-5EKvRey2-TwNGR2")
    .then(
      () => {
        toast.success("Email envoyé !");
        (e.target as EventTarget & HTMLFormElement).reset();
      },
      () => {
        toast.error("Échec de l'envoi !");
      }
    );
  };

  return (
    <section className="w-full md:w-[80%]">
      <h2 className="font-bold text-3xl text-center mb-7 mt-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Let's Create Something Amazing
      </h2>
      <div
        className="absolute right-1/4 bottom-1/4 floating-element w-full"
        style={{ animationDelay: "-2s" }}
      >
        <div className="w-6 h-6 rounded-full bg-pink-500/20 backdrop-blur-sm" />
      </div>
      <div className="w-full mx-auto">
        <div className="form-container w-full">
          <div className="relative bg-blue-900/10 backdrop-blur-sm rounded-xl p-8 shadow-lg z-10">
            <form
              className="space-y-6"
              hx-post="/submit-form"
              hx-swap="outerHTML"
              hx-indicator="#loading"
              ref={form as unknown as LegacyRef<HTMLFormElement> | undefined}
              onSubmit={sendEmail}
            >
              <div className="input-effect group">
                <label className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-purple-400 transition-colors">
                  Your Name
                </label>
                <div className="relative">
                  <span className="input-icon">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Smith"
                    className="form-input w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border-0 focus:ring-2 focus:ring-purple-600/50 transition-all placeholder-gray-500"
                    required
                  />
                </div>
              </div>
              <div className="input-effect group">
                <label className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-purple-400 transition-colors">
                  Email Address
                </label>
                <div className="relative">
                  <span className="input-icon">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="john@example.com"
                    className="form-input w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border-0 focus:ring-2 focus:ring-purple-600/50 transition-all placeholder-gray-500"
                    required
                  />
                </div>
              </div>
              <div className="input-effect group">
                <label className="block text-sm font-medium text-gray-400 mb-2 group-hover:text-purple-400 transition-colors">
                  Your Message
                </label>
                <div className="relative">
                  <span className="input-icon top-3 transform-none">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </span>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="form-input w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border-0 focus:ring-2 focus:ring-purple-600/50 transition-all placeholder-gray-500"
                    defaultValue={""}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="group w-full bg-blue-900 text-white px-6 py-3 rounded-lg transition-all hover:from-purple-700 hover:to-pink-700 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-purple-600/50"
              >
                <span className="flex items-center justify-center">
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <form
      ref={form as unknown as LegacyRef<HTMLFormElement> | undefined}
      onSubmit={sendEmail}
      className="flex flex-col gap-3 w-full md:w-[70%]"
    >
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        className="rounded-lg bg-indigo-950"
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="rounded-lg bg-indigo-950"
        required
      />
      <label>Message</label>
      <textarea name="message" className="rounded-lg bg-indigo-950" required />
      <div className="flex justify-center w-full p-3">
        <input
          type="submit"
          value="Send"
          className="w-max text-indigo-500 font-mono font-bold cursor-pointer"
        />
      </div>
    </form>
  );
}
