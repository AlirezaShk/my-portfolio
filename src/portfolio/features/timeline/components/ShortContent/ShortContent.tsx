import React from "react";
import styles from "./ShortContent.module.sass";

interface Props {
    className?: string;
    onClick?: Function | undefined;
}

export default class ShortContent extends React.Component<Props> {
    private className: string | undefined;
    private onClick: React.MouseEventHandler<HTMLButtonElement>;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.className = props.className;
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
            <div className={styles.wrapper + " " + this.className}>
                <h5>{title}</h5>
                <div>{shortIntro}</div>
                <button onClick={this.onClick}>Expand</button>
            </div>
        );
    }
}
