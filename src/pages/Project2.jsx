import { Link } from "react-router-dom";

function Project2() {
    return (
        <div style={{ padding: "50px" }}>
            <h1>프로젝트 2</h1>

            <p>설명 작성</p>

            <Link to="/">
                메인으로
            </Link>
        </div>
    );
}

export default Project2;