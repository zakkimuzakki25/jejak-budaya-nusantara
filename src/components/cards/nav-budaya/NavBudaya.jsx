import './NavBudaya.css';

// eslint-disable-next-line react/prop-types
function NavBudaya({ daerah }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 150,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container-nav-budaya">
      <div className="daerah-nav-budaya">
        <a onClick={() => scrollToSection(daerah)}>{daerah}</a>
      </div>
    </div>
  );
}

export default NavBudaya;
