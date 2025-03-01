import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Mistral AI" 
            width={60}   // Smaller logo size
            height={30}   // Maintain aspect ratio
            style={{ objectFit: "contain" }} 
            priority 
          />
        </Link>
      </div>
      <div className="navbar-links">
        <Link href="#">Products</Link>
        <Link href="#">Solutions</Link>
        <Link href="#">Research</Link>
        <Link href="#">Resources</Link>
        <Link href="#">Company</Link>
      </div>
      <div className="navbar-buttons">
        <button className="button">Try the API →</button>
        <button className="button">Talk to Sales →</button>
      </div>
    </nav>
  );
}
