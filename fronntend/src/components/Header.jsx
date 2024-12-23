import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link to="/" className="text-xl font-semibold text-white">
            SankyaSutra
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="#" className="text-sm text-white hover:text-white">
              Research
            </Link>
            <Link to="/about" className="text-sm text-white hover:text-white">     
             about
            </Link>
            <Link to="/contact" className="text-sm text-white hover:text-white">
              contact
            </Link>
            {/* <Link to="/about" className="text-sm text-white hover:text-white">
              Company
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

