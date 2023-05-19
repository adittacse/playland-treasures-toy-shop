import React, {useContext, useState} from 'react';
import {AuthContext} from "../../Providers/AuthProviders.jsx";
import Swal from 'sweetalert2';

const AddToy = () => {
    const {user} = useContext(AuthContext);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
    
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setSelectedSubcategory('');
    };
    
    const handleSubcategoryChange = (event) => {
        setSelectedSubcategory(event.target.value);
    };
    
    const getSubcategories = () => {
        // Define the subcategories for each category
        const subcategoriesByCategory = {
            '': [],
            "marvel": ['Iron Man', 'Spider-Man', 'Black Widow'],
            "avengers": ['Captain America', 'Thor', 'Hulk'],
            "star-wars": ['Luke Skywalker', 'Darth Vader', 'Yoda'],
        };
        
        return subcategoriesByCategory[selectedCategory] || [];
    };
    
    const handleAddToy = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const toyName = form.toyName.value;
        const picture = form.picture.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        let category = form.category.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        
        if (category === "marvel") {
            category = "Marvel"
        } else if (category === "avengers") {
            category = "Avengers";
        } else if (category === "star-wars") {
            category = "Star Wars";
        }
        
        const ratingInt = parseFloat(ratings);
        
        if (!(ratingInt < 0) && !(ratingInt > 5)) {
            // valid ratings
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ratings Must Be From 0 To 5!',
            })
            return;
        }
    }
    
    return (
        <div>
            <h2 className="text-center text-3xl mt-10 mb-10">Add A Toy</h2>
            <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="toyName" placeholder="Toy Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Picture URL</span>
                        </label>
                        <input type="text" name="picture" placeholder="Toy Picture URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name="sellerEmail" defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered" value={selectedCategory} onChange={handleCategoryChange} required>
                            <option disabled value="">Select Toy Category</option>
                            <option value="marvel">Marvel</option>
                            <option value="avengers">Avengers</option>
                            <option value="star-wars">Star Wars</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory</span>
                        </label>
                        <select name="subCategory" className="select select-bordered" value={selectedSubcategory} onChange={handleSubcategoryChange} required>
                            <option disabled value="">Select Subcategory</option>
                            {getSubcategories().map((subcategory) => (
                                <option key={subcategory} value={subcategory}>{subcategory}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Toy Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Ratings</span>
                        </label>
                        <input type="text" name="ratings" placeholder="From 0 to 5" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Toy Description" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-10">
                    <input className="btn text-white bg-[#FF3811] btn btn-block" type="submit" value="Add Toy"/>
                </div>
            </form>
            <div className="card-body">
            </div>
        </div>
    );
};

export default AddToy;