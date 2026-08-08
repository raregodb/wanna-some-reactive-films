export default function Footer() {

    return (
        <footer className="page-footer grey darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#">No More Links</a>
                </div>
            </div>
        </footer>
    )
}