import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router
// import './Fetchcategories.css';

const Fetchcategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/fetchcategories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mt-4 text-center">
      <p className="d-inline-block" style={{ color: 'black', fontWeight: 400 }}>Shop by Category</p>
      <div className="row">
        {categories.map((category, index) => (
          <div key={category._id} className="col-md-4 mb-3">
            <Link to={`/${category.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ width: index === 17 ? '230px' : '200px', height: "280px" }}>
                <img src={category.img_url} className="card-img-top" alt={category.name} style={{ width: '199px', height: '200px' }} />
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                  <p className="card-text">{category.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Fetchcategories;
