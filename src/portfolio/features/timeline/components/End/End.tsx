import React from "react";
import styles from "./End.module.sass";

interface Props {
    color?: string | undefined;
}
export default class End extends React.Component<Props> {
    private color: string | undefined;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.color = props.color;
    }

    render() {
        return (
            <div className={styles.lineWrapper} data-type={"v"}>
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
