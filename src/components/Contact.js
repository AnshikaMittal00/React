
import  { useState } from 'react';

// A small, reusable Icon component to keep the main JSX clean
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., send to an API)
    console.log("Form submitted:", formData);
    setStatus('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="bg-white font-sans p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-600 tracking-tight">
            Get In <span className="text-gray-800">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Information Section */}
          <div className="bg-pink-50 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow">
                   <Icon path="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" className="w-6 h-6 text-pink-600" />
                   <Icon path="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" className="w-6 h-6 text-pink-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
                  <p className="text-gray-600">R-1/120, Raj Nagar, Ghaziabad, Uttar Pradesh, 201002</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                 <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow">
                   <Icon path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" className="w-6 h-6 text-pink-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">support@biterun.com</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start">
                 <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow">
                   <Icon path="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" className="w-6 h-6 text-pink-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">+91 120 456 7890</p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"/>
              </div>
              <div>
                <label htmlFor="email" className="font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"/>
              </div>
              <div>
                <label htmlFor="message" className="font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full py-3 px-4 font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-transform transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </form>
            {status && <p className="mt-4 text-center text-green-600">{status}</p>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

