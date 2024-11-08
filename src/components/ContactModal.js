import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const ContactModal = ({ isOpen, onClose }) => {
  const [feedbackStatus, setFeedbackStatus] = useState(null); // "success" or "error"
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_egguo1d', 'template_o4509zh', e.target, 'K4Qa8-okda5zsasMz')
      .then((result) => {
        setFeedbackStatus('success');
        setFeedbackMessage('Message sent successfully!');
      })
      .catch((error) => {
        setFeedbackStatus('error');
        setFeedbackMessage('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
      });
  };

  // Auto-close the modal after 5 seconds if the message is sent successfully
  useEffect(() => {
    if (feedbackStatus === 'success') {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer); // Clear timeout if modal is closed before the timer ends
    }
  }, [feedbackStatus, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="modal-box bg-white p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Aight! Get in touch with us!</h2>

        {/* Feedback Message */}
        {feedbackStatus && (
          <div className={`p-4 mb-4 rounded-lg ${feedbackStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {feedbackMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="input input-bordered w-full"
              placeholder="Your Name"
              required
              disabled={feedbackStatus === 'success'} // Disable on success
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="input input-bordered w-full"
              placeholder="Your Email Address"
              required
              disabled={feedbackStatus === 'success'} // Disable on success
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="user_phone"
              className="input input-bordered w-full"
              placeholder="Your Phone Number"
              pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" // Basic phone validation pattern
              disabled={feedbackStatus === 'success'}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              className="textarea textarea-bordered w-full"
              placeholder="What do you know?"
              rows="4"
              required
              disabled={feedbackStatus === 'success'} // Disable on success
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full" disabled={feedbackStatus === 'success'}>
            Send Message
          </button>
        </form>

        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>

        <p className='mt-6'>More old school? You can also give us a call: <a href='tel:07429339127' className='text-secondary hover:underline'>07429339127</a> or email us: <a href="mailto:joe.shipton@aight.fun" className='text-secondary hover:underline'>joe.shipton@aight.fun</a></p>
        <p></p>
      </div>
    </div>
  );
};

export default ContactModal;