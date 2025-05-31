function Contact() {
  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4 text-primary-700">Contact Us</h2>
      <form className="bg-white rounded-xl shadow p-6 space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input type="text" className="input" placeholder="Your name" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input type="email" className="input" placeholder="you@email.com" required />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea className="input" rows="4" placeholder="Your message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">Send Message</button>
      </form>
    </div>
  );
}

export default Contact; 