//import styles from './Button.module.css'

function Button() {

  // Module CSS Styling
  // <button className={styles.button}>Click Me</button>

  // In-line CSS Styling
  const styles = {
    backgroundColor: 'palevioletred',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <button style={styles}>Click Me</button>
  );
}

export default Button;