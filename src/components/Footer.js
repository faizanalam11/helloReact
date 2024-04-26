import { Link } from "react-router-dom";

const Footer = () => {
    return (<div className="text-white bg-[#242529] flex justify-center shadow-lg"><h4>Created by 💌  
                <Link to={"https://www.linkedin.com/in/faizanalam123/"} className="text-[#93c5fd] hover:text-[#62a8f8] font-bold"> Faizan Alam</Link> ©️ 2024</h4>
            </div>
    );
}

export default Footer;