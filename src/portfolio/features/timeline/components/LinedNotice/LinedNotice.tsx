import React from "react";
import Box from "../Box/Box";
import LongContent from "../LongContent/LongContent";
import styles from "./LinedNotice.module.sass";

interface Props {
    className?: string;
    color?: string | undefined;
}

export default class LinedNotice extends React.Component<Props> {
    private className: string;
    private color: string | undefined;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.className = props.className;
        this.color = props.color;
    }

    private format(children: React.ReactNode): Array<any> {
        if (Array.isArray(children)) {
            let res = children.map((each) => <>{each}</>);
            return [res[0], res[1]];
        }
        return [];
    }

    render() {
        const [title, fullContent] = this.format(this.props.children);
        return (
            <div
                className={styles.wrapper + " " + this.className}
                // data-length={this.lengthType}
            >
                <Box
                    className={styles.content}
                    color={this.color}
                    bgColor="#ffffffc7"
                >
                    <LongContent direction={"m"} show={true} loaderOn={false}>
                        <h4>{title}</h4>
                        <div>{fullContent}</div>
                    </LongContent>
                </Box>
            </div>
        );
    }
}
