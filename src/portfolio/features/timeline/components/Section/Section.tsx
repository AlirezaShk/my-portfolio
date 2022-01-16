import React from "react";
import Box from "../Box/Box";
import Line from "../Line/Line";
import styles from "./Section.module.sass";

interface Props {
    className: string;
    title: string | Array<JSX.Element> | undefined;
    color?: string | undefined;
    bgColor?: string | undefined;
    top?: number | undefined;
}

export default class Section extends React.Component<Props> {
    // private colors: Colors;
    private className: string;
    private title: string | Array<JSX.Element>;
    private color: string | undefined;
    private bgColor: string | undefined;
    private top: string;
    constructor(props: React.ComponentProps<any>) {
        super(props);

        // this.value = props.value;
        // this.colors = props.colors;
        this.className = props.className;
        this.title = props.title;
        this.color = props.color;
        this.bgColor = props.bgColor;
        this.top = props.top !== undefined ? props.top - 150 + "px" : "0";
        // this.height = props.height;
    }

    render() {
        return (
            <div
                className={this.className + " " + styles.wrapper}
                style={
                    this.color !== undefined
                        ? { color: this.color, marginTop: this.top }
                        : { marginTop: this.top }
                }
            >
                <Line type="v" lengthType="small" />
                <Box className={styles.title} color={this.color}>
                    {this.title}
                </Box>
                <Line
                    className={styles.seperator}
                    type="h"
                    lengthType="full"
                    separator={true}
                    color={this.color}
                />
                <div
                    aria-label="in-section"
                    style={
                        this.bgColor !== undefined
                            ? { color: this.bgColor }
                            : {}
                    }
                >
                    <Line type="v" lengthType="small" />
                    {/* <Box noPadding={true}> */}
                    {/* <Line type="v" lengthType="small" /> */}
                    {this.props.children}
                    {/* <Line type="v" lengthType="small" /> */}
                    {/* </Box> */}
                    <Line type="v" lengthType="small" />
                </div>
                <Line
                    className={styles.seperator}
                    type="h"
                    lengthType="full"
                    separator={true}
                    color={this.color}
                />
                <Line type="v" lengthType="small" />
            </div>
        );
    }
}
