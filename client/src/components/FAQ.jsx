import React, { useState } from "react";
import "../styles/FAQ.css";

export default function FAQ() {
  const faqs = [
    {
      question: 'Do I need musical experience to use Muse Sessions?',
      answer: 'Not at all! Muse Sessions is designed to be accessible to everyone, regardless of musical background. Our AI understands natural language, so you can describe what you want in simple terms.'
    },
    {
      question: 'Can I use the music commercially?',
      answer: 'Yes, with our Professional plan, you get full commercial rights to all music you create. The Creator plan includes limited commercial usage, while the Free plan is for personal use only.'
    },
    {
      question: 'How does the AI create original music?',
      answer: 'Our AI has been trained on millions of music samples across genres and styles. It understands musical theory, composition, and arrangement, allowing it to generate original pieces based on your descriptions and preferences.'
    },
    {
      question: "Can I edit the music after it's generated?",
      answer: 'Absolutely! You can modify tempo, instruments, structure, and more. Our advanced editor allows you to make precise adjustments to get exactly the sound you want.'
    },
    {
      question: 'What file formats can I export?',
      answer: 'You can export your music in WAV, MP3, and MIDI formats. Professional users can also export individual stems for further production.'
    },
    {
      question: 'Is there a limit to how many songs I can create?',
      answer: 'Free users can create up to 5 songs per month. Creator and Professional plans offer unlimited song creation.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about Muse Sessions</p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div 
                className={`faq-question ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-contact">
          <p>Still have questions? <a href="#contact">Contact our support team</a></p>
        </div>
      </div>
    </section>
  );
}
