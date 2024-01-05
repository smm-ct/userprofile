export default function Contact() {
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-6">Contact Us</h1>

        <form action="#" method="post">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" className="mt-1 p-2 w-full border rounded-md" />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-600 text-sm font-medium">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="4" className="mt-1 p-2 w-full border rounded-md"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">Send Message</button>
        </form>
      </div>
    </div>
  )
}
