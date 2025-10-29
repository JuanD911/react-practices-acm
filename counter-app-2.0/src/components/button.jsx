import './button.css'

function button({ onClick, children }){
    return(
        <button onClick={onClick}>
            {children}
        </button>
    );
}

export default button;