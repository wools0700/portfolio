import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// About
const infos = [
    { label: "이름", value: "방우리" },
    { label: "경력", value: "2년 1개월" },
    { label: "이메일", value: "woole506@gmail.com" },
    { label: "직무", value: "Web Developer (Frontend)" },
    { label: "GitHub", value: "https://github.com/wools0700" },
    { label: "Portfolio", value: "https://wools0700.github.io" }
];

// Skills
const skills = [
    { name: "HTML5", value: 90 },
    { name: "CSS3", value: 90 },
    { name: "JavaScript", value: 70 },
    { name: "jQuery", value: 70 },
    { name: "PHP", value: 60 },
    { name: "MySQL", value: 70 },
    { name: "React", value: 30 },
    { name: "Python", value: 50 },
    { name: "GitHub", value: 80 },
    { name: "AI", value: 80 }
];

// Project
const projects = [
    {
        title: "세무·회계 종합 시스템",
        period: "2025.06 ~ 2026.02",
        desc: "사내 회계 시스템 제작",
        skills: ["HTML", "CSS","JavaScript","jQuery","PHP"],
        image: "/images/security_policy.jpg",
        link: "/project1"
    },
    {
        title: "SM-TMCall 시스템",
        period: "2025.07 ~ 2025.08",
        desc: "자회사(쇼엠 인슈어런스) 보험 텔레마케팅 사용자 및 관리자 사이트 제작",
        skills: ["HTML", "CSS","JavaScript","jQuery","PHP"],
        image: "/images/security_policy.jpg",
        link: "/project2"
    },
    {
        title: "수수료 시스템",
        period: "2025.12 ~ 2026.01",
        desc: "자회사(쇼엠 인슈어런스) 상담원 수수료 관리 및 정산 업무 지원 시스템 제작",
        skills: ["HTML", "CSS","JavaScript","jQuery","PHP"],
        image: "/images/security_policy.jpg",
        link: "/#"
    },
    // {
    //     title: "쇼엠 인슈어런스 종합정보시스템 제작",
    //     period: "2025.09",
    //     desc: "자회사(쇼엠 인슈어런스) 사내 종합 정보 시스템 제작",
    //     skills: ["HTML", "CSS","JavaScript","jQuery","PHP"],
    //     image: "/images/security_policy.jpg",
    //     link: "/#"
    // },
    // {
    //     title: "상담톡 시스템",
    //     period: "2026.01 ~ 2026.02",
    //     desc: "자회사(쇼엠 인슈어런스) 카카오톡 오픈채팅 상담 시스템 제작",
    //     skills: ["HTML", "CSS","JavaScript","jQuery","PHP"],
    //     image: "/images/security_policy.jpg",
    //     link: "/#"
    // },
    // {
    //     title: "SM-TMCall 분석 사이트",
    //     period: "2026.01",
    //     desc: "자회사(쇼엠 인슈어런스) 녹취 분석 및 통계 시스템 제작",
    //     skills: ["HTML", "CSS","JavaScript","jQuery","PHP"],
    //     image: "/images/security_policy.jpg",
    //     link: "/#"
    // }
];

// Career
const careerData = [
    {
        company: "(주) 쇼엠",
        period: "2025.11.11 ~ 2026.02.20 (1년 3개월)",
        skills: ["PHP", "웹개발", "웹사이트 개발"],
        image: "/images/showm.png",
        projects: [
            {
                title: "모바일 서비스 기획 및 운영 기반 수익화 플랫폼 구축",
                date: "2024.11 ~ 2025.05",
                desc: "광고 기반 수익 모델을 적용한 모바일 애플리케이션 및 웹 서비스를 기획·개발. 카카오 비즈니스 채널 및 웹사이트를 연계한 서비스 운영을 통해 다양한 플랫폼을 구축하고 약 40여 개 서비스의 생성 및 운영 경험 확보"
            },
            {
                title: "사내 시스템 개발 및 운영 자동화 플랫폼 구축",
                date: "2025.05 ~ 2026.02",
                desc: "사내 운영 효율화를 위한 다양한 웹 시스템 개발 및 유지보수 수행. 종합정보시스템, 전자결재시스템, 세무회계시스템, TM 콜센터 사용자/관리자 페이지, 상담톡, 수수료 정산 시스템, 녹취 분석 시스템 등을 구축하며 서비스 구조 설계 및 기능 개발 경험 확보"
            }
        ],
    },
    {
        company: "(주) 두두아이티",
        period: "2023.11 ~ 2024.07 (9개월)",
        skills: ["C", "C++","임베디드 리눅스"],
        image: "/images/duduit.png",
        projects: [
            {
                title: "정부 과제 기반 IP 카메라 TTA 인증 대응 및 펌웨어 개선",
                date: "2023.11 ~ 2024.07",
                desc: "IP 카메라 펌웨어 및 CGI 수정과 테스트를 수행하며 TTA 인증 기준에 맞는 테스트 리스트를 구축. 인증 실패 원인을 분석하고 개선을 반복하여 20개 이상의 펌웨어 버전을 검증, 4종 디바이스의 인증 및 개발지원 시험 통과에 기여"
            },
        ],
    },
];

const moveTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
    });
};

function Home() {
    return (
        <>
            <header>
                <nav>
                    <button className="menu-item" onClick={() => moveTo("about")}>
                        About
                    </button>

                    <button className="menu-item" onClick={() => moveTo("skill")}>
                        Skills
                    </button>

                    <button className="menu-item" onClick={() => moveTo("project")}>
                        Project
                    </button>

                    <button className="menu-item" onClick={() => moveTo("career")}>
                        Career
                    </button>
                </nav>
            </header>

            <div className="hero-banner">
                <div className="hero-content">
                    <p className="hero-sub">WEB DEVELOPER PORTFOLIO</p>
                    <h1 className="hero-title">
                        배우고 적용하며<br />
                        <span>계속 성장하는 웹 개발자</span>
                    </h1>
                    <p className="hero-desc">
                        다양한 서비스를 직접 만들고 운영하며
                        실무 경험을 쌓아온 웹 개발자입니다.
                    </p>
                </div>
            </div>

            <section className="section-item colored" id="about">
                <h2 className="section-title">#About</h2>

                <div className="about-wrap">
                    <div className="profile-wrap">
                        <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="profile" />
                    </div>

                    <div className="info-wrap">
                        {infos.map(info => (
                            <div className="info-item" key={info.label}>
                                <span className="info-label">
                                    {info.label}
                                </span>

                                <span className="info-value">
                                    {info.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-item" id="skill">
                <h2 className="section-title">#Skill</h2>

                <div className="skill-wrap">
                    {skills.map(skill => (
                        <div className="skill-item" key={skill.name}>
                            <p className="skill-label">
                                {skill.name}
                            </p>

                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: `${skill.value}%` }}>
                                    <span className="skill-value">
                                        {skill.value}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section-item" id="project">
                <h2 className="section-title">
                    #Project
                </h2>

                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    // navigation
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                    className="project-swiper"
                >
                    {projects.map(project => (
                        <SwiperSlide key={project.title}>
                            <Link
                                to={project.link}
                                className="project-link"
                            >
                                <div className="project-item">

                                    <div className="project-thumb">
                                        <img
                                            src={`${import.meta.env.BASE_URL}${project.image}`}
                                            alt={project.title}
                                        />
                                    </div>

                                    <div className="project-content">

                                        <h3 className="project-name">
                                            {project.title}
                                        </h3>

                                        <p className="project-date">
                                            {project.period}
                                        </p>

                                        <p className="project-desc">
                                            {project.desc}
                                        </p>

                                        <div className="project-skill">
                                            {project.skills.map(skill => (
                                                <span className={skill} key={skill}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                    </div>

                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="section-item" id="career">
                <h2 className="section-title">#Career</h2>

                {careerData.map((company, idx) => (
                    <div key={idx} className="career-company">
                    
                        <img
                            className="career-logo"
                            src={`${import.meta.env.BASE_URL}${company.image}`}
                            alt={company.company}
                        />
                        <h3 className="career-company-name">{company.company}</h3>
                        <p className="career-period">{company.period}</p>

                        <div className="career-skills">
                            {company.skills.map((skill, i) => (
                                <span key={i} className={"career-skill-tag"}>
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="career-projects">
                            {company.projects.map((project, i) => (
                                <div key={i} className="career-project-item">
                                    <h4 className="career-title">{project.title}</h4>
                                    <p className="career-date">{project.date}</p>
                                    <p className="career-desc">{project.desc}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}

                </section>

                <footer className="footer">
                    <div className="footer-inner">
                        <p className="footer-title">© 2026 Portfolio</p>
                        <p>React 기반으로 제작된 개인 포트폴리오입니다.</p>
                        <p>프로젝트 내용은 실제 업무 경험을 기반으로 작성되었으며, 보안 정책에 따라 일부 정보는 비공개 처리되었습니다.</p>
                    </div>
                </footer>
        </>
    );
}

export default Home;