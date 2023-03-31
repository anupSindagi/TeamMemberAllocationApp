const Footer = () => {
    let today = new Date()
    return (
        <footer>
           <div className="row justify-content-center">
                <div className="col-8">
                    <p> Team Allocation App - {today.getFullYear()}</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;