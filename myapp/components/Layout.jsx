import { useState } from 'react';
import Header from './Header';  // Assurez-vous que Header est importé ici.
import Footer from './Footer';  // Si vous avez un footer

function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // état du menu burger

    return (
        <div>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main>{children}</main> {/* Ce qui varie entre les pages */}
            <Footer />
        </div>
    );
}

export default Layout;
