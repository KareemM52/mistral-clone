import Image from "next/image";

const logos = [
  "/brave.png",
  "/quora.png",
  "/sap.png",
  "/snowflake.png",
  "/bnp.jpg",
  "/axa.png",
];

export default function PartnerSection() {
  return (
    <section className="partners-section">
      <div className="partner-slider">
        <div className="partner-track">
          {}
          {[...logos, ...logos].map((logo, index) => (
            <Image key={index} src={logo} alt="Partner Logo" width={100} height={60} className="partner-logo" />
          ))}
        </div>
      </div>
    </section>
  );
}
