export default function Navbar({ title = 'Arnold Clark Garage' }) {
  return (
    <header className="ch-navbar">
      <div className="ch-container">
        <div className="ch-row">
          <div className="xs:ch-col--12 sm:ch-col--3">
            <a href="/" className="ch-navbar__title">
              {title}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
