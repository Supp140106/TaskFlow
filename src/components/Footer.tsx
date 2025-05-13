// components/Footer.tsx

export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-center space-y-4 sm:space-y-0">
          <div className="text-sm">&copy; {new Date().getFullYear()} FlowApp. All rights reserved.</div>
  
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
  
          <div className="flex space-x-4">
            {/* Replace # with your social URLs */}
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">🐦</a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-400">💻</a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">📸</a>
          </div>
        </div>
      </footer>
    );
  }
  