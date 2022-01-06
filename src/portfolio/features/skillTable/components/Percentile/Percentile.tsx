import React from "react";
import styles from "./Percentile.module.sass";

interface Colors {
    full: string;
    empty: string;
}

interface Props {
    value: number;
    colors: Colors;
    className: string;
    height: number;
}

export default class Percentile extends React.Component<Props> {
    private value: number;
    private colors: Colors;
    private className: string;
    private height: number;
    constructor(props: React.ComponentProps<any>) {
        super(props);

        this.value = props.value;
        this.colors = props.colors;
        this.className = props.className;
        this.height = props.height;
    }

    render() {
        return (
            <div
                className={styles.wrapper + " " + this.className}
                style={{
                    height: this.height + 8 + "px",
                }}
            >
                <div
                    className={styles.container}
                    style={{
                        backgroundColor: this.colors.empty,
                        height: this.height + "px",
                    }}
                >
                    <div
                        className={styles.data}
                        style={{
                            width: this.value + "%",
                            backgroundColor: this.colors.full,
                        }}
                        data-type="percentile"
                    ></div>
                    <span>{this.value + "%"}</span>
                </div>
            </div>
        );
    }
}
