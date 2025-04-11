import React from 'react';
import './Blog.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Blog = () => {
    const navigate = useNavigate();

    const blogPosts = [
        {
            id: 1,
            title: "GMC Hummer EV: The Electric Super Truck",
            date: "March 15, 2024",
            author: "John Doe",
            excerpt: "The GMC Hummer EV is redefining what an electric truck can be, with its impressive 1,000 horsepower and 350+ miles of range. Discover how this beast is changing the game.",
            image: "https://images.pexels.com/photos/12206959/pexels-photo-12206959.jpeg"
        },
        {
            id: 2,
            title: "Rimac Nevera: The Fastest Electric Hypercar",
            date: "March 10, 2024",
            author: "Jane Smith",
            excerpt: "With 1,914 horsepower and a 0-60 mph time of 1.85 seconds, the Rimac Nevera is pushing the boundaries of electric performance. Learn about this Croatian masterpiece.",
            image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
        },
        {
            id: 3,
            title: "Lotus Evija: The British Electric Hypercar",
            date: "March 5, 2024",
            author: "Mike Johnson",
            excerpt: "Lotus enters the electric hypercar market with the Evija, featuring 2,000 horsepower and a revolutionary design. Explore this British engineering marvel.",
            image: "https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg"
        },
        {
            id: 4,
            title: "Tesla Cybertruck: The Future of Electric Pickups",
            date: "March 1, 2024",
            author: "Sarah Williams",
            excerpt: "Tesla's Cybertruck is breaking all the rules with its futuristic design and impressive specs. Get an inside look at this revolutionary electric pickup truck.",
            image: "https://images.pexels.com/photos/29547347/pexels-photo-29547347/free-photo-of-siberian-husky-with-futuristic-truck-in-studio.jpeg"
        },
        {
            id: 5,
            title: "Pininfarina Battista: Italian Electric Excellence",
            date: "February 25, 2024",
            author: "David Brown",
            excerpt: "The Pininfarina Battista combines Italian design with electric power, delivering 1,900 horsepower and a top speed of 217 mph. Discover this Italian masterpiece.",
            image: "https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg"
        },
        {
            id: 6,
            title: "Mercedes-AMG One: F1 Technology for the Road",
            date: "February 20, 2024",
            author: "Emma Wilson",
            excerpt: "The Mercedes-AMG One brings Formula 1 hybrid technology to the streets, with a combined output of over 1,000 horsepower. Learn about this engineering marvel.",
            image: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg"
        }
    ];

    return (
        <>
            <Navbar />
            <div className="blog-container">
                <div className="back-button" onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                </div>
                
                <div className="blog-header">
                    <h1>EV News & Reviews</h1>
                    <p>Stay updated with the latest electric vehicles and hypercars</p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map(post => (
                        <div key={post.id} className="blog-card">
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-date">{post.date}</span>
                                    <span className="blog-author">By {post.author}</span>
                                </div>
                                <h2>{post.title}</h2>
                                <p>{post.excerpt}</p>
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog; 