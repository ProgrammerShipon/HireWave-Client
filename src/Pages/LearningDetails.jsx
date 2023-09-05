import React from 'react';
import useLearningData from '../Hooks/useLearningData';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';
import LearningDetailsBody from '../Sections/LearningDetailsBody';

const LearningDetails = () => {

    const {id} = useParams()
    // const [learningData]= useLearningData()
    const learningData =[
      {
        "_id": "64eee4a993ef341482468b04",
        "category": "Programming & Tech",
        "thumbnail": "https://i.ibb.co/PzwQr80/hqdefault-1.webp",
        "title": "Complete HTML course in Bangla 2022",
        "videoLink": "https://www.youtube.com/embed/zsYMgmb2oCM?si=2Pn3BHX21xUkIEvF",
        "authorName": "Anisul Islam",
        "authorEmail": "anis@gmail.com",
        "authorImg": "https://i.ibb.co/XbS5bv7/Anisul-Islam.jpg",
        "comments": [
          {
            "commenterImg" : "https://i.ibb.co/jDPFM9F/req-1.jpg",
            "commenterName": "Ashik mia",
            "commenterEmail": "ashiik@gmail.com",
            "commentText": "Very Wonderful video",
            "commentTime": "6 months ago",
            "commentId": "95682"
          }
        ],
        "__v": 0,
        "createdAt": "16 Jan, 2023, 9:32 AM",
        "updatedAt": "26 Jan, 2023, 12:12 PM",
        "readTime" : 6,
         "description": "HTML, short for Hypertext Markup Language, is the backbone of the internet. It's the language that brings structure to the chaotic world of the web. If you're wondering why HTML is crucial, allow me to shed some light on this foundational element of the digital realm.<br/><br/>Imagine the internet without HTML – it would be like a library without a catalog. HTML is what enables web browsers to organize and display content on websites. It defines the headings, paragraphs, links, images, and everything else you see when you visit a web page. It's the invisible force that makes the internet visually coherent and navigable. Without HTML, we'd have a jumble of text and images with no rhyme or reason.<br/><br/>Now, let's dive into some HTML basics. At its core, HTML consists of elements, which act as containers for various types of content. These elements are defined using tags, and they tell the browser how to display the enclosed content. For example, the <h1> tag indicates a top-level heading, while the <p> tag signifies a paragraph. Links are created with the <a> tag, and images are embedded using the <img> tag. These are the building blocks of any web page.<br/><br/>Understanding HTML is like learning the language of the web. It empowers you to create and manipulate digital content, whether it's a personal blog, an e-commerce site, or a corporate web page. By grasping the basics of HTML, you can control the structure and layout of your web content, making it accessible and user-friendly.<br/><br/>But don't stop at the basics! In my video, 'Complete HTML course in Bangla 2022', I take you on a comprehensive journey through HTML. I delve into the intricacies of HTML elements, explain how to create forms for user input, introduce the magic of CSS for styling, and emphasize the importance of semantic HTML for better accessibility and search engine visibility.<br/><br/>So, if you're eager to master HTML and unlock the potential to create stunning web pages, click on the video link below. Let's embark on this educational adventure together. Whether you're a complete beginner or someone looking to sharpen their HTML skills, my course is designed to equip you with the knowledge and confidence needed to thrive in the world of web development. Join me in exploring the art of HTML, and let's bring your web development dreams to life!"
      },
      {
        "_id": "64eee4a993ef341482468b05",
        "category": "Version Control",
        "thumbnail": "https://i.ibb.co/BrDpnZ6/sumit-thumb.webp",
        "title": "Crash Course - Git & GitHub Tutorial",
        "videoLink": "https://youtu.be/oe21Nlq8GS4",
        "authorName": "Learn with Sumit",
        "authorEmail": "sumit@gmail.com",
        "authorImg": "https://i.ibb.co/FXjXDfX/Sumit.jpg",
        "comments": [
          {
            "commenterImg" : "https://i.ibb.co/41bpfKJ/req-2.jpg",
            "commenterName": "neha mia",
            "commenterEmail": "neha@gmail.com",
            "commentText": "Very Helpful video",
            "commentTime": "4 days ago",
            "commentId": "95682"
          }
        ],
        "__v": 0,
        "createdAt": "11 Mar, 2023, 10:45 AM",
        "updatedAt": "16 May, 2023, 12:32 PM",
        "readTime" : 5,
        "description": "Git is a version control mechanism that tracks changes in the file system, maintaining records of versions before and after each change, while GitHub is a cloud hosting service for these changes and versions, analogous to a coffee shop for Git."
      },
      {
        "_id": "64eee4a993ef341482468b06",
        "category": "JavaScript,Programming",
        "thumbnail": "https://i.ibb.co/7RYk7pY/stack-thumb.webp",
        "title": "JavaScript OOP Simplified - Master the Basics and Build a Real-World Project",
        "videoLink": "https://youtu.be/B6vSq4KiZeM",
        "authorName": "Stack Learner",
        "authorEmail": "nayem@gmail.com",
        "authorImg": "https://i.ibb.co/yyGG0LM/stack.jpg",
        "comments": [
          {
            "commenterImg" : "https://i.ibb.co/nbjYRxQ/req-5.jpg",
            "commenterName": "anik",
            "commenterEmail": "anik@gmail.com",
            "commentText": "wow",
            "commentTime": "5 hours ago",
            "commentId": "95682"
          }
        ],
        "__v": 0,
        "createdAt": "19 Feb, 2023, 5:12 AM",
        "updatedAt": "23 Feb, 2023, 9:23 PM",
        "readTime" : 4,
        "description": "Discover JavaScript OOP through a crash course that includes building a real-world project. Gain proficiency in objects, classes, and constructors."
      },
      {
        "_id": "64eee4a993ef341482468b07",
        "category": "Programming",
        "thumbnail": "https://i.ibb.co/K5T7gWs/pThumb.jpg",
        "title": "Complete CSS Crash Course Bangla",
        "videoLink": "https://youtu.be/OPkf3FpRKXQ",
        "authorName": "Programming Hero Community",
        "authorEmail": "Programming@gmail.com",
        "authorImg": "https://i.ibb.co/YtYJ7KH/P.jpg",
        "comments": [
          {
            "commenterImg" : "https://digity.netlify.app/assets/images/team/8.png",
            "commenterName": "lilu",
            "commenterEmail": "lilu@gmail.com",
            "commentText": "just wow",
            "commentTime": "21 hours ago",
            "commentId": "95682"
          }
        ],
        "__v": 0,
        "createdAt": "11 Mar, 2023, 10:45 AM",
        "updatedAt": "16 May, 2023, 12:32 PM",
        "readTime" : 8,
        "description": "Complete CSS Crash Course Bangla project in the real world"
      },
      {
        "_id": "64eee4a993ef341482468b08",
        "category": "Programming, Tools",
        "thumbnail": "https://i.ibb.co/QvXMnnq/proc.jpg",
        "title": "Ultimate Docker Crash Course | Docker Tutorial for Beginners",
        "videoLink": "https://youtu.be/urisGIi_pmE?list=PLSNRR4BKcowAuPUEja_ZZUE5Szn1rx90f",
        "authorName": "Procoder BD",
        "authorEmail": "Procoderbd@gmail.com",
        "authorImg": "https://i.ibb.co/xHZPkWd/Pro.jpg",
        "comments": [
          {
            "commenterImg" : "https://digity.netlify.app/assets/images/team/4.png",
            "commenterName": "asif",
            "commenterEmail": "asif@gmail.com",
            "commentText": "just awesome video",
            "commentTime": "1 year ago",
            "commentId": "95682"
          }
        ],
        "__v": 0,
        "createdAt": "2023-08-30T06:41:45.632Z",
        "updatedAt": "2023-08-30T06:41:45.632Z",
        "readTime" : 9,
        "description": "When everyone around is making Docker sound complicated, I thought, let's simplify it, and maybe I can help you understand Docker a bit more easily. If you watch this video with full attention, I hope you'll grasp Docker well"
      },
      {
        "_id": "64eee4a993ef341482468b09",
        "category": "Programming",
        "thumbnail": "https://i.ibb.co/XCjLNSs/mo.jpg",
        "title": "React Tutorial for Beginners",
        "videoLink": "https://youtu.be/SqcY0GlETPk",
        "authorName": "Programming With Mosh",
        "authorEmail": "mosh@gmail.com",
        "authorImg": "https://i.ibb.co/Y8G2jZs/m.jpg",
        "comments": [
          {
            "commenterImg" : "https://digity.netlify.app/assets/images/team/6.png",
            "commenterName": "anika",
            "commenterEmail": "anila@gmail.com",
            "commentText": "just awesome video",
            "commentTime": "2 months ago",
            "commentId": "95682"
          }
        ],
        "__v": 0,
        "createdAt": "19 Feb, 2023, 5:12 AM",
        "updatedAt": "23 Feb, 2023, 9:23 PM",
        "readTime" : 7,
        "description": "React JS Tutorial for Beginners - Learn React 18 with TypeScript and build awesome frontend app!"
      }
    ]
    const singleLearningData = learningData.find(data=> data._id === id)
    console.log(singleLearningData);
    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Learning Details - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Learning Details" />

            {/* Page content */}
            <LearningDetailsBody singleLearningData={singleLearningData} />
        </>
    );
};

export default LearningDetails;