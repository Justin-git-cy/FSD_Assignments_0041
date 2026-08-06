import "./App.css";

function App() {
  return (
    <div className="App">

      {/* Header */}
      <header className="header">
        <div className="logo">🎵 MusicHub</div>

        <nav>
          <a href="/">Home</a>
          <a href="/">Songs</a>
          <a href="/">Artists</a>
          <a href="/">Albums</a>
          <a href="/">Contact</a>
        </nav>
      </header>

      {/* Hero */}

      <section className="hero">

        <div className="hero-text">

          <h1>Feel Every Beat</h1>

          <p>
            Stream your favourite songs and discover new artists.
          </p>

          <button>Start Listening</button>

        </div>

      </section>

      {/* Songs */}

      <section className="section">

        <h2>Trending Songs</h2>

        <div className="cards">

          <div className="card">
            <img src="https://picsum.photos/300?1" alt="" />
            <h3>Blinding Lights</h3>
            <p>The Weeknd</p>
          </div>

          <div className="card">
            <img src="https://picsum.photos/300?2" alt="" />
            <h3>Perfect</h3>
            <p>Ed Sheeran</p>
          </div>

          <div className="card">
            <img src="https://picsum.photos/300?3" alt="" />
            <h3>Believer</h3>
            <p>Imagine Dragons</p>
          </div>

        </div>

      </section>

      {/* Artists */}

      <section className="section">

        <h2>Popular Artists</h2>

        <div className="cards">

          <div className="artist">
            <img src="https://picsum.photos/200?11" alt="" />
            <h3>Taylor Swift</h3>
          </div>

          <div className="artist">
            <img src="https://picsum.photos/200?12" alt="" />
            <h3>Bruno Mars</h3>
          </div>

          <div className="artist">
            <img src="https://picsum.photos/200?13" alt="" />
            <h3>Arijit Singh</h3>
          </div>

        </div>

      </section>

      {/* Albums */}

      <section className="section">

        <h2>Latest Albums</h2>

        <div className="cards">

          <div className="card">
            <img src="https://picsum.photos/300?5" alt="" />
            <h3>Midnights</h3>
          </div>

          <div className="card">
            <img src="https://picsum.photos/300?6" alt="" />
            <h3>Divide</h3>
          </div>

          <div className="card">
            <img src="https://picsum.photos/300?7" alt="" />
            <h3>Evolve</h3>
          </div>

        </div>

      </section>

      {/* Footer */}

      <footer>

        <div>

          <h3>MusicHub</h3>

          <p>Music for everyone.</p>

        </div>

        <div>

          <h4>Quick Links</h4>

          <p>Home</p>
          <p>Artists</p>
          <p>Albums</p>

        </div>

        <div>

          <h4>Follow</h4>

          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>

        </div>

      </footer>

    </div>
  );
}

export default App;