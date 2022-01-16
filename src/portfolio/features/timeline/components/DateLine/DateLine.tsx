import React from "react";
import Line from "../Line/Line";
import styles from "./DateLine.module.sass";

interface Props {
    date: string;
    className?: string;
    lengthType?: "full" | "half" | "small" | undefined;
    color?: string | undefined;
    withLine?: boolean;
}

export default class DateLine extends React.Component<Props> {
    private lengthType: string | undefined;
    private date: string;
    private className: string;
    private withLine: boolean = false;
    private color: string | undefined;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.date = props.date;
        this.lengthType = props.lengthType;
        this.className = props.className;
        this.withLine = props.withLine;
        this.color = props.color;
    }

    render() {
        return (
            <div
                className={styles.lineWrapper + " " + this.className}
                data-length={this.lengthType}
            >
                <span data-hasLine={this.withLine ? "true" : "false"}>
                    {this.date}
                </span>
                <div
                    className={styles.line}
                    style={
                        this.color !== undefined ? { color: this.color } : {}
                    }
                ></div>
                {this.withLine && <Line type="v" lengthType={"small"} />}
            </div>
        );
    }
}
