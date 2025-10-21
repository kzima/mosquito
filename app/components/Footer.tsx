export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} AI Consulting. All rights reserved.</p>
        <p className="mt-2">Perth WA, Australia</p>
      </div>
    </footer>
  )
}
