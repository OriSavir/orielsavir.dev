import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const text = await res.text();

      if (res.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message sent successfully!' }
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: text || 'Something went wrong. Please try again.' }
        });
      }
    } catch (_) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Something went wrong. Please try again.' }
      });
    }
    await delay(5000);
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: "" }
    });
  };

  return (
    <div 
      className="p-8 rounded-lg border border-gray-800 bg-black"
      style={{ zIndex: 10, position: 'relative' }}
    >
      <h2 className="text-2xl font-bold mb-6 text-[var(--cyber-blue)] neon-blue">Get In Touch</h2>

      <AnimatePresence>
        {status.info.msg && (
          <motion.div
            key="status-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            transition={{ duration: 0.5 }} 
            className={`mb-6 p-4 rounded ${
              status.info.error
                ? "bg-red-900 bg-opacity-20 text-red-200"
                : "bg-green-900 bg-opacity-20 text-green-200"
            }`}
          >
            {status.info.msg}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded text-white bg-gray-900 focus:ring-2 focus:ring-[var(--cyber-blue)] outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded text-white bg-gray-900 focus:ring-2 focus:ring-[var(--cyber-blue)] outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded text-white bg-gray-900 focus:ring-2 focus:ring-[var(--cyber-blue)] outline-none"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-700 rounded text-white bg-gray-900 focus:ring-2 focus:ring-[var(--cyber-blue)] outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="w-full py-3 bg-[var(--cyber-blue)] bg-opacity-20 border border-[var(--cyber-blue)] text-blue-600 hover:text-blue-500 rounded hover:bg-opacity-30 transition-all duration-300"
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
