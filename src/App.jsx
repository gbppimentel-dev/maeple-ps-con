import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 430);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

function MobileOnlyGate({ children }) {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <div className="unsupported">
        <div className="unsupported-card">
          <h1>Mobile Device Required</h1>
          <p>This invite is designed for phone screens only.</p>
          <p>Please open it on your phone.</p>
        </div>
      </div>
    );
  }

  return children;
}

function InvitePage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <section className="hero section">
        <p className="eyebrow">A tiny concert invite</p>
        <h1>Will you come with me?</h1>
        <p className="muted">
          I made this just for you. Scroll down for the details.
        </p>
      </section>

      <section className="section card">
        <h2>Concert Night</h2>
        <p>
          A fun night, good music, and a chance to make a memory worth keeping.
        </p>
      </section>

      <section className="section card">
        <h2>Details</h2>
        <div className="detail-grid">
          <div>
            <span className="label">Artist</span>
            <p>To be added</p>
          </div>
          <div>
            <span className="label">Date</span>
            <p>To be added</p>
          </div>
          <div>
            <span className="label">Venue</span>
            <p>To be added</p>
          </div>
          <div>
            <span className="label">Time</span>
            <p>To be added</p>
          </div>
        </div>
      </section>

      <section className="section card">
        <h2>The vibe</h2>
        <p>
          I want this to feel like a little story as you scroll — playful,
          warm, and a little dramatic.
        </p>
      </section>

      <section className="section decision">
        <h2>So...?</h2>
        <p className="muted">Choose wisely.</p>

        <div className="button-row">
          <button
            className="accept-btn"
            onClick={() => navigate("/accepted")}
          >
            Accept
          </button>

          <button className="reject-btn">
            Reject
          </button>
        </div>
      </section>
    </div>
  );
}

function AcceptedPage() {
  return (
    <div className="page celebration-page">
      <section className="hero section">
        <p className="eyebrow">It worked</p>
        <h1>Yayyy!</h1>
        <p className="muted">Now the fun part begins.</p>
      </section>

      <section className="section card">
        <h2>Concert details</h2>
        <p>Put the full event info here once you are ready.</p>
      </section>

      <section className="section card">
        <h2>Playlist</h2>
        <p>Tap a platform to listen to the setlist vibe.</p>

        <div className="playlist-links">
          <a href="#" target="_blank" rel="noreferrer">Apple Music</a>
          <a href="#" target="_blank" rel="noreferrer">YouTube Music</a>
          <a href="#" target="_blank" rel="noreferrer">Spotify</a>
        </div>
      </section>

      <section className="section">
        <Link className="back-link" to="/">
          Back to invite
        </Link>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <MobileOnlyGate>
      <Routes>
        <Route path="/" element={<InvitePage />} />
        <Route path="/accepted" element={<AcceptedPage />} />
      </Routes>
    </MobileOnlyGate>
  );
}