import { useState } from 'react';
import { Stepper, Step } from "@tkwant/react-steps";
import { Controller, useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const EmployerOnboarding = () => {
    const allCategoriesData= [
        {
          "name": "Graphics & Design",
          "subcategories": [
            {
              "name": "Logo & Brand Identity",
              "jobs": [
                "Design a modern logo for your business",
                "Create a unique emblem logo",
                "Brand Style Guides",
                "Business Cards & Stationery",
                "Fonts & Typograph",
                "Logo Maker Tool"
              ]
            },
            {
              "name": "Illustration",
              "jobs": [
                "Illustration",
                "AI ArtistsNEW",
                "Children's Book Illustration",
                "Portraits & Caricatures",
                "Cartoons & Comics",
                "Pattern Design",
                "Tattoo Design",
                "Storyboards",
                "NFT Art"
              ]
            },
            {
              "name": "Web & App Design",
              "jobs": [
                "Web & App Design",
                "User Experience (UX) Design",
                "User Interface (UI) Design",
                "Interaction Design",
                "Mobile App Design",
                "Responsive Design",
                "Wireframing & Prototyping"
              ]
            },
            {
              "name": "Visual Design",
              "jobs": [
                "Image Editing",
                "Presentation Design",
                "Background Removal",
                "Infographic Design",
                "Vector Tracing",
                "Resume Design"
              ]
            },
      
            {
              "name": "Architecture & Building Design",
      
              "jobs": [
                "Architecture & Building Design",
                "Architect",
                "Interior Designer",
                "Urban Planner",
                "Landscape Architect",
                "Structural Engineer",
                "Construction Project Manager",
                "CAD Technician"
              ]
            },
            {
              "name": "Marketing Design",
              "jobs": [
                "Social Media Design",
                "Social Posts & Banners",
                "Email Design",
                "Web Banners",
                "Signage Design"
              ]
            }
          ]
        },
        {
          "name": "Programming & Tech",
          "subcategories": [
            {
              "name": "Website Development",
              "jobs": [
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Developer",
                "UI/UX Designer",
                "Web Application Architect",
                "E-commerce Developer",
                "WordPress Developer"
              ]
            },
            {
              "name": "Software Development",
              "jobs": [
                "Software Engineer",
                "DevOps Engineer",
                "Embedded Systems Developer",
                "Quality Assurance Tester",
                "Database Developer",
                "Mobile Application Developer",
                "Cloud Solutions Architect"
              ]
            },
            {
              "name": "Mobile App Development",
              "jobs": [
                "iOS App Developer",
                "Android App Developer",
                "Cross-Platform App Developer",
                "Mobile UI/UX Designer",
                "Mobile App Tester",
                "Mobile App Product Manager",
                "AR/VR App Developer"
              ]
            },
            {
              "name": "AI Development",
              "jobs": [
                "Machine Learning Engineer",
                "Data Scientist",
                "AI Research Scientist",
                "Natural Language Processing Engineer",
                "Computer Vision Engineer",
                "AI Ethics Specialist",
                "Chatbot Developer"
              ]
            },
            {
              "name": "Game Development",
              "jobs": [
                "Game Programmer",
                "Game Designer",
                "3D Artist",
                "Game Artist",
                "Game QA Tester",
                "Level Designer",
                "Game Producer"
              ]
            },
            {
              "name": "Website Platforms",
              "jobs": [
                "Shopify Developer",
                "Wix Designer",
                "Squarespace Developer",
                "Joomla Developer",
                "Drupal Developer",
                "Magento Developer",
                "PrestaShop Developer"
              ]
            }
          ]
        },
        {
          "name": "Digital Marketing",
          "subcategories": [
            {
              "name": "Search",
              "jobs": [
                "Search Engine Optimization Specialist",
                "Paid Search Analyst",
                "SEO Content Writer",
                "Keyword Researcher",
                "Search Marketing Manager",
                "Search Analyst",
                "E-commerce SEO Specialist"
              ]
            },
            {
              "name": "Social",
              "jobs": [
                "Social Media Manager",
                "Influencer Marketing Coordinator",
                "Social Media Strategist",
                "Community Manager",
                "Content Creator",
                "Social Media Advertising Specialist",
                "Social Media Analyst"
              ]
            },
            {
              "name": "Methods & Techniques",
              "jobs": [
                "Agile Coach",
                "Six Sigma Black Belt",
                "Design Thinking Facilitator",
                "Lean Process Improvement Specialist",
                "Scrum Master",
                "Kaizen Event Coordinator",
                "Business Process Reengineering Consultant"
              ]
            },
            {
              "name": "Analytics & Strategy",
              "jobs": [
                "Data Analyst",
                "Business Intelligence Manager",
                "Marketing Analyst",
                "Digital Analytics Specialist",
                "Market Researcher",
                "Strategy Consultant",
                "Competitive Intelligence Analyst"
              ]
            },
            {
              "name": "Industry & Purpose-Specific",
              "jobs": [
                "Healthcare IT Project Manager",
                "Environmental Sustainability Coordinator",
                "Fashion E-commerce Manager",
                "Automotive Product Designer",
                "Travel and Tourism Consultant",
                "Nonprofit Fundraising Manager",
                "Digital Banking Product Manager"
              ]
            }
          ]
        },
        {
          "name": "Video & Animation",
          "subcategories": [
            {
              "name": "Editing & Post-Production",
              "jobs": [
                "Video Editing",
                "Color Correction",
                "Audio Editing",
                "Visual Effects (VFX)",
                "Motion Graphics",
                "Subtitle & Captioning",
                "Green Screen Removal"
              ]
            },
            {
              "name": "Animation",
              "jobs": [
                "2D Animation",
                "3D Animation",
                "Character Animation",
                "Motion Capture",
                "Stop Motion Animation",
                "Whiteboard Animation",
                "Explainer Videos"
              ]
            },
            {
              "name": "Miscellaneous",
              "jobs": [
                "Video Transcription",
                "Video Conversion",
                "Video Compression",
                "Video Stabilization",
                "Aspect Ratio Adjustment",
                "Video Enhancement",
                "Video Cleanup"
              ]
            },
            {
              "name": "Social & Marketing Videos",
              "jobs": [
                "Social Media Ads",
                "Promotional Videos",
                "Testimonial Videos",
                "Tutorial Videos",
                "Product Demos",
                "Event Highlight Videos",
                "Influencer Collaboration"
              ]
            },
            {
              "name": "Filmed Video Production",
              "jobs": [
                "Cinematography",
                "Location Scouting",
                "Storyboarding",
                "Scriptwriting",
                "Director of Photography (DP)",
                "Casting Director",
                "Crew Management"
              ]
            },
            {
              "name": "Product Videos",
              "jobs": [
                "Product Showcase",
                "Unboxing Videos",
                "How-to-Use Videos",
                "Features Explanation",
                "Comparative Analysis",
                "Customer Testimonial Videos",
                "Assembly & Installation Guides"
              ]
            }
          ]
        },
        {
          "name": "Writing & Translation",
          "subcategories": [
            {
              "name": "Content Writing",
              "jobs": [
                "Blog Post Writing",
                "SEO Article Writing",
                "Social Media Content Creation",
                "Website Copywriting",
                "Product Descriptions",
                "Whitepaper Writing",
                "Ebook Ghostwriting",
                "Press Release Writing",
                "Email Newsletter Copy",
                "Scriptwriting"
              ]
            },
            {
              "name": "Editing & Critique",
              "jobs": [
                "Manuscript Editing",
                "Proofreading",
                "Copy Editing",
                "Content Review",
                "Academic Paper Editing",
                "Technical Document Review",
                "Website Content Editing",
                "Creative Writing Critique",
                "Resume/CV Review",
                "Video Script Review"
              ]
            },
            {
              "name": "Business & Marketing Copy",
              "jobs": [
                "Advertising Copywriting",
                "Brochure Content Writing",
                "Sales Email Copy",
                "Company Profile Writing",
                "Tagline/Slogan Creation",
                "Marketing Campaign Copy",
                "Social Media Ad Copy",
                "Product Naming",
                "Direct Response Copywriting",
                "Landing Page Copy"
              ]
            },
            {
              "name": "Translation & Transcription",
              "jobs": [
                "Document Translation",
                "Audio Transcription",
                "Video Subtitling",
                "Website Localization",
                "Legal Document Translation",
                "Medical Report Translation",
                "Technical Manual Translation",
                "Interpretation Services",
                "Captioning",
                "Language Tutoring"
              ]
            },
            {
              "name": "Career Writing",
              "jobs": [
                "Resume/CV Writing",
                "Cover Letter Writing",
                "LinkedIn Profile Optimization",
                "Job Application Writing",
                "Personal Statement Writing",
                "Career Coaching Content",
                "Interview Thank-You Notes",
                "Professional Bio Writing",
                "Networking Email Drafting",
                "Online Portfolio Content"
              ]
            },
            {
              "name": "Miscellaneous",
              "jobs": [
                "Ghostwriting",
                "Travel Blog Writing",
                "Recipe Development",
                "Academic Research Writing",
                "Grant Proposal Writing",
                "Video Game Scriptwriting",
                "Wedding Speech Writing",
                "Song Lyric Writing",
                "Real Estate Listing Copy",
                "Event Invitation Copy"
              ]
            }
          ]
        },
        {
          "name": "Music & Audio",
          "subcategories": [
            {
              "name": "Lessons & Transcriptions",
              "jobs": [
                "Online Language Tutor",
                "Academic Tutor",
                "Music Transcriptionist",
                "Online Yoga Instructor",
                "Coding Bootcamp Instructor",
                "Online Cooking Class Instructor",
                "Art Workshop Facilitator"
              ]
            },
            {
              "name": "Streaming & Audio",
              "jobs": [
                "Podcast Host",
                "Live Streamer",
                "Audio Content Creator",
                "Online Radio DJ",
                "Gaming Streamer",
                "Music Playlist Curator",
                "ASMR Creator"
              ]
            },
            {
              "name": "Audio Engineering & Post Production",
              "jobs": [
                "Sound Designer",
                "Mixing Engineer",
                "Mastering Engineer",
                "Foley Artist",
                "Audio Plugin Developer",
                "Studio Recording Engineer",
                "Post-Production Sound Mixer"
              ]
            },
            {
              "name": "DJing",
              "jobs": [
                "Club DJ",
                "Wedding DJ",
                "Radio DJ",
                "Event DJ",
                "Virtual DJ for Online Parties",
                "Cruise Ship DJ",
                "Mobile DJ for Parties"
              ]
            },
            {
              "name": "Voice Over & Narration",
              "jobs": [
                "Commercial Voice Over Artist",
                "E-Learning Course Narrator",
                "Animation Voice Actor",
                "Audiobook Narrator",
                "Video Game Character Voice",
                "IVR System Voice",
                "Voice Actor for Documentaries"
              ]
            },
            {
              "name": "Music Production & Writing",
              "jobs": [
                "Songwriter",
                "Music Producer",
                "Jingle Composer",
                "Film Score Composer",
                "Arranger",
                "Ghost Producer",
                "Electronic Music Artist"
              ]
            }
          ]
        },
        {
          "name": "Business",
          "subcategories": [
            {
              "name": "Business Formation",
              "jobs": [
                "Business Consultant",
                "Legal Advisor",
                "Corporate Secretary",
                "Tax Specialist",
                "Business Coach",
                "Startup Mentor",
                "Business Plan Writer"
              ]
            },
            {
              "name": "General & Administrative",
              "jobs": [
                "Office Manager",
                "Administrative Assistant",
                "Executive Assistant",
                "Receptionist",
                "Facilities Coordinator",
                "Data Entry Clerk",
                "Virtual Assistant"
              ]
            },
            {
              "name": "Sales & Customer Care",
              "jobs": [
                "Sales Representative",
                "Customer Service Agent",
                "Sales Manager",
                "Account Manager",
                "Customer Support Specialist",
                "Telemarketer",
                "E-commerce Specialist"
              ]
            },
            {
              "name": "Accounting & Finance",
              "jobs": [
                "Financial Analyst",
                "Accountant",
                "Bookkeeper",
                "Tax Accountant",
                "Financial Controller",
                "Auditor",
                "Budget Analyst"
              ]
            },
            {
              "name": "Business Growth",
              "jobs": [
                "Marketing Manager",
                "Business Development Manager",
                "Digital Marketing Specialist",
                "PR Specialist",
                "Market Research Analyst",
                "Social Media Manager",
                "Content Strategist"
              ]
            },
            {
              "name": "Legal Services",
              "jobs": [
                "Corporate Lawyer",
                "Intellectual Property Attorney",
                "Contracts Specialist",
                "Employment Law Advisor",
                "Real Estate Attorney",
                "Litigation Lawyer",
                "Privacy & Data Protection Counsel"
              ]
            },
            {
              "name": "Professional Development",
              "jobs": [
                "Training Coordinator",
                "Learning & Development Specialist",
                "Career Coach",
                "Mentorship Program Manager",
                "Professional Speaker",
                "Certification Program Manager",
                "Leadership Coach"
              ]
            },
            {
              "name": "Miscellaneous",
              "jobs": [
                "Event Planner",
                "Travel Coordinator",
                "Freelance Writer",
                "Graphic Designer",
                "Translator",
                "Personal Assistant",
                "Lifestyle Coach"
              ]
            }
          ]
        },
        {
          "name": "Data",
          "subcategories": [
            {
              "name": "Data Collection",
              "jobs": [
                "Market Research Analyst",
                "Social Media Data Collector",
                "Survey Researcher",
                "Field Data Collector",
                "IoT Data Collector",
                "Web Scraping Specialist",
                "Clinical Data Collector"
              ]
            },
            {
              "name": "Data Management",
              "jobs": [
                "Data Quality Analyst",
                "Database Administrator",
                "Data Governance Manager",
                "Master Data Management Specialist",
                "ETL Developer",
                "Data Privacy Officer",
                "Metadata Manager"
              ]
            },
            {
              "name": "Data Analysis",
              "jobs": [
                "Business Intelligence Analyst",
                "Data Scientist",
                "Quantitative Analyst",
                "Market Data Analyst",
                "Statistical Analyst",
                "Healthcare Data Analyst",
                "Financial Data Analyst"
              ]
            },
            {
              "name": "Data Storage",
              "jobs": [
                "Database Engineer",
                "Cloud Storage Architect",
                "Backup and Recovery Specialist",
                "Data Warehouse Specialist",
                "Storage System Administrator",
                "Archival Data Manager",
                "Distributed Systems Engineer"
              ]
            }
          ]
        },
        {
          "name": "Photography",
          "subcategories": [
            {
              "name": "Products & Lifestyle",
              "jobs": [
                "Product Photography",
                "Food Styling & Photography",
                "Fashion Photography",
                "Interior Design Photography",
                "Beauty Product Photography",
                "Jewelry Photography",
                "Lifestyle Blogger Photography",
                "Travel Products Photography",
                "Fitness & Wellness Photography"
              ]
            },
            {
              "name": "Local Photography",
              "jobs": [
                "Cityscape Photography",
                "Street Photography",
                "Landmark Photography",
                "Cultural Event Photography",
                "Urban Exploration Photography",
                "Community Portrait Photography",
                "Local Wildlife Photography",
                "Historical Site Photography",
                "Nature in the City Photography"
              ]
            },
            {
              "name": "People & Scenes",
              "jobs": [
                "Portrait Photography",
                "Wedding Photography",
                "Family Photography",
                "Event Photography",
                "Candid Photography",
                "Street Scenes Photography",
                "Group Photos Photography",
                "Couples Photography",
                "Social Documentary Photography"
              ]
            },
            {
              "name": "Miscellaneous",
              "jobs": [
                "Aerial Photography",
                "Underwater Photography",
                "Night Photography",
                "Macro Photography",
                "Time-Lapse Photography",
                "Architectural Photography",
                "Experimental Photography",
                "Abstract Photography",
                "Composite Photography"
              ]
            }
          ]
        },
        {
          "name": "AI Services",
          "subcategories": [
            {
              "name": "Build your AI app",
              "jobs": [
                "AI Application Developer",
                "Machine Learning Engineer",
                "Frontend Developer",
                "Backend Developer",
                "UI/UX Designer",
                "Data Scientist",
                "Product Manager"
              ]
            },
            {
              "name": "AI Artists",
              "jobs": [
                "Digital Illustrator",
                "Concept Artist",
                "Character Designer",
                "Environment Artist",
                "Texture Artist",
                "Storyboard Artist",
                "Visual Effects Artist"
              ]
            },
            {
              "name": "Refine AI with experts",
              "jobs": [
                "AI Ethicist",
                "Data Annotation Specialist",
                "Human-in-the-Loop Specialist",
                "AI Bias Analyst",
                "User Experience Researcher",
                "AI Quality Assurance Tester",
                "Legal and Compliance Expert"
              ]
            },
            {
              "name": "Get your data right",
              "jobs": [
                "Data Engineer",
                "Data Curator",
                "Data Collection Specialist",
                "Data Cleansing Analyst",
                "Data Privacy Officer",
                "Data Governance Manager",
                "Data Quality Analyst"
              ]
            },
            {
              "name": "Creative services",
              "jobs": [
                "Creative Director",
                "Content Writer",
                "Graphic Designer",
                "Video Editor",
                "Marketing Strategist",
                "Brand Consultant",
                "Social Media Manager"
              ]
            }
          ]
        }
      ]
      
    const { control, register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm();
    const isMobile = window.innerWidth > 768;
    const [curStep, setCurStep] = useState(0);
    const [finished, setFinished]= useState(false)
    const [hidden, setHidden] = useState(true)
    const [workFromHome, setWorkFromHome] = useState(false);
    const navigate= useNavigate()

    //Watch
    const selectedCategory = watch('job_category', '');
    const selectedSubCategory = watch('sub_category', '');
    const singleCategory= allCategoriesData.find(category => category.name === selectedCategory)
    const selectedJobType = watch('job_type', '');
    const selectedExperience = watch('experience', '');
    const selectedCompensationPackage = watch('compensation_package', '');

    //Form Submit function
    const onSubmit = data => {
        console.log(data)
        console.log(selectedSkills)
        // data[skills] = selectedSkills
        const recruiterData= {
            role: "recruiter",
            userInfo: {
                name: data?.company_name, //found in both recruiterData and jobData object
                phone: [data?.country_code, data?.phone],
                category: data?.job_category, //found in both recruiterData and jobData object
                subcategory: data?.sub_category
                },
            location: data?.country,
            address: data?.address,
            no_of_employees : data?.no_of_employees,
        }
        const jobData = {
            companyName : data?.company_name, //found in both recruiterData and jobData object
            title: data?.job_title,
            category : data?.job_category, //found in both recruiterData and jobData object
            location : data?.location,
            quantity : data?.vacancy,
            skills: data?.skills?.map((skill) => skill),
            jobType : data?.job_type,
            experience : data?.experience,
            benefits : [data?.compensation_package]
        }
        // console.log(recruiterData, jobData);

        setCurStep(curStep + 1)
        //TODO: Backend integration
        finished && navigate('/')
    }

    // Previous step function
    const handlePreviousStep = () => {
        setCurStep(curStep - 1);
    };

    const countryCodes = ["+1", "+44", "+49", "+33", "+81", "+86", "+91", "+61", "+7", "+55", "+54", "+51", "+52", "+53", "+20", "+27", "+82", "+62", "+92", "+94", "+62", "+63", "+66", "+84", "+95", "+670", "+975", "+380", "+375", "+373", "+377", "+423", "+41", "+46", "+47", "+48", "+351", "+34", "+39", "+31", "+420", "+421", "+386", "+385", "+385", "+352", "+352", "+43", "+353", "+354", "+880"]

    // Skills states
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);

    // Skills functions
    const skillsData = [ "JavaScript", "React.js", "Node.js", "Python", "Java", "SQL", "HTML/CSS", "Angular", "Vue.js", "Ruby on Rails", "C#", "PHP", "Swift", "Android Development", "iOS Development","DevOps","Data Science","UI/UX Design","Project Management","Machine Learning","Cloud Computing","Cybersecurity","Database Administration","Frontend Development","Backend Development","Full Stack Development","Web Design","Mobile App Design","Network Engineering","Digital Marketing","Content Writing","Search Engine Optimization (SEO)","Social Media Marketing","Product Management","Agile Methodologies","Blockchain","Artificial Intelligence (AI)","Augmented Reality (AR)","Virtual Reality (VR)","Customer Service","Public Speaking","Graphic Design","Video Editing","Data Analysis","Financial Analysis","Copywriting","Leadership","Team Management","Foreign Languages","Photography","Event Planning","Salesmanship","Negotiation","Project Coordination","Research Skills","Time Management","Conflict Resolution","Customer Relationship Management","Legal Research","Creative Problem Solving","Content Strategy","Market Research","Data Entry","Logistics","Quality Control","Healthcare Management","Clinical Research","Teaching","Public Relations","Social Work","Event Management","Database Management","Content Management","E-commerce","Mechanical Engineering","Electrical Engineering","Human Resources Management","Market Analysis","Financial Planning","Supply Chain Management","Video Production","Artificial Intelligence (AI)","Digital Illustration","Laboratory Techniques","Multilingualism","Public Policy Analysis","Business Intelligence","Legal Writing","Data Visualization","Event Coordination","Foreign Exchange Trading","Interior Design","Statistical Analysis","Sustainable Agriculture","Travel Planning","Content Marketing","Video Game Design","Public Health","Bio-informatics","Legal Research and Analysis","Machine Learning","Industrial Design","Crisis Management","Bilingual Communication","User Experience (UX) Research","Environmental Sustainability","Financial Modeling","Political Science","Medical Coding","Digital Advertising","Network Security","Conflict Mediation","Renewable Energy","Forensic Accounting","Machine Vision","Quantitative Analysis","Environmental Engineering","Blockchain Development","Social Psychology","Biotechnology","Strategic Planning","International Relations","Robotics Programming","Digital Forensics","Art Restoration","Urban Planning","Aerospace Engineering","Copy Editing","Clinical Psychology","Geographic Information Systems (GIS)","Fashion Design","Marine Biology","Community Outreach","Neuroscience","Artificial Intelligence Ethics","Digital Artistry","Astronomy","Clinical Research Coordination","Disaster Management"];


    const handleInputChange = (e) => {
    const value = e.target.value;
    setHidden(false)
    setInputValue(value);
    generateSuggestions(value);
    };

    const generateSuggestions = (inputValue) => {
    const matchingSkills = skillsData.filter((skill) =>
        skill.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(matchingSkills);
    };

    const selectSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
        register(`skills[${selectedSkills.length}]`, { value: skill });
        setSelectedSkills([...selectedSkills, skill]);
        setInputValue('');
    }
    };

    const removeSelectedSkill = (index) => {
    const updatedSkills = [...selectedSkills];
    updatedSkills.splice(index, 1);
    setSelectedSkills(updatedSkills);
    };
      
    const renderContent = () => {
        switch (curStep) {

            //Company Information
            case 0: 
                return(
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 px-10 py-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Create an employer account</h1>
                        <p className='text-sm mb-8'>You'll need to create an employer account before posting a job</p>
                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Company Name */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Company Name <sup className='text-red-500'>*</sup></label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                placeholder='Mahitech Ltd.'
                                {...register("company_name", { required: true })}
                                />
                            </div>
                            {errors.company_name?.type === 'required' && <span className='text-red-500 duration-300'>Company Name is required</span>}

                            {/* No of employees */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Company's no. of Employees <sup className='text-red-500'>*</sup></label>
                                <select 
                                    defaultValue=""
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                    {...register("no_of_employees", { required: true })}
                                >
                                    <option value="" disabled>No. of employee of your company</option>
                                    <option value="<100">&lt; 100</option>
                                    <option value="100-200">100-200</option>
                                    <option value="200-500">200-500</option>
                                    <option value="500-800">500-800</option>
                                    <option value="800-1000">800-1000</option>
                                    <option value="1000+">1000+</option>
                                </select>
                            </div>
                            {errors.no_of_employees?.type === 'required' && <span className='text-red-500 duration-300'>Employee numbers are required</span>}

                             {/* Divider */}
                             <p className='border border-green mt-10 mb-6'></p>

                             <h1 className='font-semibold text-2xl text-green mb-2'>Address and Contact Information</h1>
                            {/* Country */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Country <sup className='text-red-500'>*</sup></label>
                                <select 
                                    defaultValue=""
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                    {...register("country", { required: true })}
                                >
                                <option value="" disabled>Select country</option>
                                    <option value="Australia">Australia</option>
                                    <option value="USA">USA</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="UK">UK</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                </select>
                            </div>
                            {errors.country?.type === 'required' && <span className='text-red-500 duration-300'>Country is required</span>}

                            {/* Full address */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Full Address</label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                placeholder='e.g. 45 West Sandore, Sector-5'
                                {...register("address")}
                                />
                            </div>

                            {/* Phone number */}
                            <div className='flex items-center gap-2 mt-5'>
                                <div className='w-40'>
                                <label className='text-dark block mb-1'>Country code</label>
                                    <select defaultValue=""
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3'
                                    {...register("country_code")}
                                    >
                                         <option value="" disabled></option>
                                    {
                                        countryCodes.map((code, index) => <option
                                            key={index} value={code}>{code}</option>)
                                    }
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label className='text-dark block mb-1'>Phone number</label>
                                    <input
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                    type="number"
                                    {...register("phone", {maxLength: 10, minLength: 10})}
                                    />
                                </div>
                            </div>
                            {errors.phone?.type === 'maxLength' && <span className='text-red-500 duration-300'>Invalid Number</span>}
                            {errors.phone?.type === 'minLength' && <span className='text-red-500 duration-300'>Invalid Number</span>}
                            
                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-end mx-auto mt-8'>

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 mt-8' type="submit"  value="Next" /> 
                                )}
                            </div>
                        </form>
                    </div>
                )

            //Job_category
            case 1:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 p-6 md:p-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Choose a category that fits your company best</h1>
                        <p className='text-sm mb-8'>This information helps us for better recommendations across HireWave</p>
            
                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Job Category */}
                            <div className='grid md:flex flex-wrap gap-5'>
                                {allCategoriesData.map((category) => (
                                    <div
                                    key={category.name}
                                    className={`w-fit ${
                                        selectedCategory === category.name
                                        ? 'bg-dark/80 text-white shadow-lg'
                                        : errors.job_category ? 'border border-red-500' 
                                        : 'bg-green/40 hover:bg-dark/80 hover:text-white hover:shadow-lg'
                                    } px-3 rounded-full cursor-pointer`}
                                    onClick={() => setValue('job_category', category.name)}
                                    >
                                    <Controller
                                        name="job_category"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                    <>
                                        {category.name}
                                        <input type="radio" {...field} value={category.name} style={{ display: 'none' }} />
                                    </>
                                    )}
                                    />
                                    </div>
                                    
                                ))}
                                </div>
                            {errors.Job_category?.type === 'required' && <span className='text-red-500'>Category is required</span>}

                            
                           
                            {/* Divider & Sub category */}
                            {
                                selectedCategory &&  
                                <>
                                    <p className='border border-green mt-10 mb-6'></p>
                                    <h1 className='font-semibold text-xl text-green mb-5'>Choose sub category on which your company works on</h1>
                                </>
                            }
                            <div className='grid md:flex flex-wrap gap-5'>
                            {
                                selectedCategory && 
                                singleCategory.subcategories.map((sub_category)=> (
                                    <div
                                    key={sub_category.name}
                                    className={`w-fit ${
                                        selectedSubCategory === sub_category.name
                                        ? 'bg-dark/80 text-white shadow-lg'
                                        : errors.sub_category ? 'border border-red-500' 
                                        : 'hover:bg-dark/80 hover:text-white hover:shadow-lg'
                                    } px-3 rounded-full border flex gap-2 items-center border-green cursor-pointer`}
                                    onClick={() => setValue('sub_category', sub_category.name)}
                                    >
                                    <Controller
                                        name="sub_category"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                    <>
                                        <AiOutlinePlus/>{sub_category.name}
                                        <input type="radio" {...field} value={sub_category.name} style={{ display: 'none' }} />
                                    </>
                                    )}
                                    />
                                    
                                    </div>
                                ))}
                            </div>
                            {errors.Job_category?.type === 'required' && <span className='text-red-500'>Sub-Category is required</span>}

                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-between gap-10 mx-auto mt-16'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' type="submit"  value="Next" /> 
                                )}
                            </div>
                                   
                        </form>
                    </div>
                );

            //Job Profile
            case 2:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 p-6 md:p-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Let's Understand your Needs</h1>
                        <p className='text-sm mb-8'>What type of talent for job you looking for?</p>
                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Job title */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Job Title <sup className='text-red-500'>*</sup></label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text"
                                placeholder='e. g. Front-End Developer'
                                {...register("job_title", { required: true })}
                                />
                            </div>
                            {errors.job_title?.type === 'required' && <span className='text-red-500 duration-300'>Job Title is required</span>}

                            <div className='md:flex gap-5'>
                                {/* Vacancy */}
                                <div className='w-full'>
                                    <label className='text-dark block mb-1 mt-5'>Vacancy <sup className='text-red-500'>*</sup></label>
                                    <select 
                                        defaultValue=""
                                        className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                        {...register("vacancy", { required: true })}
                                    >
                                        <option value="" disabled>Vacant seat for the job</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="5+">5+</option>
                                    </select>
                                    {errors.vacancy?.type === 'required' && <span className='text-red-500 duration-300'>Vacancy is required</span>}
                                </div>                               

                                {/* Job Location */}
                                <div className='w-full'>
                                    <label className='text-dark block mb-1 mt-5'>Job Location</label>
                                    <input 
                                    className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                    type="text"
                                    {...register("location")}
                                    readOnly={watch("location") === 'Remote'}
                                    />
                                </div>                              
                            </div>

                             {/* Checkbox for Remote */}
                             <div className='flex justify-end items-center mt-1'>
                                <label>Remote</label>
                                <input 
                                className='ml-2 cursor-pointer' 
                                type="checkbox"
                                onChange={e => {
                                    setWorkFromHome(e.target.checked);
                                    if (e.target.checked) setValue('location', 'Remote')
                                    else setValue('location', '')
                                }}
                                />
                            </div>

                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-between gap-10 mx-auto mt-16'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' type="submit"  value="Next" /> 
                                )}
                            </div>
                        </form>
                    </div>
                );
            
            //Skills
            case 3:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 p-6 md:p-10 mx-auto '>
                        <h1 className='font-semibold text-2xl text-green mb-2'>What skill sets are you looking for?</h1>
                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>

                            {/* Skill field */}
                            <div>
                                <label className='text-dark block mb-1'>Add a Skill</label>
                                <div className="flex flex-wrap gap-3 mb-3 mt-3">
                                    {selectedSkills?.map((selectedSkill, index) => (
                                    <div className="border border-green pl-3 rounded-full" key={index}>
                                        {selectedSkill}
                                        <button className='text-sm hover:font-semibold hover:text-red-500 rounded-full px-1 border border-red-500 ml-2'
                                        onClick={() => removeSelectedSkill(index)}
                                        >
                                        ✕
                                        </button>
                                    </div>
                                    ))}
                                </div>
                                <Controller
                                    name="skills"
                                    control={control}
                                    defaultValue={[]}
                                    render={({ field }) => (
                                    <input
                                        type="text"
                                        {...field}
                                        className='rounded outline-none h-10 border border-dark/20 w-full px-3 py-2 max-w-5xl'
                                        {...field}
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        placeholder="Search for a skill"
                                    />
                                    )}
                                />
                                <ul className={`bg-slate-100 rounded-b-lg max-h-28 overflow-y-scroll px-5 py-2 ${hidden? 'hidden' : 'block'}`}>
                                    {suggestions.map((suggestion, index) => (
                                    <li key={index} className='cursor-pointer'
                                    onClick={() => selectSkill(suggestion)} >{suggestion}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-between gap-10 mx-auto mt-16'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' type="submit"  value="Next" /> 
                                )}
                            </div>
                        </form>
                    </div>
                );
            
            //Job Details
            case 4:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 px-10 py-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Add Few Details of the Job</h1>
                        <p className='text-sm mb-8'>Make the requirements clear to the candidates</p>

                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Job Type */}
                            <label className='text-dark text-xl block mb-2 mt-5'>Job Type <sup className='text-red-500'>*</sup></label>
                            <div className='grid md:flex flex-wrap gap-3'>                               
                                {['Full-time', 'Part-time', 'Temporary', 'Permanent', 'Internship', 'Contract'].map((type) => (
                                <div
                                    key={type}
                                    className={`w-fit ${
                                    selectedJobType === type
                                    ? 'bg-dark/80 text-white shadow-lg'
                                    : errors.job_type ? 'border border-red-500' 
                                    : 'bg-green/40 hover:bg-dark/80 hover:text-white hover:shadow-lg'
                                } px-3 rounded-full cursor-pointer`}
                                onClick={() => setValue('job_type', type)}
                                >
                                <Controller
                                    name="job_type"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                    <>
                                        {type}
                                        <input type="radio" {...field} value={type} style={{ display: 'none' }} />
                                    </>
                                    )}
                                />
                                </div>
                            ))}
                            </div>
                            {errors.job_type && <p className="text-red-500 mt-2">Job type is required</p>}


                            {/* Experience Level */}
                            <label className='text-dark text-xl block mb-2 mt-8'>Experience Level <sup className='text-red-500'>*</sup></label>
                            <div className='grid md:flex flex-wrap gap-3'>                               
                                {['No-experience', 'Under 1 year', '1 year', '2-3 years', '3-5 years', '5-8 years', '8-10 years', '10+ years'].map((exp) => (
                                <div
                                    key={exp}
                                    className={`w-fit ${
                                    selectedExperience === exp
                                    ? 'bg-dark/80 text-white shadow-lg'
                                    : errors.experience ? 'border border-red-500' 
                                    : 'bg-green/40 hover:bg-dark/80 hover:text-white hover:shadow-lg'
                                } px-3 rounded-full cursor-pointer`}
                                onClick={() => setValue('experience', exp)}
                                >
                                <Controller
                                    name="experience"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                    <>
                                        {exp}
                                        <input type="radio" {...field} value={exp} style={{ display: 'none' }} />
                                    </>
                                    )}
                                />
                                </div>
                            ))}
                            </div>
                            {errors.experience && <p className="text-red-500 mt-2">Experience is required</p>}


                            {/* Compensation Package */}
                            <label className='text-dark text-xl block mb-2 mt-8'>Compensation Package</label>
                            <div className='grid md:flex flex-wrap gap-3'>                               
                                {['Yearly Pay', 'Bonus Opportunities', 'Performance Bonus', 'Signing Bonus', 'RSU', 'Stock options'].map((compensation) => (
                                <div
                                    key={compensation}
                                    className={`w-fit ${
                                    selectedCompensationPackage === compensation
                                    ? 'bg-dark/80 text-white shadow-lg' 
                                    : 'bg-green/40 hover:bg-dark/80 hover:text-white hover:shadow-lg'
                                } px-3 rounded-full cursor-pointer`}
                                onClick={() => setValue('compensation_package', compensation)}
                                >
                                <Controller
                                    name="compensation_package"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                    <>
                                        {compensation}
                                        <input type="radio" {...field} value={compensation} style={{ display: 'none' }} />
                                    </>
                                    )}
                                />
                                </div>
                            ))}
                            </div>
                           
                            
                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[600px] flex justify-between gap-10 mx-auto mt-16'>
                                {/* Previous Button */}
                                {curStep > 0 && (
                                    <button className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' onClick={handlePreviousStep}>Previous</button>
                                )}

                                {/* Next Button */}
                                <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20' type="submit" onClick={() => setFinished(true)} /> 
                            </div>
                        </form>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <>
            {
                isMobile?
                <Stepper
                    style={{ width: "600px", marginLeft: "auto", marginRight: "auto", marginTop: "60px", marginBottom: "20px" }}
                    curStep={curStep}
                    setCurStep={setCurStep}
                    progressBarBackgroundColor='green'
                >
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                </Stepper>
            :
                <Stepper
                    style={{ width: "400px", marginLeft: "auto", marginRight: "auto", marginTop: "60px", marginBottom: "20px" }}
                    curStep={curStep}
                    setCurStep={setCurStep}
                    progressBarBackgroundColor='green'
                >
                    <Step />
                    <Step />
                    <Step />
                    <Step /> 
                    <Step /> 
                </Stepper> 
            }
            {renderContent()}         
        </>
    );
};

export default EmployerOnboarding;
