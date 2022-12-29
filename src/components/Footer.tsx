export default function Footer() {
    return (
        <footer className="footer p-10 z-10 text-black dark:text-white frosted-glass-light-i dark:frosted-glass-dark-i">
            <div>
                <span className="footer-title select-none">Title 1</span>
                <a className="link link-hover hover:link-info">Item 1</a>
                <a className="link link-hover hover:link-info">Item 2</a>
                <a className="link link-hover hover:link-info">Item 3</a>
                <a className="link link-hover hover:link-info">Item 4</a>
            </div>
            <div>
                <span className="footer-title select-none">Title 2</span>
                <a className="link link-hover hover:link-info">Item 1</a>
                <a className="link link-hover hover:link-info">Item 2</a>
            </div>
            <div>
                <span className="footer-title select-none">Title 3</span>
                <a className="link link-hover hover:link-info">Item 1</a>
                <a className="link link-hover hover:link-info">Item 2</a>
                <a className="link link-hover hover:link-info">Item 3</a>
            </div>
        </footer>
    )
}