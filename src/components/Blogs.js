import React from "react";
import { blogs } from "./blogsData";

const Blogs = () => {
    return (
        <section className="blogs" id="blogs">
            <h1 className="heading"><span>Our Blogs</span></h1>
            <div className="swiper blogs-slider">
                <div className="swiper-wrapper">
                    {blogs.map(blog => (
                        <div key={blog.id} className="swiper-slide box">
                            <div className="image">
                                <img src={blog.image} alt={blog.title} />
                            </div>
                            <div className="content">
                                <h3>{blog.title}</h3>
                                <p>{blog.summary}</p>
                                <a href={blog.link} className="btn">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
