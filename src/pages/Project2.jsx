import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Project2() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const project = {
        title: "SM-TMCall 시스템",
        period: "2025.07 ~ 2025.08",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "PHP"
        ],

        desc: `
        - 자회사(쇼엠 인슈어런스) 보험 텔레마케팅 업무 프로세스를 지원하는 사용자·관리자 통합 운영 시스템
        `,

        resp: `
        - 사용자 및 관리자 웹 화면 프론트엔드 개발
        - 데이터 조회·검색·필터링·관리 기능 설계 및 구현
        - 상담 업무 지원을 위한 운영 화면 및 통계 UI 개발
        - 운영 관리 기능 시스템화 및 유지보수 효율성 개선
        `,

        screens: [
            {
                title: "업무 관리 화면 구성",
                desc: "사용자 및 관리자 권한에 따른 업무 관리 화면 개발. 데이터 등록·수정·조회 기능과 업무 이력 관리 기능을 포함한 운영 UI 구현"
            },
            {
                title: "문서 전송 및 이력 관리 기능",
                desc: "파일 기반 문서 전송 기능 개발. 전송 결과 조회, 이력 관리 및 첨부 파일 확인 기능 구현"
            },
            {
                title: "운영 환경 설정 관리",
                desc: "관리자가 시스템 내 공통 관리 항목을 직접 등록·수정·삭제할 수 있는 관리 기능 구현. 관리 데이터와 화면 요소를 연동하여 운영 효율성 향상"
            },
            {
                title: "대량 데이터 등록 기능",
                desc: "엑셀 파일 업로드를 통한 대량 데이터 등록 기능 개발. 반복 입력 작업을 최소화하고 데이터 처리 효율성 개선"
            },
            {
                title: "조건 기반 데이터 처리 기능",
                desc: "다단계 조건 선택 및 검증 과정을 통해 대상 데이터를 추출하고 일괄 처리할 수 있는 기능 구현. 업무 프로세스를 고려한 단계별 UI 설계 및 개발"
            },
            {
                title: "다중 필터 기능",
                desc: "DB에서 중복을 제거한 데이터를 기반으로 다중 필터 옵션을 구성하였으며 선택된 조건값을 백엔드로 전달하여 복합 조건으로 데이터를 조회할 수 있도록 구현하였습니다."
            },
            {
                title: "유효성 검사",
                desc: "데이터 추가·수정·삭제 등 DB에 영향을 주는 작업에 대해 사전 확인 및 유효성 검사를 적용하여 데이터 오류를 방지하도록 하였습니다."
            },
            {
                title: "달력 날짜 선택 기능",
                desc: "달력 UI를 통해 연도,월,일 단위로 날짜를 선택할 수 있도록 구현하였으며 선택된 값을 기준으로 서버에 전달하여 해당 날짜 데이터를 조회할 수 있도록 하였습니다."
            }
        ]
    };

    return (
        <main className="detail-page">

            <div className="detail-container">
                
                <button className="detail-back-btn" onClick={() => navigate(-1)}>
                    ← 목록으로
                </button>

                <h1 className="detail-title">
                    {project.title}
                </h1>

                <p className="detail-period">
                    {project.period}
                </p>

                <div className="detail-skill-wrap">
                    {project.skills.map(skill => (
                        <span
                            key={skill}
                            className={`detail-skill ${skill}`}
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <section className="detail-section">

                    <h2 className="detail-section-title">
                        프로젝트 소개
                    </h2>

                    <p className="detail-desc">
                        {project.desc}
                    </p>

                </section>

                <section className="detail-section">

                    <h2 className="detail-section-title">
                        담당 업무
                    </h2>
                    
                    <p className="detail-resp">
                        {project.resp}
                    </p>

                </section>

                <section className="detail-section">

                    <h2 className="detail-section-title">
                        주요 기능
                    </h2>

                    <ul className="detail-feature-list">
                        <li>다단계 조건 선택 기반 데이터 추출 및 일괄 처리</li>
                        <li>권한 기반 업무 관리 화면</li>
                        <li>운영 환경 설정 관리</li>
                        <li>이력 관리 기능</li>
                        <li>운영 현황 모니터링 및 통계 데이터 조회</li>
                    </ul>

                </section>

                <section className="detail-section">
                    
                    <h2 className="detail-section-title">
                        프로젝트 화면
                    </h2>
                    
                    <div className="detail-notice">
                        <strong>보안 안내</strong>

                        <p>본 프로젝트는 사내 시스템으로 실제 운영 환경의 화면 및 데이터는 보안 정책에 따라 비공개 처리하였습니다.</p>
                        <p>본 프로젝트의 UI 디자인 및 데이터는 사내 보안 규정(기밀 유지)에 해당하여, 모든 이미지를 제외하고 기술적 구현 사항 중심으로 작성되었습니다.</p>
                    </div>

                    {project.screens.map(screen => (

                        <div
                            className="detail-screen-item"
                            key={screen.title}
                        >
                            <div className="detail-screen-content">

                                <h3 className="detail-screen-title">
                                    {screen.title}
                                </h3>

                                <p className="detail-screen-desc">
                                    {screen.desc}
                                </p>

                            </div>

                        </div>

                    ))}

                </section>

            </div>

        </main>
    );
}

export default Project2;