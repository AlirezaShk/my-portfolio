import React from "react";
import Line from "../Line/Line";
import styles from "./Space.module.sass";

interface Props {
    className?: string;
    height: number;
}

export default class Space extends React.Component<Props> {
    private className: string | undefined;
    private height: string;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.className = props.className;
        this.height = props.height + "px";
    }

    render() {
        return (
            <div
                className={this.className + " " + styles.wrapper}
                style={{ height: this.height }}
            >
                {/* <Line type="v" lengthType="full" /> */}
            </div>
        );
    }
}
