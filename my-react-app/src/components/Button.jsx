//import styles from './Button.module.css'

function Button() {
  // Module CSS Styling
  // <button className={styles.button}>Click Me</button>

  // In-line CSS Styling
  const styles = {
    backgroundColor: "palevioletred",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  // let count = 0;
  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} clicked on me for ${count} times`);
  //   } else {
  //     console.log(`${name} stop clicking me`);
  //   }
  // };

  const handleClick = (event) => (event.target.textContent = "Details");

  return (
    <button onClick={(e) => handleClick(e)} style={styles}>
      Profile Info
    </button>
  );
}

export default Button;
