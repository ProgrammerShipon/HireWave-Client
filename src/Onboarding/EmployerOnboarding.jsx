import { useState } from 'react';
import { Stepper, Step } from "@tkwant/react-steps";
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import useAllCategories from '../Hooks/useAllCategories';
import { IoMdAddCircleOutline } from 'react-icons/io';

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
      
    const { register, handleSubmit, setValue, watch, getValues, formState: { errors } } = useForm();
    const isMobile = window.innerWidth > 768;
    const [curStep, setCurStep] = useState(0);
    const [finished, setFinished]= useState(false)
    const navigate= useNavigate()

    //Watch
    const selectedCategory = watch('job_category', '');
    const selectedSubCategory = watch('sub_category', []);
    const singleCategory= allCategoriesData.find(category => category.name === selectedCategory)
    // console.log(selectedCategory && singleCategory);

    //Offered jobs according to sub_category
    const offeredJobs = selectedSubCategory.reduce((jobs, selectedCategory) => {
        const category = singleCategory.subcategories.find((subcategory) => subcategory.name === selectedCategory);
        return category ? jobs.concat(category.jobs) : jobs;
    }, []);
    console.log(offeredJobs);

    const selectedJobs= watch('jobs', []);
    console.log(selectedJobs)

    const [skills, setSkills] = useState([{ id: 1, value: "" }]); 
    const [maximumWarning, setMaximumWarning]= useState(false)

    const handleIncreaseSkillField = () => {
        if (skills.length < 10) {
        const newId = skills.length + 1;
        setSkills([...skills, { id: newId, value: "" }]);
        }
        else setMaximumWarning(true)
    };
    //Form Submit function
    const onSubmit = data => {
        console.log(data);
        // console.log(selectedSubCategory);
        setCurStep(curStep + 1)

        //TODO: Backend integration
        finished && navigate('/')
    }

    // Previous step function
    const handlePreviousStep = () => {
        setCurStep(curStep - 1);
    };

    const renderContent = () => {
        switch (curStep) {

            //Job_category
            case 0:
                return (
                    <div className='w-96 md:w-[720px] border border-green rounded mt-10 mb-20 p-6 md:p-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Choose a category that fits your company best</h1>
                        <p className='text-sm mb-8'>This information helps us for better recommendations across HireWave</p>
            
                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Job Category */}
                            <div>
                                <div className='grid md:flex flex-wrap gap-5'>
                                {allCategoriesData.map((category) => (
                                    <div
                                    key={category.name}
                                    className={`w-fit ${
                                        selectedCategory === category.name
                                        ? 'bg-dark/80 text-white shadow-lg'
                                        : 'bg-green/40 hover:bg-dark/80 hover:text-white hover:shadow-lg'
                                    } px-3 rounded-full cursor-pointer`}
                                    onClick={() => setValue('job_category', category.name)}
                                    >
                                    {category.name}
                                    </div>
                                ))}
                                </div>
                                {errors.Job_category?.type === 'required' && <span className='text-red-500'>This field is required</span>}
                            </div>
                           
                            {/* Sub category */}
                            {
                                selectedCategory &&  <p className=' text-dark mt-8 mb-5'>Choose sub category/ies for the selected category that your company works on:</p>
                            }
                            <div className='grid md:flex flex-wrap gap-5'>
                            {
                                selectedCategory && 
                                singleCategory.subcategories.map((category, index)=> (
                                    <div
                                    key={category.name}
                                    className={`w-fit ${
                                        selectedSubCategory.includes(category.name)
                                        ? 'bg-dark/80 text-white shadow-lg flex gap-2 items-center'
                                        : 'hover:bg-dark/80 hover:text-white hover:shadow-lg'
                                    } px-3 rounded-full border flex gap-2 items-center border-green cursor-pointer`}
                                    onClick={() => setValue((`sub_category[${index}]`), category.name)}
                                    >
                                    <AiOutlinePlus/>{category.name}
                                    </div>
                                ))
                            }
                            </div>


                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[720px] flex justify-end mx-auto mt-8'>

                                {/* Next Button */}
                                {curStep < 6 && (
                                    <input className='bg-transparent text-dark hover:text-white px-5 py-2 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 mt-8' type="submit"  value="Next" /> 
                                )}
                            </div>
                                   
                        </form>
                    </div>
                );

            //Jobs needed
            case 1:
                return (
                    <div className='w-96 md:w-[720px] border border-green rounded mt-10 mb-20 p-6 md:p-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Let's Understand your Needs</h1>
                        <p className='text-sm mb-8'>What type of talent for job you looking for?</p>
                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Jobs */}
                            <div className='grid md:flex flex-wrap gap-5'>
                            {
                                offeredJobs && 
                                offeredJobs.map((job, index)=> (
                                    <div
                                    key={job}
                                    className={`w-fit ${
                                        selectedJobs.includes(job)
                                        ? 'bg-dark/80 text-white shadow-lg flex gap-2 items-center'
                                        : 'hover:bg-dark/80 hover:text-white hover:shadow-lg'
                                    } px-3 rounded-full border flex gap-2 items-center border-green cursor-pointer`}
                                    onClick={() => setValue((`jobs[${index}]`), job)}
                                    >
                                    <AiOutlinePlus/>{job}
                                    </div>
                                ))
                            }
                            </div>

                           
                            {/* Submit */}
                            <div className='absolute -left-10 w-96 md:w-[720px] flex justify-between gap-10 mx-auto mt-16'>
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
            case 2:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 p-6 md:p-10 mx-auto '>
                        <h1 className='font-semibold text-2xl text-green mb-2'>What skill sets are you looking for?</h1>
                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>

                            {/* Skill field */}
                            <div>
                                <label className='text-dark block mb-1'>Add a Skill</label>
                                {skills.map((skill, index) => (
                                    <div key={skill.id} className='flex items-center gap-5 mb-3'>
                                    <input
                                        type='text'
                                        className='rounded outline-none h-10 border border-dark/20 w-full px-3 py-2 max-w-5xl'
                                        {...register(`skill[${index}]`)}
                                        value={skill.value}
                                        onChange={(e) => {
                                        const updatedSkills = [...skills];
                                        updatedSkills[index].value = e.target.value;
                                        setSkills(updatedSkills);
                                        }}
                                    />
                                    {index === skills.length - 1 && (
                                        <IoMdAddCircleOutline
                                        onClick={handleIncreaseSkillField}
                                        className='cursor-pointer hover:bg-green/10 rounded-full p-1'
                                        fill='green'
                                        size={32}
                                        />
                                    )}
                                    </div>
                                ))}
                                {
                                    maximumWarning && <p className='text-red-500'>Maximum skill field reached</p>
                                }
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
            
            //Education
            case 3:
                return (
                    <div className='w-96 md:w-[600px] border border-green rounded mt-10 mb-20 px-10 py-10 mx-auto'>
                        <h1 className='font-semibold text-2xl text-green mb-2'>Add an Education Detail </h1>

                        <form className='relative' onSubmit={handleSubmit(onSubmit)}>
                            {/* Institution Name */}
                            <div>
                                <label className='text-dark block mb-1 mt-5'>Institution Name</label>
                                <input
                                className='rounded outline-none h-10 border border-dark/20 w-full px-3' 
                                type="text" 
                                placeholder='e.g. Notre Dame College'
                                {...register("institution")}
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
                </Stepper> 
            }
            {renderContent()}         
        </>
    );
};

export default EmployerOnboarding;
