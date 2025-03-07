export default function Footer() {
    return (
        <footer className="d-flex f-direction-column gap-10 ai-center jc-center padding-20 coal-bg pale-blue-c">
            <p>&copy; YordanovDY - All rights reserved.</p>
            <p className="d-flex gap-20 ai-center">
                <a className="social-media-btn" href="https://github.com/YordanovDY" target="_blank">
                    <i className="fa-brands fa-github"></i>
                </a>

                <a className="social-media-btn" href="https://www.youtube.com" target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                </a>

                <a className="social-media-btn" href="https://www.facebook.com" target="_blank">
                    <i className="fa-brands fa-square-facebook"></i>
                </a>

                <a className="social-media-btn" href="https://www.instagram.com" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </p>
        </footer>
    )
}