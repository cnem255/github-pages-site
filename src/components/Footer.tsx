export default function Footer() {
    return (
        <footer className="footer p-10 text-black dark:text-white frosted-glass-light-i dark:frosted-glass-dark-i">
            <div>
                <span className="footer-title">Title 1</span>
                <a className="link link-hover hover:link-info">Item 1</a>
                <a className="link link-hover hover:link-info">Item 2</a>
                <a className="link link-hover hover:link-info">Item 3</a>
                <a className="link link-hover hover:link-info">Item 4</a>
            </div>
            <div>
                <span className="footer-title">Title 2</span>
                <a className="link link-hover hover:link-info">Item 1</a>
                <a className="link link-hover hover:link-info">Item 2</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover hover:link-info">Terms of use</a>
                <a className="link link-hover hover:link-info">Privacy policy</a>
                <a className="link link-hover hover:link-info">Cookie policy</a>
            </div>
        </footer>
    )
}