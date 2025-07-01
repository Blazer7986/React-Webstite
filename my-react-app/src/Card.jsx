import profilePic from "./assets/whiteRose.jpg";
import Button from "./Button";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Rosa Blanca</h2>
      <p className="card-text">I develop video games and I draw. </p>
      <Button></Button>
    </div>
  );
}

export default Card;
