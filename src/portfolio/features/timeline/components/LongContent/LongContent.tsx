import React from "react";
import Loader from "../Loader/Loader";
import styles from "./LongContent.module.sass";

interface Props {
    direction: string;
    show: boolean;
    extLink?: string | undefined;
    className?: string;
    onClick?: Function | undefined;
    loaderOn?: boolean;
}

export default class LongContent extends React.Component<Props> {
    private direction: string | undefined;
    private className: string | undefined;
    private extLink: string | undefined;
    private onClick: React.MouseEventHandler<HTMLButtonElement>;
    private loaderOn: boolean;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.direction = props.direction;
        this.className = props.className;
        this.extLink = props.extLink;
        this.loaderOn = props.loaderOn !== undefined ? props.loaderOn : true;
        this.onClick = props.onClick;
    }

    private format(children: React.ReactNode): Array<any> {
        if (Array.isArray(children)) {
            let res = children.map((each) => <>{each}</>);
            return [res[0], res.slice(1)];
        }
        return [];
    }

    render() {
        const [title, rest] = this.format(this.props.children);
        return (
            <div
                className={styles.wrapper + " " + this.className}
                data-direction={this.direction}
            >
                {this.loaderOn && <Loader show={this.props.show} />}
                {title}
                {rest}
                <div className={styles.buttonWrapper}>
                    <button onClick={this.onClick}>Collapse</button>
                    {this.extLink && (
                        <button
                            onClick={() => window.open(this.extLink, "_blank")}
                        >
                            Visit
                        </button>
                    )}
                </div>
            </div>
        );
    }
}
