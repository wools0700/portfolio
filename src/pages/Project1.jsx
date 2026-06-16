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
                desc: "세무·회계 시스템 특성상 데이터가 많아 테이블 기반으로 구성하였고 연도·월·일자 기준 필터링 및 페이지 단위 조회가 가능하도록 구현하였습니다. 또한 엑셀 자동 필터와 유사한 컬럼 필터 기능을 적용해 단일 및 다중 조건 필터링을 지원하도록 하였습니다."
            },
            {
                title: "jQuery 달력 라이브러리를 통한 일정 관리 화면 구현",
                desc: "사내 사이트에 jQuery 달력 라이브러리를 도입하여, 사용자가 날짜별 등록된 데이터를 확인하고 특정 날짜에 정보를 등록할 수 있는 직관적인 화면을 구현했습니다."
            },
            {
                title: "DataTables 라이브러리를 통한 대용량 데이터 최적화",
                desc: "사내의 방대한 데이터를 효율적으로 관리하기 위해 DataTables를 도입했으며, 서버 사이드 페이징(Pagination), 페이징, 다중 조건 검색, 정렬 등 대용량 데이터 관리 화면의 핵심 기능을 구현했습니다."
            },
            {
                title: "상세보기 팝업",
                desc: "특정 데이터를 클릭하면 해당 항목의 상세 정보를 팝업으로 확인할 수 있도록 하였으며 클릭 시 필요한 조건값을 추출하여 백엔드로 전달하도록 처리하였습니다."
            },
            {
                title: "메모 기능",
                desc: "셀 클릭 시 메모 입력 팝업이 활성화되며 저장된 메모를 데이터베이스에 반영할 수 있도록 구현하였습니다. 데이터 식별을 위해 구분값을 함께 전달하여 데이터 정합성을 유지하였습니다."
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
            },
            {
                title: "엑셀 파일 업로드 기능",
                desc: "특정 서식의 엑셀 파일을 업로드하면 데이터를 파싱하여 조건에 맞게 추출한 뒤 자동으로 시스템에 반영되도록 구현하였습니다."
            },
            {
                title: "인라인 편집 기능",
                desc: "Ctrl + 클릭으로 셀 편집 모드를 활성화하고 수정 후 Enter 입력 시 별도 새로고침 없이 화면과 DB가 동시에 반영되도록 인라인 편집 기능을 구현하였습니다."
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