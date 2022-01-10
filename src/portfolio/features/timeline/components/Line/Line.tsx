import React from "react";
import styles from "./Line.module.sass";

interface Props {
    type: "h" | "v";
    className?: string;
    lengthType?: "full" | "half" | "small" | undefined;
    separator?: boolean;
    color?: string | undefined;
}

export default class Line extends React.Component<Props> {
    private lengthType: string | undefined;
    private type: string;
    private className: string;
    private separator: boolean;
    private color: string | undefined;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.type = props.type;
        this.lengthType = props.lengthType;
        this.className = props.className;
        this.separator = props.separator;
        this.color = props.color;
    }

    render() {
        return (
            <div
                className={styles.lineWrapper + " " + this.className}
                data-type={this.type}
                data-length={this.lengthType}
                data-line-type={this.separator && "customColor"}
            >
                <div
                    className={styles.line}
                    style={
                        this.color !== undefined ? { color: this.color } : {}
                    }
                ></div>
            </div>
        );
    }
}
