import { useState } from "react";
import sendMessage, { MessageType } from "../api/send-message";

// TODO: add message submitted information message somewhere
function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  function handleSendMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const msgObject: MessageType = {
      email,
      name,
      message,
      subject,
    };

    sendMessage(msgObject);

    setEmail("");
    setName("");
    setMessage("");
    setSubject("");
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center flex-col gap-10"
    >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-3xl lg:text-6xl tracking-tight font-extrabold text-center text-white ">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300  sm:text-xl">
          Get in touch, let&apos;s talk. Fill in the details and I&apos;ll get
          back to you as soon as I can.
        </p>
        <form onSubmit={(e) => handleSendMessage(e)} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white "
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Topic of your message"
              value={subject}
              onChange={(e) => setSubject(e.currentTarget.value)}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave your message..."
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
