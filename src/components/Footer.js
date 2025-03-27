// src/components/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className="app-footer">
            <p>© {new Date().getFullYear()} Aurélie Joubert.  Matériel de cours : Tous droits réservés.</p>
            <p>Partiel d'entraînement développé par Ted Barbier.</p>
            <p>
                Code source disponible sur <a href="https://github.com/TedBarbier/QuizDroitNumerique/" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
        </footer>
    );
}

export default Footer;