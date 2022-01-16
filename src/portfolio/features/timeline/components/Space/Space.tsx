import React from "react";
import Line from "../Line/Line";
import styles from "./Space.module.sass";

interface Props {
    height: number;
    className?: string;
    duration?: number;
}

export default class Space extends React.Component<Props> {
    private className: string | undefined;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.className = props.className;
    }

    render() {
        return (
            <div
                className={this.className + " " + styles.wrapper}
                style={{
                    height: this.props.height + "px",
                    transitionDuration: this.props.duration + "ms",
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
