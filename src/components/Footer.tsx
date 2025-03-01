import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-gradient"></div>

      <div className="footer-container">
        {}
        <div className="footer-left">
          <div className="footer-logo">
            <Image src="/logo.png" alt="Mistral AI" width={50} height={50} />
          </div>
          <div className="app-buttons">
            <Image src="/appStore.png" alt="App Store" className="app-store-footer" width={120} height={30} />
            <Image src="/googlePlay.png" alt="Google Play" className="google-play-footer" width={150} height={50} />
          </div>
        </div>

        {}
        <div className="footer-links">
          <div>
            <h4>Why Mistral</h4>
            <ul>
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Our customers</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="#">AI solutions</Link></li>
              <li><Link href="#">Partners</Link></li>
              <li><Link href="#">Research</Link></li>
              <li><Link href="#">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h4>Build</h4>
            <ul>
              <li><Link href="#">La Plateforme</Link></li>
              <li><Link href="#">Le Chat</Link></li>
              <li><Link href="#">Try the API</Link></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="#">Terms of service</Link></li>
              <li><Link href="#">Privacy policy</Link></li>
              <li><Link href="#">Data processing agreement</Link></li>
              <li><Link href="#">Legal notice</Link></li>
            </ul>
          </div>
        </div>
      </div>

<div className="footer-bottom">
  <span>Mistral AI © 2025 EN</span>
  
  <div className="footer-right">
    <Link href="#"><FaTwitter /></Link>
    <Link href="#"><FaLinkedin /></Link>
    <Link href="#"><FaDiscord /></Link>
  </div>
</div>

    </footer>
  );
}
