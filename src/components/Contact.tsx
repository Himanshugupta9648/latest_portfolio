import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulating email sending
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);

    // In a real implementation, you would use a service like EmailJS:
    /*
    emailjs
      .send(
        'service_id',
        'template_id',
        {
          from_name: form.name,
          to_name: "Himanshu Gupta",
          from_email: form.email,
          to_email: "himanshug1030@gmail.com",
          message: form.message,
        },
        'public_key'
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, (error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
    */
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-secondary font-semibold text-lg mb-2">GET IN TOUCH</p>
          <h2 className="section-heading">Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-b from-[#1d1836] to-[#0a0a1b] p-8 rounded-xl shadow-xl h-full">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#151030] p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a 
                      href="mailto:himanshug1030@gmail.com" 
                      className="text-gray-300 hover:text-secondary transition-colors duration-200"
                    >
                      himanshug1030@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#151030] p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a 
                      href="tel:+918368416708" 
                      className="text-gray-300 hover:text-secondary transition-colors duration-200"
                    >
                      +91 8368416708
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#151030] p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Delhi, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-semibold text-white mb-4">Availability</h4>
                <p className="text-gray-300">Available for full-time opportunities and freelance projects. Feel free to reach out to discuss how we can work together!</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-b from-[#1d1836] to-[#0a0a1b] p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-[#151030] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-[#151030] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="w-full px-4 py-3 bg-[#151030] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="w-full px-4 py-3 bg-[#151030] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="py-3 px-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg text-white font-medium shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center w-full"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
                
                {success && (
                  <div className="bg-green-900 bg-opacity-20 text-green-400 p-3 rounded">
                    Thank you! I'll get back to you shortly.
                  </div>
                )}
                
                {error && (
                  <div className="bg-red-900 bg-opacity-20 text-red-400 p-3 rounded">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;