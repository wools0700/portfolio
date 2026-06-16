import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Project1() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const project = {
        title: "세무·회계 종합 시스템",
        period: "2025.06 ~ 2026.02",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "PHP"
        ],

        desc: `
        - 원화·외화 자금 흐름과 국내외 수익·비용 정산 및 세무 관리의 효율적인 관리를 위한 통합 세무종합시스템 구축.
        `,

        resp: `- 세무회계 종합시스템 관리자 화면 프론트엔드 개발
        - 데이터 조회·검색·필터링 기능 및 업무 화면 구현
        - 대용량 데이터 관리를 위한 테이블 UI 설계 및 개발
        - 업무 효율성 향상을 위한 사용자 중심 인터페이스 구현
        `,

        screens: [
            {
                title: "기본적인 화면 구성",
                desc: "세무·회계 시스템 특성상 대량의 데이터를 효율적으로 관리할 수 있도록 테이블 기반 UI를 구현하였습니다. 연도·월·일 기준 조회 및 페이지 단위 데이터 조회를 지원하며, 엑셀 자동 필터와 유사한 컬럼 필터 기능을 적용하여 단일 및 다중 조건 검색이 가능하도록 구현하였습니다."
            },
            {
                title: "jQuery 달력 라이브러리를 활용한 일정 관리 화면",
                desc: "jQuery 달력 라이브러리를 적용하여 날짜별 등록 데이터를 확인하고 특정 날짜에 정보를 등록할 수 있는 일정 관리 화면을 구현하였습니다."
            },
            {
                title: "DataTables 기반 대용량 데이터 관리",
                desc: "DataTables 라이브러리를 적용하여 서버 사이드 페이징, 정렬, 검색 기능을 구현하였으며 대량의 데이터를 효율적으로 조회·관리할 수 있도록 최적화하였습니다."
            },
            {
                title: "상세보기 팝업",
                desc: "데이터 선택 시 상세 정보를 팝업 형태로 확인할 수 있도록 구현하였으며, 조회에 필요한 조건값을 추출하여 백엔드로 전달하도록 처리하였습니다."
            },
            {
                title: "메모 기능",
                desc: "셀 선택 시 메모 입력 팝업이 활성화되도록 구현하였으며 입력된 내용을 데이터베이스에 저장하고 관리할 수 있도록 개발하였습니다."
            },
            {
                title: "다중 필터 기능",
                desc: "DB 데이터를 기반으로 필터 옵션을 구성하였으며 선택된 조건값을 서버로 전달하여 복합 조건 검색이 가능하도록 구현하였습니다."
            },
            {
                title: "유효성 검사",
                desc: "데이터 추가·수정·삭제 등 데이터베이스에 영향을 주는 작업에 대해 사전 확인 및 유효성 검사를 적용하여 데이터 오류를 방지하도록 구현하였습니다."
            },
            {
                title: "달력 날짜 선택 기능",
                desc: "달력 UI를 통해 연도·월·일 단위의 날짜 선택 기능을 구현하였으며 선택된 날짜를 기준으로 데이터를 조회할 수 있도록 개발하였습니다."
            },
            {
                title: "엑셀 파일 업로드 기능",
                desc: "지정된 서식의 엑셀 파일을 업로드하면 데이터를 파싱하여 조건에 맞게 처리한 후 시스템에 반영할 수 있도록 구현하였습니다."
            },
            {
                title: "인라인 편집 기능",
                desc: "Ctrl + 클릭으로 셀 편집 모드를 활성화하고 수정 후 Enter 입력 시 별도 새로고침 없이 화면과 데이터베이스가 동시에 반영되도록 구현하였습니다."
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
                        <li>세무회계 데이터 관리를 위한 관리자 및 사용자 화면 개발</li>
                        <li>엑셀 업로드 기반 데이터 등록·수정·관리 기능 구현</li>
                        <li>일별·월별·연도별 조회 및 기간 조건 검색 기능 구현</li>
                        <li>다중 선택 필터 및 복합 조건 검색 기능 구현</li>
                        <li>대용량 데이터 조회를 위한 테이블 중심 UI 및 데이터 관리 기능 구현</li>
                        <li>상세 데이터 확인을 위한 모달 팝업 인터페이스 구현</li>
                        <li>엑셀 스타일 인라인 편집 기능 구현 (셀 선택, 즉시 수정 및 저장)</li>
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

export default Project1;