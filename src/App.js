import logo from './logo.svg';
import './final.css';

function App() {
  const changeBackgroundColor = () => {
    const portfolioSection = document.querySelector('.portfolio-section');
    const randomColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    if (portfolioSection) {
      portfolioSection.style.backgroundColor = randomColor;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!firstName || !lastName || !email || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    alert(
      `Thank you for your message, ${firstName} ${lastName}!\n\nYour message has been received.\n\nI'll get back to you at ${email} as soon as possible!`
    );

    e.target.reset();
  };

  return (
    <>
  {/* BS Navigation Bar */}
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#home">
        MAX MENDOZA
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#portfolio">
              Portfolio
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  {/* BS Hero */}
  <section id="home" className="hero-section">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm MAX!</h1>
          <p className="lead">
            A Third Year BS Computer Science Student from De La Salle Lipa
          </p>

          <div className="sms-links">
            <a
              href="https://www.facebook.com/maxenesofia.mendoza"
              target="_blank"
            >
              <i className="fab fa-facebook" /> Facebook
            </a>

            <a href="https://www.instagram.com/maxmendoza" target="_blank">
              <i className="fab fa-instagram" /> Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/maxenemendoza/"
              target="_blank"
            >
              <i className="fab fa-linkedin" /> LinkedIn
            </a>

            <a href="https://github.com/maxenemendoza" target="_blank">
              <i className="fab fa-github" /> GitHub
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="MENDOZA_JPCS_1x1.png"
            alt="Picture of Max Mendoza"
            className="profile-img"
          />
        </div>
      </div>
    </div>
  </section>

  {/* BS Portfolio */}
  <section id="portfolio" className="portfolio-section">
    <div className="container">
      <h2 className="section-title">My Projects</h2>
      <div className="row g-4">

        {/* Project 1: SAGA */}
        <div className="col-md-4">
          <div className="card project-card">
            <div className="project-image">
              <img
                className="saga"
                src="pride-flag.png"
                alt="Picture of SAGA"
              />
            </div>

            <div className="card-body">
              <h5 className="project-title" onClick={changeBackgroundColor}>
                Sexuality and Gender Alliance (SAGA)
              </h5>

              <p className="card-text">
                This website serves as an advocacy campaign dedicated to the
                members and allies of the LGBTQ+ community in the Philippines.{" "}
              </p>

              <button
                className="btn btn-custom"
                data-bs-toggle="modal"
                data-bs-target="#project1Modal"
              >
                <i className="fas fa-eye" /> View Details
              </button>
            </div>
          </div>
        </div>

        {/* Project 2: Let's Budget! */}
        <div className="col-md-4">
          <div className="card project-card">
            <div className="project-image">
              <img
                className="budget"
                src="lets-budget.jpg"
                alt="Picture of Let's Budget!"
              />

            </div>
            <div className="card-body">
              <h5 className="project-title" onClick={changeBackgroundColor}>
                Let's Budget!
              </h5>

              <p className="card-text">
                This mobile application empowers students to take control of
                their finances through intuitive budgeting and mindful spending.{" "}
              </p>

              <button
                className="btn btn-custom"
                data-bs-toggle="modal"
                data-bs-target="#project2Modal"
              >

                <i className="fas fa-eye" /> View Details
              </button>
            </div>
          </div>
        </div>

        {/* Project 3: The Healthy Lasallian. */}
        <div className="col-md-4">
          <div className="card project-card">
            <div className="project-image">
              <img
                className="lasallian"
                src="healthy-lasallian.jpg"
                alt="Picture of The Healthy Lasallian."
              />
            </div>

            <div className="card-body">
              <h5 className="project-title" onClick={changeBackgroundColor}>
                The Healthy Lasallian
              </h5>

              <p className="card-text">
                This website serves as an online market place for healthier meal
                options for students of De La Salle Lipa, promoting healthier
                lifestyles among Lasallians.
              </p>

              <button
                className="btn btn-custom"
                data-bs-toggle="modal"
                data-bs-target="#project3Modal"
              >

                <i className="fas fa-eye" /> View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Modals */}
  {/* Project 1: SAGA */}
  <div className="modal fade" id="project1Modal" tabIndex={-1}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Sexuality and Gender Alliance (SAGA)</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <h6>
            <strong>Project Overview:</strong>
          </h6>
          <p>
            Sexuality and Gender Alliance (SAGA) serves as an advocacy campaign
            dedicated to the members and allies of the LGBTQ+ community in the
            Philippines.{" "}
          </p>
          <h6>
            <strong>Key Features:</strong>
          </h6>
          <ul>
            <li>Home Page</li>
            <li>Information Page</li>
            <li>Q &amp; A Page</li>
            <li>Hear Our Story Page</li>
            <li>About Page</li>
          </ul>
          <h6>
            <strong>Technologies Used:</strong>
          </h6>
          <div className="mb-3">
            <span className="tech-badge">HTML</span>
            <span className="tech-badge">CSS</span>
            <span className="tech-badge">JavaScript</span>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Project 2 Modal */}
  <div className="modal fade" id="project2Modal" tabIndex={-1}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Let's Budget!</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <h6>
            <strong>Project Overview:</strong>
          </h6>
          <p>
            Let's Budget! empowers students to take control of their finances
            through intuitive budgeting and mindful spending.
          </p>
          <h6>
            <strong>Key Features:</strong>
          </h6>
          <ul>
            <li>Home Page</li>
            <li>Transaction History</li>
            <li>Savings</li>
            <li>Folders</li>
            <li>Settings</li>
          </ul>
          <h6>
            <strong>Technologies Used:</strong>
          </h6>
          <div className="mb-3">
            <span className="tech-badge">Figma</span>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Project 3 Modal */}
  <div className="modal fade" id="project3Modal" tabIndex={-1}>
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">The Healthy Lasallian.</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" />
        </div>
        <div className="modal-body">
          <h6>
            <strong>Project Overview:</strong>
          </h6>
          <p>
            It serves as an online market place for healthier meal options for
            students of De La Salle Lipa, promoting healthier lifestyles among
            Lasallians.
          </p>
          <h6>
            <strong>Key Features:</strong>
          </h6>
          <ul>
            <li>Home Page</li>
            <li>Marketplace Page</li>
            <li>About Page</li>
            <li>Contact Page</li>
          </ul>
          <h6>
            <strong>Technologies Used:</strong>
          </h6>
          <div className="mb-3">
            <span className="tech-badge">HTML</span>
            <span className="tech-badge">CSS</span>
            <span className="tech-badge">JavaScript</span>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* BS Contact */}
  <section id="contact" className="contact-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="section-title">Contact Me</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="row">

              {/* First Name */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Ex. Juan Karlos"
                    required=""
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Ex. Dela Cruz"
                    required=""
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ex. juan_dela_cruz@hotmail.com"
                required=""
              />
            </div>

            {/* Message */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                placeholder="What's on your mind?"
                rows={5}
                required=""
                defaultValue={""}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-custom btn-lg">
                <i className="fas fa-paper-plane" /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>
  );
}
export default App;