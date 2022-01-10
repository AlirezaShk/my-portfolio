import React from "react";
import styles from "./LongContent.module.sass";

interface Props {
    className?: string;
    onClick?: Function | undefined;
}

export default class LongContent extends React.Component<Props> {
    private className: string | undefined;
    private onClick: React.MouseEventHandler<HTMLButtonElement>;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.className = props.className;
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
            <div className={styles.wrapper + " " + this.className}>
                <h5>{title}</h5>
                <div>{rest}</div>
                <button onClick={this.onClick}>Collapse</button>
            </div>
        );
    }
}
