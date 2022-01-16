import React from "react";
import styles from "./ShortContent.module.sass";

interface Props {
    direction: string;
    className?: string;
    onClick?: Function | undefined;
}

export default class ShortContent extends React.Component<Props> {
    private direction: string | undefined;
    private className: string | undefined;
    private onClick: React.MouseEventHandler<HTMLButtonElement>;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.className = props.className;
        this.direction = props.direction;
        this.onClick = props.onClick;
    }

    private format(children: React.ReactNode): Array<JSX.Element> {
        if (Array.isArray(children)) {
            let res = children.map((each) => <>{each}</>);
            return [res[0], res[1]];
        }
        return [];
    }

    render() {
        const [title, shortIntro] = this.format(this.props.children);
        return (
            <div
                className={styles.wrapper + " " + this.className}
                data-direction={this.direction}
            >
                {title}
                {shortIntro}
                <div className={styles.buttonWrapper}>
                    <button onClick={this.onClick}>Expand</button>
                </div>
            </div>
        );
    }
}
