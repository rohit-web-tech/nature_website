import "./styles.css";
import ContentWrapper from "../contentwrapper/ContentWrapper";
export default function Header(){
    return (
        
    <div id="header">
    <ContentWrapper>
        <div className="header">    
                <div className="nav-left">
                    Hello
                </div>
            </div>
            <div className="nav-right">
                <button>GET IN TOUCH</button>
                <span>Menu</span>
            </div>
    </ContentWrapper>
    </div>
    )
}