import React, { useEffect, useRef } from 'react';
import Header from '../../Component/Shared/Header';
import CardTwo from '../../Component/Shared/CardTwo';
import icpc from '../../assets/icpc.png';
import ostad from '../../assets/ostad.png';

const skills = [
    { name: 'HTML', percent: 98 },
    { name: 'CSS', percent: 90 },
    { name: 'TAILWIND', percent: 95 },
    { name: 'React JS', percent: 92 },
    { name: 'Python', percent: 90 },
    { name: 'Java', percent: 85 },
    { name: '.net with C#', percent: 88 },
    { name: 'PHP', percent: 95 },
    { name: 'MySQL', percent: 97 },
];

const Resume = () => {
    const barRefs = useRef([]);
    const percentRefs = useRef([]);

    useEffect(() => {
        barRefs.current.forEach((bar, idx) => {
            if (bar) {
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.transition = 'width 1.2s cubic-bezier(0.4,0,0.2,1)';
                    bar.style.width = skills[idx].percent + '%';
                }, 200 + idx * 200);
            }
        });
        percentRefs.current.forEach((percentEl, idx) => {
            if (percentEl) {
                percentEl.textContent = '0%';
                let start = 0;
                const end = skills[idx].percent;
                const duration = 1200;
                const step = Math.ceil(duration / end);
                const animate = () => {
                    if (start <= end) {
                        percentEl.textContent = start + '%';
                        start++;
                        setTimeout(animate, step);
                    } else {
                        percentEl.textContent = end + '%';
                    }
                };
                setTimeout(animate, 200 + idx * 200);
            }
        });
    }, []);

    return (
        <div data-aos="fade-up">
            <div className="">
                <Header name={"My Education"}></Header>
                {/* Training History */}
                <div className="mt-5" data-aos="fade-right">
                    <h1 className='rubik-font text-gray-300 text-4xl'>Training History</h1>
                    <div className="mt-5 grid md:grid-cols-2 gap-5" data-aos="fade-up">
                        <CardTwo level={"EDGE Machine Learning Training"} institute={"Jagannath University"} year={"2025"}></CardTwo>
                        <CardTwo level={"MERN Full Stack Development"} institute={"BDCalling Academy"} year={"2025"}></CardTwo>
                        <CardTwo level={"App Development With Flutter"} institute={"Ostad"} year={"2024"}></CardTwo>
                    </div>
                </div>
                {/* Skill  */}
                <div className="mt-10" data-aos="fade-left">
                    <h1 className='rubik-font text-gray-300 mb-4 text-4xl '>My Skills</h1>
                    <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
                        {skills.map((skill, idx) => (
                            <div key={skill.name} className="relative group bg-white p-5 rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
                                <div className="flex justify-between items-center">
                                    <h1 className='text-2xl font-semibold mt-2 mb-2 text-gray-800'>{skill.name}</h1>
                                    <span ref={el => percentRefs.current[idx] = el} className="text-xl font-bold text-[#FF014F] transition-all duration-500">0%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
                                    <div
                                        ref={el => barRefs.current[idx] = el}
                                        className="bg-gradient-to-r from-[#FF014F] via-pink-400 to-[#FF014F] h-3 rounded-full shadow-lg"
                                        style={{ width: 0 }}
                                    ></div>
                                </div>
                                <div className="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <svg className="w-full h-3 absolute top-10 left-0" viewBox="0 0 100 6" preserveAspectRatio="none">
                                        <defs>
                                            <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
                                                <stop offset="0%" stopColor="#FF014F" stopOpacity="0.2" />
                                                <stop offset="100%" stopColor="#FF014F" stopOpacity="0.2" />
                                            </linearGradient>
                                        </defs>
                                        <rect x="0" y="0" width="100" height="6" fill="url(#glow)" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* academic background */}
                <div className="mt-10" data-aos="fade-right">
                    <h1 className='rubik-font text-gray-300 text-4xl'>Academic History</h1>
                    <div className="mt-5 grid gap-5" data-aos="fade-up">
                        <CardTwo level={"Bechalor of Computer Science and Engineering"} institute={"Inaternational University of Business Agriculture and Technology"} year={"2022 - Present"}></CardTwo>
                        <CardTwo level={"Higher Secondary Certificate"} institute={"Dhaka Imperial College"} year={"2019 - 2021"}></CardTwo>
                        <CardTwo level={"Secondary School Certificate"} institute={"Madartek Abdul Aziz High School and College"} year={"2019"}></CardTwo>
                    </div>
                </div>
                {/* certificate */}
                <div className="mt-10">
                    <h1 className='rubik-font text-gray-300 text-4xl'>Certificates</h1>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        <img src={icpc} alt="" />
                        <img src={ostad} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;