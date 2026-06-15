import { Link } from "react-router-dom";

function Project1() {

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
        원화·외화 자금 흐름과 국내외 수익·비용 정산 및 세무 관리의 효율적인 관리를 위한 통합 세무종합시스템을 제작했습니다.
        `,

        resp: `
        세무회계 종합시스템의 프론트엔드 개발 담당. 데이터 조회·검색·필터링·관리 기능을 중심으로 관리자 화면 및 테이블 기반 UI 설계·구현
        `,

        screens: [
            {
                image: "/images/project1/02.jpg",
                title: "기본적인 화면 구성",
                desc: "세무·회계 시스템 특성상 데이터가 많아 테이블 기반으로 구성하였고 연도·월·일자 기준 필터링 및 페이지 단위 조회가 가능하도록 구현하였습니다. 또한 엑셀 자동 필터와 유사한 컬럼 필터 기능을 적용해 단일 및 다중 조건 필터링을 지원하도록 하였습니다."
            },
            {
                image: "/images/project1/01.jpg",
                title: "월별 세무 일정 - 사용자",
                desc: "관리자가 등록한 세무 일정을 조회할 수 있는 화면으로 날짜 클릭 시 팝업을 통해 상세 내용을 확인할 수 있도록 구성하였습니다."
            },
            {
                image: "/images/project1/08.jpg",
                title: "월별 세무 일정 관리 - 관리자",
                desc: "관리자 전용 페이지로 권한이 있는 사용자만 세무 일정의 등록·수정·삭제를 수행할 수 있도록 구현하였습니다."
            },
            {
                image: "/images/project1/03.jpg",
                title: "상세보기 팝업",
                desc: "특정 데이터를 클릭하면 해당 항목의 상세 정보를 팝업으로 확인할 수 있도록 하였으며 클릭 시 필요한 조건값을 추출하여 백엔드로 전달하도록 처리하였습니다."
            },
            {
                image: "/images/project1/04.jpg",
                title: "메모 기능",
                desc: "셀 클릭 시 메모 입력 팝업이 활성화되며 저장된 메모를 데이터베이스에 반영할 수 있도록 구현하였습니다. 데이터 식별을 위해 구분값과 월 정보를 함께 전달하여 데이터 정합성을 유지하였습니다."
            },
            {
                image: "/images/project1/05.jpg",
                title: "다중 필터 기능",
                desc: "DB에서 중복을 제거한 데이터를 기반으로 다중 필터 옵션을 구성하였으며 선택된 조건값을 백엔드로 전달하여 복합 조건으로 데이터를 조회할 수 있도록 구현하였습니다."
            },
            {
                image: "/images/project1/06.jpg",
                title: "유효성 검사",
                desc: "데이터 추가·수정·삭제 등 DB에 영향을 주는 작업에 대해 사전 확인 및 유효성 검사를 적용하여 데이터 오류를 방지하도록 하였습니다."
            },
            {
                image: "/images/project1/07.jpg",
                title: "달력 날짜 선택 기능",
                desc: "달력 UI를 통해 월 단위로 날짜를 선택할 수 있도록 구현하였으며 선택된 값을 기준으로 서버에 전달하여 해당 월 데이터를 조회할 수 있도록 하였습니다."
            },
            {
                image: "/images/project1/09.jpg",
                title: "엑셀 파일 업로드 기능",
                desc: "특정 서식의 엑셀 파일을 업로드하면 데이터를 파싱하여 조건에 맞게 추출한 뒤 자동으로 시스템에 반영되도록 구현하였습니다."
            },
            {
                image: "/images/project1/10.jpg",
                title: "인라인 편집 기능",
                desc: "Ctrl + 클릭으로 셀 편집 모드를 활성화하고 수정 후 Enter 입력 시 별도 새로고침 없이 화면과 DB가 동시에 반영되도록 인라인 편집 기능을 구현하였습니다."
            }
        ]
    };

    return (
        <main className="detail-page">

            <div className="detail-container">
                <div className="detail-notice">
                    <strong>보안 안내</strong>

                    <p>본 프로젝트는 사내 시스템으로 실제 운영 환경의 화면 및 데이터는 보안 정책에 따라 비공개 처리하였습니다.</p>
                    <p>일부 이미지는 예시 화면 또는 개인정보 및 업무 데이터를 제거한 화면으로 대체되었습니다.</p>
                </div>

                <Link
                    to="/"
                    className="detail-back-btn"
                >
                    ← 목록으로
                </Link>

                

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

                    {project.screens.map(screen => (

                        <div
                            className="detail-screen-item"
                            key={screen.title}
                        >

                            <div className="detail-screen-image">
                                <img
                                    src={screen.image}
                                    alt={screen.title}
                                />
                            </div>

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