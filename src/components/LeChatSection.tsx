import Image from "next/image";

export default function LeChatSection() {
  return (
    <section className="lechat-section">
      {}
      <div className="lechat-logo-container">
        <Image src="/logo.png" alt="Mistral Logo" width={120} height={120} className="lechat-logo" />
      </div>

      {}
      <div className="lechat-content">
        <h2 className="lechat-title">Le Chat: Your AI assistant for life and work.</h2>
        <div className="app-buttons">
          <Image src="/appStore.png" alt="App Store" className="app-store" width={130} height={50} />
          <Image src="/googlePlay.png" alt="Google Play" className="google-play" width={150} height={50} />
        </div>
      </div>

      {}
      <Image src="/next.svg" alt="Le Chat Pixel Art" width={80} height={80} className="lechat-icon" />
    </section>
  );
}
