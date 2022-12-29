export default function Footer(props: {titleClasses: string, linkClasses: string}) {
const titleClasses = "footer-title " + props.titleClasses

    return (
        <footer className="footer p-10 z-10 text-black dark:text-white frosted-glass-light-i dark:frosted-glass-dark-i">
            <div>
                <span className={titleClasses}>Title 1</span>
                <a className={props.linkClasses}>Item 1</a>
                <a className={props.linkClasses}>Item 2</a>
                <a className={props.linkClasses}>Item 3</a>
                <a className={props.linkClasses}>Item 4</a>
            </div>
            <div>
                <span className={titleClasses}>Title 2</span>
                <a className={props.linkClasses}>Item 1</a>
                <a className={props.linkClasses}>Item 2</a>
                <a className={props.linkClasses}>Item 3</a>
                <a className={props.linkClasses}>Item 4</a>
            </div>
            <div>
                <span className={titleClasses}>Title 3</span>
                <a className={props.linkClasses}>Item 1</a>
                <a className={props.linkClasses}>Item 2</a>
                <a className={props.linkClasses}>Item 3</a>
                <a className={props.linkClasses}>Item 4</a>
            </div>
        </footer>
    )
}