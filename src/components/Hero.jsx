export function Hero() {
  return (
    <section className="hero" aria-label="Aber Travel premium hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/images/img_397_homepage-summer.jpg"
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <button className="hero-pause" type="button" aria-label="Pause background video">
        II
      </button>
      <button className="hero-feedback" type="button" aria-label="Open feedback">
        Feedback
      </button>

      <div className="hero-content">
        <p className="eyebrow">Aber Travel &amp; Tourism Agency</p>
        <h1>Summer Our Way</h1>
        <p className="hero-lead">
          Discover summer offers and premium Gulf experiences your way, from the Red Sea to Aseer and beyond.
        </p>

        <div className="hero-actions">
          <button className="btn btn-solid">Book Now</button>
        </div>
      </div>

      <div className="hero-campaign-tabs" aria-label="Featured campaigns">
        <div className="hero-tabs-progress" aria-hidden="true">
          <span />
        </div>
        <button className="hero-tab active" type="button">Summer Our Way</button>
        <button className="hero-tab" type="button">Water Fun Awaits!</button>
        <button className="hero-tab" type="button">Join Aber Rewards</button>
      </div>
      <div className="hero-bottom-fade" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-focus-ring" aria-hidden="true" />
    </section>
  )
}
