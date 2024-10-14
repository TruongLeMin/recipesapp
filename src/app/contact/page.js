// app/contact/page.js

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Contact Us</h1>
        <p>Feel free to reach out for any inquiries!</p>
      </main>
      <Footer />
    </div>
  );
}
