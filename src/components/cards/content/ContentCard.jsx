import './ContentCard.css';

function ContentCard({ namaMakanan, daerah, foto, deskripsi }) {
  return (
    <div className="container-content">
      <div>
        <img src={foto} alt={namaMakanan} className="foto-content" />
      </div>
      <div>
        <h2>{namaMakanan}</h2>
        <p>{daerah}</p>
        <p>{deskripsi}</p>
      </div>
    </div>
  );
}

export default ContentCard;
