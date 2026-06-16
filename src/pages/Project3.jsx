import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Project3() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const project = {
        title: "수수료 시스템",
        period: "2025.12 ~ 2026.01",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "PHP"
        ],

        desc: `
        - 자회사(쇼엠 인슈어런스) 상담원 수수료 관리 및 정산 업무 지원 시스템 제작
        `,

        resp: `- 사용자 및 관리자 웹 화면 프론트엔드 개발
        - 데이터 조회·검색·필터링·관리 기능 설계 및 구현
        - 정산 내역 관리 및 명세서 조회 화면 개발
        - 운영 관리 기능 시스템화 및 유지보수 효율성 개선
        `,

        screens: [
            {
                title: "업무 관리 화면 구성",
                desc: "정산 및 수수료 데이터를 효율적으로 조회할 수 있는 관리자 화면 개발. 복잡한 데이터 구조를 가독성 높은 UI로 구성하고 명세서 조회, 인쇄 및 다운로드 기능을 지원하도록 구현"
            },
            {
                title: "센터별 상담원 관리",
                desc: "센터 및 조직 단위별 상담원 현황을 조회하고 상태 정보 및 운영 데이터를 관리할 수 있도록 구현"
            },
            {
                title: "인라인 편집 기능",
                desc: "더블클릭으로 셀 편집 모드를 활성화하고 수정 후 Enter 입력 시 별도 새로고침 없이 화면과 DB가 동시에 반영되도록 인라인 편집 기능을 구현"
            },
            {
                title: "작업별 설정 관리",
                desc: "관리자가 시스템 내 공통 관리 항목을 직접 등록·수정·삭제할 수 있는 관리 기능 구현. 관리 데이터와 화면 요소를 연동하여 운영 효율성 향상"
            },
            {
                title: "대량 데이터 등록 기능",
                desc: "엑셀 파일 업로드를 통한 대량 데이터 등록 기능 개발. 반복 입력 작업을 최소화하고 데이터 처리 효율성 개선"
            },
            {
                title: "엑셀 다운로드 및 인쇄 기능",
                desc: "조회 결과를 지정된 서식의 엑셀 파일로 다운로드하거나 인쇄할 수 있도록 구현"
            },
            {
                title: "개인별 명세서 조회",
                desc: "개인별 정산 내역을 확인할 수 있는 명세서 화면을 구현하였으며 인쇄 시 지정된 서식을 유지하도록 구현"
            },
            {
                title: "다양한 팝업 인터페이스",
                desc: "상세 조회, 데이터 등록 및 수정 등 주요 업무 기능을 팝업 형태로 제공하여 사용성을 향상"
            },
            {
                title: "다중 필터 기능",
                desc: "DB에서 중복을 제거한 데이터를 기반으로 다중 필터 옵션을 구성하였으며 선택된 조건값을 백엔드로 전달하여 복합 조건으로 데이터를 조회할 수 있도록 구현"
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

export default Project3;