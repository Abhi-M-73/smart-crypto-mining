
import React from 'react';
import Blogherosection from "../blogcomponents/Blogherosection";
import BlogSidebarSection from "../blogcomponents/BlogSidebarSection";
const Home = () => {
    return (
        <div className="sm:max-w-7xl w-full mx-auto text-white" >
       <Blogherosection></Blogherosection>
       <BlogSidebarSection></BlogSidebarSection>
     

        </div>
    )
}
export default Home;