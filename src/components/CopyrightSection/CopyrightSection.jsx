import React from 'react';

const CopyrightSection = () => {
    return (
        <footer className="footer footer-center p-4 text-base-content">
            <div>
                <p className="text-white">Copyright &copy; {new Date().getFullYear()} - All right reserved by Playland Treasures</p>
            </div>
        </footer>
    );
};

export default CopyrightSection;