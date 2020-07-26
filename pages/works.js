import dynamic from "next/dynamic";

const Header = dynamic(import("../components/Header"));

function Works() {
    return <div>
        <Header />
        works
    </div>
}

export default Works