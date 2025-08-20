import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Project Zenith",
      description: "A mobile app for fitness tracking with user authentication and data storage",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjryF88DDUb_CwzsmhKGl1sfQihzEeCIMMsgSGTU75wAxxzmOUupNh8ef3_TaGVGtNgRdKXWX-lA_llljXJQqJw3XEnA8FBtxAUI2rNgplLiD86Jfgb0LZL3shZCg-5UpTGB23eiXJPmpGAY9Ok6NbnNH_CpW1sc4nh1vdg-J6Ss9NUWqwN0XrP5EJe5YO5S6lQR87RHyfRTl-7znUy0oKuj91teyAa5rHrFG8kyzJFNeqE8UTKfDibKxLizmHhjKFLlvi3_ctLoQ",
      link: "https://github.com/yourusername/project-zenith"
    },
    {
      id: 2,
      title: "Project Horizon",
      description: "A web platform for online learning with interactive courses and progress tracking",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqh3gVdFQ8ZDuQrt7a4ak2eYyVE6Pv24dI11s-mZ3XVC_GclbUxAvOwMX4z1Wn8ka7oNu7fKFrKrVPUNhiAno-fJVm2yHEejG7dXpErAEFwtwp2K5y38O9rgVWG15bGnayI0kWIQyKwSVyNs1KM1cbZ5Weho4zmJ8GSISobZCm-d1BEcSxAOHWDA7sOgjoxbVc7HI9ME1IT9yQqEiY1i56GLV6IAdiSiU0wTmNq_IEhjXMnVwVQ5pCB32lUARCM_maKE3W-SRBqdU",
      link: "https://github.com/yourusername/project-horizon"
    },
    {
      id: 3,
      title: "Project Nebula",
      description: "An e-commerce site for handcrafted goods with secure payment processing and inventory management",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdoseIi6w4ZeWOojvoXts80zw6P3o4G3ootegLZV43SgK-fg8M3RqSCzC7gbm6YcYq9_VuqQq_3UK--LBmk8Y8RdnVJuxg8oIAUYX3whfcRsEitXFaL4UW7riPX1ugw-qXni30OyXNKjq5y3GjmbaOlCVVlC3G_tMaLRZwngD3ul_0Zq3XWvA0ZJTA6_KXzP7bk0hdX1LyfKLzjEo52-UFJd9-pgsUd7crW9Vki7-KqUk1XwaIvCZSeZ-RNy8xQQJTEGQ4tQzz8f0",
      link: "https://github.com/yourusername/project-nebula"
    },
    {
      id: 4,
      title: "Project Aurora",
      description: "A real-time chat application with video calling and file sharing capabilities",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "https://github.com/yourusername/project-aurora"
    },
    {
      id: 5,
      title: "Project Cosmos",
      description: "A data visualization dashboard for business analytics and reporting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "https://github.com/yourusername/project-cosmos"
    },
    {
      id: 6,
      title: "Project Phoenix",
      description: "A task management application with team collaboration features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      link: "https://github.com/yourusername/project-phoenix"
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleViewMyWork = () => {
    window.open('https://github.com/krishkumar1577', '_blank');
  };

  const handleProjectClick = (projectLink: string) => {
    window.open(projectLink, '_blank');
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f5f2f0] px-10 py-3">
          <div className="flex items-center gap-4 text-[#181411]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#181411] text-lg font-bold leading-tight tracking-[-0.015em]">Anshul</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#181411] text-sm font-medium leading-normal" href="#about">About</a>
              <a className="text-[#181411] text-sm font-medium leading-normal" href="#skills">Skills</a>
              <a className="text-[#181411] text-sm font-medium leading-normal" href="#projects">Projects</a>
              <a className="text-[#181411] text-sm font-medium leading-normal" href="#contact">Contact</a>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => window.open('https://github.com/krishkumar1577', '_blank')}
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 bg-[#f5f2f0] text-[#181411] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-[#e6e0db] transition-colors duration-300"
              >
                <div className="text-[#181411]" data-icon="GithubLogo" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"
                    ></path>
                  </svg>
                </div>
              </button>
              <button
                onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 bg-[#f5f2f0] text-[#181411] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-[#e6e0db] transition-colors duration-300"
              >
                <div className="text-[#181411]" data-icon="LinkedinLogo" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded items-center justify-center p-4"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-8MEs60w-SzoZKjI_o0sQ1GgrZ3Gf9BpsGTDL6GtkfouqLjWgl1Ij9HDUXSSBJL1KVPVPgJqTC3mHO9apRwxjdo8V0kjwenQ5Ipv2jqdHFtNy-INr9K9TQMxfjckdgYBvglkGvPowTkNHz9gggfgm_daBHfzx_heYc5RoFueCufzL2vI0DooahW8BrkShOYkUi_ponr3RxCHVzIaFlVJinFn8gasvZ915Njhv7aeYPV2AHshtR15QY3yi2CLbJenP2RyWtAyru3M")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Crafting Digital Experiences
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      I'm a full-stack developer passionate about creating intuitive and engaging user interfaces. With a focus on user-centered design and robust backend systems,
                      I strive to deliver solutions that meet both user needs and business goals. Interactive logo: Background nebula slowly shifting and subtly reacts to mouse
                      movements.
                    </h2>
                  </div>
                  <button
                    onClick={handleViewMyWork}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#f2740d] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-[#e6650a] transition-colors duration-300"
                  >
                    <span className="truncate">View My Work</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full" style={{ height: "80px" }}></div>
            
            <section id="about">
              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">About Me</h2>
              <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
                I'm a full-stack developer with a background in computer science and a passion for crafting digital experiences. I believe in the power of technology to solve
                problems and improve people's lives. My approach is rooted in understanding user needs and translating them into elegant and functional designs, coupled with robust
                and scalable backend systems. Subtle animations: Text fades in on scroll.
              </p>
            </section>
            
            <div className="w-full" style={{ height: "80px" }}></div>
            
            <section id="skills">
              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                <div className="flex flex-1 gap-3 rounded-xl border border-[#e6e0db] bg-white p-4 flex-col hover:shadow-lg hover:border-[#f2740d] transition-all duration-300 hover:scale-105">
                  <div className="text-[#f2740d]" data-icon="PencilSimple" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#181411] text-base font-bold leading-tight">UI/UX Design</h2>
                    <p className="text-[#8a7360] text-sm font-normal leading-normal">
                      Proficient in Figma, Adobe XD, and Sketch for creating wireframes, prototypes, and high-fidelity designs.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-1 gap-3 rounded-xl border border-[#e6e0db] bg-white p-4 flex-col hover:shadow-lg hover:border-[#f2740d] transition-all duration-300 hover:scale-105">
                  <div className="text-[#f2740d]" data-icon="Code" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#181411] text-base font-bold leading-tight">Front-End Development</h2>
                    <p className="text-[#8a7360] text-sm font-normal leading-normal">
                      Expert in HTML, CSS, JavaScript, and React for building responsive and interactive user interfaces.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-1 gap-3 rounded-xl border border-[#e6e0db] bg-white p-4 flex-col hover:shadow-lg hover:border-[#f2740d] transition-all duration-300 hover:scale-105">
                  <div className="text-[#f2740d]" data-icon="MagnifyingGlass" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#181411] text-base font-bold leading-tight">User Research</h2>
                    <p className="text-[#8a7360] text-sm font-normal leading-normal">
                      Skilled in conducting user interviews, surveys, and usability testing to gather insights and validate designs.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-1 gap-3 rounded-xl border border-[#e6e0db] bg-white p-4 flex-col hover:shadow-lg hover:border-[#f2740d] transition-all duration-300 hover:scale-105">
                  <div className="text-[#f2740d]" data-icon="CursorClick" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M169.64,134.33l44.77-19.46A16,16,0,0,0,213,85.07L52.92,32.8A16,16,0,0,0,32.8,52.92L85.07,213a15.83,15.83,0,0,0,14.41,11l.79,0a15.83,15.83,0,0,0,14.6-9.59h0l19.46-44.77L184,219.31a16,16,0,0,0,22.63,0l12.68-12.68a16,16,0,0,0,0-22.63Zm-69.48,73.76.06-.05Zm95.15-.09-49.66-49.67a16,16,0,0,0-26,4.94l-19.42,44.65L48,48l159.87,52.21-44.64,19.41a16,16,0,0,0-4.94,26L208,195.31ZM88,24V16a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM8,96a8,8,0,0,1,8-8h8a8,8,0,0,1,0,16H16A8,8,0,0,1,8,96ZM120.85,28.42l8-16a8,8,0,0,1,14.31,7.16l-8,16a8,8,0,1,1-14.31-7.16Zm-81.69,96a8,8,0,0,1-3.58,10.74l-16,8a8,8,0,0,1-7.16-14.31l16-8A8,8,0,0,1,39.16,124.42Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#181411] text-base font-bold leading-tight">Interaction Design</h2>
                    <p className="text-[#8a7360] text-sm font-normal leading-normal">
                      Experienced in designing intuitive and engaging interactions, focusing on user flow and accessibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-1 gap-3 rounded-xl border border-[#e6e0db] bg-white p-4 flex-col hover:shadow-lg hover:border-[#f2740d] transition-all duration-300 hover:scale-105">
                  <div className="text-[#f2740d]" data-icon="DeviceMobile" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#181411] text-base font-bold leading-tight">Mobile Design</h2>
                    <p className="text-[#8a7360] text-sm font-normal leading-normal">
                      Specialized in designing mobile-first experiences, ensuring seamless usability across different devices.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-1 gap-3 rounded-xl border border-[#e6e0db] bg-white p-4 flex-col hover:shadow-lg hover:border-[#f2740d] transition-all duration-300 hover:scale-105">
                  <div className="text-[#f2740d]" data-icon="Desktop" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#181411] text-base font-bold leading-tight">Web Design</h2>
                    <p className="text-[#8a7360] text-sm font-normal leading-normal">
                      Focused on creating visually appealing and user-friendly websites, optimizing for performance and SEO.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-1 gap-3 rounded-xl border border-[#e6e0db] bg-white p-4 flex-col hover:shadow-lg hover:border-[#f2740d] transition-all duration-300 hover:scale-105">
                  <div className="text-[#f2740d]" data-icon="Database" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#181411] text-base font-bold leading-tight">Backend Development</h2>
                    <p className="text-[#8a7360] text-sm font-normal leading-normal">
                      Knowledgeable in Node.js, Python, and Ruby on Rails for building scalable and efficient server-side applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-1 gap-3 rounded-xl border border-[#e6e0db] bg-white p-4 flex-col hover:shadow-lg hover:border-[#f2740d] transition-all duration-300 hover:scale-105">
                  <div className="text-[#f2740d]" data-icon="Database" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#181411] text-base font-bold leading-tight">Database Management</h2>
                    <p className="text-[#8a7360] text-sm font-normal leading-normal">
                      Experienced in working with databases such as MySQL, PostgreSQL, and MongoDB for data storage and retrieval.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <div className="w-full" style={{ height: "80px" }}></div>
            
            <section id="projects">
              <div className="flex items-center justify-between px-4 pb-3 pt-5">
                <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em]">Projects</h2>
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="text-[#f2740d] text-sm font-medium leading-normal hover:text-[#e6650a] transition-colors duration-300"
                >
                  {showAllProjects ? 'View Less' : 'View More'}
                </button>
              </div>
              
              <div 
                className={`${
                  showAllProjects 
                    ? 'grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 p-4' 
                    : 'flex gap-4 p-4 overflow-x-auto scrollbar-hide'
                } transition-all duration-500`}
                style={!showAllProjects ? { scrollBehavior: 'smooth' } : {}}
              >
                {displayedProjects.map((project) => (
                  <div 
                    key={project.id}
                    onClick={() => handleProjectClick(project.link)}
                    className={`${
                      showAllProjects ? 'flex flex-col' : 'flex-shrink-0 w-80 flex flex-col'
                    } gap-3 pb-3 cursor-pointer group hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden bg-white border border-transparent hover:border-[#f2740d]`}
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg group-hover:brightness-110 transition-all duration-300"
                      style={{
                        backgroundImage: `url("${project.image}")`
                      }}
                    ></div>
                    <div className="px-2">
                      <p className="text-[#181411] text-base font-medium leading-normal group-hover:text-[#f2740d] transition-colors duration-300">
                        {project.title}
                      </p>
                      <p className="text-[#8a7360] text-sm font-normal leading-normal">
                        {project.description}
                      </p>
                      <div className="mt-2 flex items-center gap-1 text-[#f2740d] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>View Project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
                
                {!showAllProjects && (
                  <div 
                    onClick={() => setShowAllProjects(true)}
                    className="flex-shrink-0 w-80 flex flex-col items-center justify-center gap-3 pb-3 cursor-pointer group hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-lg border-2 border-dashed border-[#e6e0db] hover:border-[#f2740d] bg-[#f9f7f4] hover:bg-[#f5f2f0]"
                    style={{ minHeight: '240px' }}
                  >
                    <div className="text-[#f2740d] group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-[#181411] text-base font-medium leading-normal group-hover:text-[#f2740d] transition-colors duration-300">
                        View More Projects
                      </p>
                      <p className="text-[#8a7360] text-sm font-normal leading-normal">
                        Discover additional work
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>
            
            <div className="w-full" style={{ height: "80px" }}></div>
            
            <section id="contact">
              <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-center">Contact</h2>
              <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="w-full max-w-[480px]">
                  <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-[#181411] focus:outline-0 focus:ring-0 border-none bg-[#f5f2f0] focus:border-none h-14 placeholder:text-[#8a7360] p-4 text-base font-normal leading-normal"
                      />
                    </label>
                  </div>
                  <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-[#181411] focus:outline-0 focus:ring-0 border-none bg-[#f5f2f0] focus:border-none h-14 placeholder:text-[#8a7360] p-4 text-base font-normal leading-normal"
                      />
                    </label>
                  </div>
                  <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                    <label className="flex flex-col min-w-40 flex-1">
                      <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded text-[#181411] focus:outline-0 focus:ring-0 border-none bg-[#f5f2f0] focus:border-none min-h-36 placeholder:text-[#8a7360] p-4 text-base font-normal leading-normal"
                      ></textarea>
                    </label>
                  </div>
                  <div className="flex px-4 py-3 justify-center">
                    <button
                      type="submit"
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-[#f2740d] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e6650a] transition-colors duration-300"
                    >
                      <span className="truncate">Send</span>
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
