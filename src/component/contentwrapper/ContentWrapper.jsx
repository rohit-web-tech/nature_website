export default function ContentWrapper(props){
    return(
        <div
            className="content-wrapper"
        >
            <div>
                {props?.children}
            </div>
        </div>
    )
}