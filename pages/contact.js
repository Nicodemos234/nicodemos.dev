import dynamic from "next/dynamic";

const Header = dynamic(import("../components/Header"));

function Contact() {
    return <div>
        <Header />
        works
    </div>
}

export default Contact