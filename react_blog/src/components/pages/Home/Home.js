import React, {useState, useEffect} from "react";
import './Home.css';
import axios from 'axios';
import { BLOG_URL } from "../../utils/urls";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogCard from "../../common/blogCard";
import BlogCardExtra from "../../common/blogCardExtra";

const Home = (props) => {
    const [fetching, setFetching] = useState(true);
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        getBlogContent()
    }, []);

    const getBlogContent = () => {
        axios.get(BLOG_URL).then(
            res => {
                setBlogList(res.data);
                setFetching(false);
                console.log(res);
            }
        ).catch(
            err => {
                alert(err);
            }
        )
    }

    return (   
        
        <div>
            <div  className="banner">
                <h3>Welcome to Stickman Blog</h3>
                <p>
                    we have the most interesting news on tech and business 
                    stay tuned as we take you on something new with a hot cup
                     of tea or cofee
                </p>
                <div  className="searchBlog">
                    <input placeholder="Search blog contents"/>
                </div>
            </div>

            <div  className="blogListContainer" >
                {
                    fetching ?
                        (
                            <div  className="blogList">
                                <Skeleton className="blogCard"  count={6} height={200} />
                            </div>

                        ) : (
                            <div  className="blogList">
                                {
                                    blogList.map((item, id) => <BlogCard id={id}  data={item} />)
                                }
                            </div>
                        )
                }                
                
                {
                    fetching ?
                        (
                            <div  className="blogExtras">
                                <Skeleton className="blogCard"  count={3} height={150} />
                            </div>

                        ) : (
                            <div  className="blogExtras">
                            <h4>Top Blogs</h4>
                            {
                                blogList.map((item, id) => <BlogCardExtra id={id}  data={item} />)
                            }
                            </div>
                        )
                }

            </div>

        </div>
    );
};

export default Home;