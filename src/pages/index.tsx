import Layout from "@/components/Layout";
import LeChatSection from "@/components/LeChatSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <Layout>
      {}
      <section className="hero">
        <h1>Frontier AI. In Your Hands.</h1>
        <p>Configurable AI for all builders.</p>

        <div className="search-box">
          <input type="text" placeholder="Talk to Le Chat" />
          <button className="search-btn">➜</button>
        </div>
      </section>

      {}
      <LeChatSection />

      {}
      <PartnersSection />
    </Layout>
  );
}
