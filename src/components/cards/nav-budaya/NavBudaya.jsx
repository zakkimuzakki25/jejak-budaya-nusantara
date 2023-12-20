import './NavBudaya.css';

function NavBudaya({ daerah }) {
  return (
    <div className="container-nav-budaya">
      <div className="daerah-nav-budaya">
        <h2>{daerah}</h2>
      </div>
    </div>
  );
}

export default NavBudaya;
