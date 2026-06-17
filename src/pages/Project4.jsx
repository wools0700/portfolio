import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Project4() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const project = {
        title: "상담톡 시스템",
        period: "2026.01 ~ 2026.02",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "PHP"
        ],

        desc: `
        - 실시간 채팅 기반 상담 운영을 위해 웹 상담과 외부 채팅을 연동하고 템플릿, 메모, 파일 관리 기능을 통해 상담 효율성을 높인 상담 관리 시스템
        `,

        resp: `- 웹 기반 상담 채팅 UI 및 관리자 화면 개발
        - 메시징 기반 상담 흐름을 고려한 상담 인터페이스 구조 설계 및 구현
        - 템플릿 기반 자동 입력 기능 및 관리자 전용 템플릿 관리 기능 개발
        - 상담 중 고객 메모 작성 및 상담 이력 관리 기능 구현
        - 상담 중 첨부된 파일을 통합 조회할 수 있는 파일 관리(파일함) 기능 개발 (팝업 UI)
        - 상담 데이터 조회 및 상담 내역 모니터링 기능 구현
        - 상담 배분 설정 및 운영 관리 기능 개발
        - 상담 업무 효율화를 위한 관리 기능 전반 개선 및 유지보수 대응
        `,

        screens: [
            {
                title: "상담 채팅 기능",
                desc: "상담원과 고객 간 실시간 채팅을 기반으로 템플릿 입력, 고객 메모 작성, 파일 첨부 등 상담 업무에 필요한 기능을 통합 제공"
            },
            {
                title: "권한 기반 기능 분리",
                desc: "상담원과 관리자 역할을 분리하여 권한에 따라 접근 가능한 기능을 제어하고 사용자별 업무 환경을 다르게 구성"
            },
            {
                title: "관리자 데이터 기반 기능 운영 구조",
                desc: "관리자가 등록한 템플릿 및 운영 데이터를 상담원이 즉시 사용할 수 있도록 구성하여 개발 개입 없이 운영 가능한 시스템 구조 구현"
            },
            {
                title: "통합 파일 관리 기능",
                desc: "새 창이 아닌 팝업 형태로 파일함을 제공하며 드래그 이동이 가능하도록 구현하고 모든 채팅방의 첨부파일을 통합 조회 및 다운로드할 수 있도록 구성"
            },
            {
                title: "채팅 기반 자동완성 기능",
                desc: "채팅 입력 시 특정 키워드 입력(/)을 기반으로 등록된 데이터를 자동완성 형태로 제공하고 클릭 또는 엔터로 즉시 입력이 가능하도록 구현"
            },
            {
                title: "다중 조건 필터링 조회 기능",
                desc: "상담 및 운영 데이터를 다양한 조건으로 필터링하여 조회할 수 있도록 구성하여 데이터 검색 효율성을 향상"
            },
            {
                title: "유효성 검사",
                desc: "데이터 추가·수정·삭제 등 DB에 영향을 주는 작업에 대해 사전 확인 및 유효성 검사를 적용하여 데이터 오류를 방지"
            },
            {
                title: "달력 날짜 선택 기능",
                desc: "달력 UI를 통해 연도,월,일 단위로 날짜를 선택할 수 있도록 구현하였으며 선택된 값을 기준으로 서버에 전달하여 해당 날짜 데이터를 조회할 수 있도록 구현 "
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
                        <li>실시간 채팅 기반 상담 및 업무 지원 기능 통합 제공</li>
                        <li>권한 기반 상담원 / 관리자 기능 분리 및 운영 관리</li>
                        <li>템플릿 기반 자동 입력 및 관리자 중심 콘텐츠 관리 기능</li>
                        <li>채팅 기반 자동완성 기능을 통한 상담 입력 효율화</li>
                        <li>상담 이력 및 고객 메모 기반 업무 연속성 관리</li>
                        <li>첨부파일 통합 관리 및 팝업 기반 파일 조회 기능</li>
                        <li>다중 조건 필터링 기반 상담 데이터 조회 기능</li>
                        <li>운영 데이터 기반 상담 배분 및 관리 기능</li>
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

export default Project4;