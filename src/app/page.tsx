import BlogTopics from "./components/card1";
import CourseSlider from "./components/courseSlider";

import Footer from "./components/Footer";

import Main from "./components/main";

export default function Home(){
    return(
        <div>
            <Main />
            <div id="blog-topic">
            <BlogTopics />
            </div>
             <div id="course-slider">
            <CourseSlider />
            </div>

            <Footer />
        </div>
    )
}