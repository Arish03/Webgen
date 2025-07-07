import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-[#FFFBFF] shadow-md py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-[#1B1B2F]">WEBGEN</h1>
        <ul className="flex gap-6 text-lg font-medium text-[#1B1B2F]">
          <li>
            <Link href="/services" className="hover:text-[#A66CFF] transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-[#A66CFF] transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#A66CFF] transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
