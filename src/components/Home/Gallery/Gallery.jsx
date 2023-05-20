import React from 'react';

const Gallery = () => {
    const img1 = "https://images.unsplash.com/photo-1546776230-bb86256870ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=510&q=80";
    const img2 = "https://images.unsplash.com/photo-1598541264502-84dc6aa2fb87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80";
    const img3 = "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80";
    const img4 = "https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80";
    
    return (
        <section className="mb-16">
            <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="2000" className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg shadow-lg">
                        <img src={img1} alt="Image 1" className="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">
                        <img src={img2} alt="Image 2" className="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">
                        <img src={img3} alt="Image 3" className="w-full h-64 object-cover rounded-lg" />
                    </div>
                    <div className="bg-white rounded-lg shadow-lg">
                        <img src={img4} alt="Image 4" className="w-full h-64 object-cover rounded-lg" />
                    </div>
                    {/* Add more gallery items as needed */}
                </div>
            </div>
        </section>
    );
};

export default Gallery;