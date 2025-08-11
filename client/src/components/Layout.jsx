import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const styles = {
    main: {
      minHeight: 'calc(100vh - 160px)', // Account for header and footer
      paddingTop: '80px', // Account for fixed header
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Header />
      <main id="main-content" style={styles.main}>
        {children}
      </main>
      <Footer />
    </>
  );
}
