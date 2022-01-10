import React from "react";
import styles from "./End.module.sass";

export default class End extends React.Component<any> {
    constructor(props: React.ComponentProps<any>) {
        super(props);
    }

    render() {
        return (
            <div className={styles.lineWrapper} data-type={"v"}>
                <div className={styles.line}></div>
            </div>
        );
    }
}
