import Script from 'next/script';
import '@/public/style.css'; // Adjust this path according to your styles structure

export default function Home() {
  return (
    <>
      <section className="h-screen w-screen">
        <div id="rgbKineticSlider" className="rgbKineticSlider"></div>
        <nav>
          <a href="#" className="maib-nav prev" data-nav="prev">Prev</a>
          <a href="#" className="maib-nav next" data-nav="next">Next</a>
        </nav>
      </section>

      {/* Load scripts from the public directory */}
      <Script src="/js/TweenMax.min.js" strategy="beforeInteractive" />
      <Script src="/js/pixi.min.js" strategy="beforeInteractive" />
      <Script src="/js/rgbKineticSlider.js" strategy="afterInteractive" />
      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}
