import React, { Ref } from "react";
import styles from "./Box.module.sass";

interface Props {
    insideRef?: Ref<HTMLDivElement>;
    className?: string;
    noPadding?: true;
    color?: string | undefined;
    bgColor?: string | undefined;
    onClick?: Function | undefined;
}

export default class Box extends React.Component<Props> {
    private noPadding: boolean;
    private className: string | undefined;
    private color: string | undefined;
    private bgColor: string;
    private onClick: React.MouseEventHandler<HTMLDivElement>;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.noPadding = props.noPadding;
        this.className = props.className;
        this.color = props.color;
        this.bgColor =
            props.bgColor !== undefined ? props.bgColor : "transparent";
        this.onClick = props.onClick !== undefined ? props.onClick : () => {};
    }

    render() {
        return (
            <div
                className={styles.boxWrapper + " " + this.className}
                data-nopad={this.noPadding && "true"}
                style={
                    this.color !== undefined
                        ? { color: this.color, backgroundColor: this.bgColor }
                        : { backgroundColor: this.bgColor }
                }
                onClick={this.onClick}
                ref={this.props.insideRef}
            >
                {this.props.children}
            </div>
        );
    }
}
