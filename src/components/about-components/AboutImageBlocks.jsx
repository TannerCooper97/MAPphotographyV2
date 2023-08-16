import "../../styles/about-styles/about-image-blocks.scss";
import travelOne from "../../assets/italy-picture.jpg";
import travelTwo from "../../assets/greeece.jpg";
import travelThree from "../../assets/lake-powell.jpg";

const photos = [
  {
    id: 1,
    imageUrl: travelOne,
    excerpt: 'Leaning on the Tower of Pisa'
  },
  {
    id: 2,
    imageUrl: travelThree,
    excerpt: 'Camping at Flaming Gorge'
  },
  {
    id: 3,
    imageUrl: travelTwo,
    excerpt: 'Lunch in Santorini, Greece'
  }
  
];

function ImageBlocks() {
  return (
    <div className="photo-layout">
      {photos.map(photo => (
        <div key={photo.id} className="photo-card">
          <img src={photo.imageUrl} alt={`Photo ${photo.id}`} />
          <h5 className="excerpt">{photo.excerpt}</h5>
        </div>
      ))}
    </div>
  );
}

export default ImageBlocks;
