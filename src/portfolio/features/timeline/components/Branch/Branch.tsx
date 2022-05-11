import React, { createRef, Ref } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import Box from "../Box/Box";
import Line from "../Line/Line";
import styles from "./Branch.module.sass";
import ShortContent from "../ShortContent/ShortContent";
import LongContent from "../LongContent/LongContent";
import Experience from "../Experience/Experience";
import Space from "../Space/Space";

interface Props {
    type: "r" | "l";
    extLink?: string | undefined;
    color?: string | undefined;
    previewHeight: number;
}

interface State {
    more: boolean;
    space: number;
}

export default class Branch extends React.Component<Props, State> {
    private type: string;
    private extLink: string | undefined;
    private color: string | undefined;
    private FCRef: Ref<any>;
    private previewHeight: number;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.type = props.type;
        this.color = props.color;
        this.extLink = props.extLink;
        this.previewHeight = props.previewHeight;
        this.state = {
            more: false,
            space: 0,
        };
        this.FCRef = createRef<any>();
    }

    private format(children: React.ReactNode): Array<any> {
        if (Array.isArray(children)) {
            let res = children.map((each) => <>{each}</>);
            return [res[0], res[1], res[2], res[3]];
        }
        return [];
    }

    private clickHandler(): void {
        if (typeof this.FCRef === "object") {
            let targetHeight = this.previewHeight;
            let targetMoreDisplay = !this.state.more;
            if (!targetMoreDisplay) {
                targetHeight = 0;
            }
            console.log(targetHeight);
            let that = this;
            const HeightSetter = () => {
                if (typeof this.FCRef === "object") {
                    let targetHeight = this.FCRef?.current.clientHeight + 5;
                    if (!targetMoreDisplay) {
                        targetHeight = 0;
                    }

                    this.FCRef?.current.scrollIntoView(true, {
                        block: "start",
                    });
                    that.setState({ space: targetHeight });
                }
            };
            this.setState(
                {
                    more: targetMoreDisplay,
                    space: targetHeight,
                },
                () => {
                    setTimeout(() => {
                        HeightSetter();
                    }, 1000);
                }
            );
        }
        // if (typeof this.FCRef !== '(instance: any) => void')
        // // try {
        // //     console.log(this.FCRef.current);
        // // } catch (e: any) {}
    }

    render() {
        const [note, title, shortContent, fullContent] = this.format(
            this.props.children
        );
        return (
            <div
                className={styles.branchWrapper}
                data-direction={this.type}
                data-more={this.state.more ? "on" : "off"}
            >
                <div className={styles.noteWrapper}>
                    <div className={styles.note}>{note}</div>
                </div>
                <div className={styles.contentWrapper}>
                    <Line
                        className={styles.verticalLine}
                        type="v"
                        lengthType={"full"}
                    />
                    <Line
                        className={styles.connectorLine}
                        type="h"
                        separator={true}
                        color={this.color}
                    />
                    <Box
                        className={styles.shortContext}
                        color={this.color}
                        bgColor="#ffffffc7"
                    >
                        <ShortContent
                            onClick={this.clickHandler.bind(this)}
                            direction={this.type}
                        >
                            <h4>{title}</h4>
                            <div>{shortContent}</div>
                        </ShortContent>
                    </Box>
                    <Space
                        height={this.state.space}
                        duration={this.state.more ? 500 : 1000}
                    />
                </div>
                <Box
                    className={styles.fullContext}
                    color={this.color}
                    bgColor="#fff"
                    insideRef={this.FCRef}
                >
                    <LongContent
                        onClick={this.clickHandler.bind(this)}
                        extLink={this.extLink}
                        direction={this.type}
                        show={!this.state.more}
                    >
                        <h4>{title}</h4>
                        <div>{fullContent}</div>
                    </LongContent>
                </Box>
            </div>
        );
    }
}
