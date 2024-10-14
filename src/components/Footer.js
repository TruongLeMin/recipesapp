// components/Footer.js

export default function Footer() {
    return (
      <footer style={footerStyle}>
        <p>© 2024 Recipe App. All rights reserved.</p>
      </footer>
    );
  }
  
  const footerStyle = {
    padding: '10px',
    backgroundColor: '#ff9800',
    textAlign: 'center',
    // position: 'fixed',
    bottom: 0,
    width: '100%',
  };
  