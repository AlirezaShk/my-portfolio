import React from "react";
import Line from "../Line/Line";
import styles from "./StartNode.module.sass";

interface Props {
    className: string;
    color?: string | undefined;
}

export default class StartNode extends React.Component<Props> {
    // private colors: Colors;
    private className: string;
    private color: string | undefined;
    constructor(props: React.ComponentProps<any>) {
        super(props);

        // this.value = props.value;
        // this.colors = props.colors;
        this.className = props.className;
        this.color = props.color;
        // this.height = props.height;
    }

    render() {
        return (
            <div className={this.className + " " + styles.wrapper}>
                <div
                    className={styles.within}
                    style={
                        this.color !== undefined ? { color: this.color } : {}
                    }
                ></div>
                <Line type="v" />
            </div>
        );
    }
}
