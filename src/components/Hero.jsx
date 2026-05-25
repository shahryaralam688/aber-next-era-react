export function Hero({ copy }) {
  return (
    <section className="hero" aria-label={copy.ariaLabel}>
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

      <button className="hero-pause" type="button" aria-label={copy.pauseAria}>
        II
      </button>
      <button className="hero-feedback" type="button" aria-label={copy.feedbackAria}>
        {copy.feedback}
      </button>

      <div className="hero-content">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="hero-lead">{copy.lead}</p>

        <div className="hero-actions">
          <button type="button" className="btn btn-solid">{copy.bookNow}</button>
        </div>
      </div>

      <div className="hero-campaign-tabs" aria-label={copy.campaignsLabel}>
        <div className="hero-tabs-progress" aria-hidden="true">
          <span />
        </div>
        {copy.campaigns.map((campaign, index) => (
          <button key={campaign} className={index === 0 ? 'hero-tab active' : 'hero-tab'} type="button">{campaign}</button>
        ))}
      </div>
      <div className="hero-bottom-fade" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-focus-ring" aria-hidden="true" />
    </section>
  )
}
