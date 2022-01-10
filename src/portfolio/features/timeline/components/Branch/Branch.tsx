import React from "react";
import Box from "../Box/Box";
import Line from "../Line/Line";
import styles from "./Branch.module.sass";

interface Props {
    type: "r" | "l";
    color?: string | undefined;
}

interface State {
    more: boolean;
}

export default class Branch extends React.Component<Props, State> {
    private type: string;
    private color: string | undefined;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.type = props.type;
        this.color = props.color;
        this.state = {
            more: false,
        };
    }

    private format(children: React.ReactNode): Array<JSX.Element> {
        if (Array.isArray(children)) {
            let res = children.map((each) => <>{each}</>);
            return [res[0], res[1], res[2]];
        }
        return [];
    }

    private clickHandler(): void {
        this.setState((state: State) => ({
            more: !state.more,
        }));
    }

    render() {
        const [title, shortContent, fullContent] = this.format(
            this.props.children
        );
        return (
            <div
                className={styles.branchWrapper}
                data-direction={this.type}
                data-more={this.state.more ? "on" : "off"}
            >
                <div className={styles.titleWrapper}>
                    <div className={styles.title}>{title}</div>
                </div>
                <div className={styles.contentWrapper}>
                    <Line type="v" lengthType={"full"} />
                    <Line
                        className={styles.connectorLine}
                        type="h"
                        separator={true}
                        color={this.color}
                    />
                    <Box
                        color={this.color}
                        bgColor="#ffffffc7"
                        onClick={this.clickHandler.bind(this)}
                    >
                        {shortContent}
                    </Box>
                </div>
                <Box
                    className={styles.fullContext}
                    color={this.color}
                    bgColor="#ffffffc7"
                    onClick={this.clickHandler.bind(this)}
                >
                    {fullContent}
                </Box>
            </div>
        );
    }
}
