import './Card.css';

// eslint-disable-next-line react/prop-types
function ContentCard({ jenis, nama, daerah, foto, deskripsi, sumber }) {
  return (
    <div id={daerah} className="container-content">
      <div>
        <img src={foto} alt={nama} className="image-content" />
        <h4 className='source-image'>{sumber}</h4>
      </div>
      <div>
        <h2 className='title-content'> {jenis} daerah {daerah}: {nama}</h2>
        <p className='desc-content'>{deskripsi}</p>
      </div>
    </div>
  );
}

export default ContentCard;
