import React, { ReactNode, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { writeOne, writePositionOne, deleteOne } from "./actions";
import { selectTitle } from "./selectors";
import styles from "./ContentList.module.sass";
import {
    RoleArchive,
    Position as TargetPosition,
    RoleWriterDelay,
} from "./constants";
import { relative } from "path";
import { delay } from "../../../lib/extentions";
import { Content } from "react-bootstrap/lib/Tab";

export default class ContentList extends React.Component {
    constructor(props: React.ComponentProps<any>) {
        super(props);
    }
    // const [status, position, title] = useAppSelector(selectTitle);
    // const dispatch = useAppDispatch();
    // const [tWriter, setTWriter] = useState(false);
    // const [pWriter, setPWriter] = useState(false);

    // const cycle = async () => {
    //     setTWriter(true);
    //     for (let j = 0; j < RoleArchive.length; j++) {
    //         let target = RoleArchive[j];
    //         for (let i = 0; i < target.length; i++) {
    //             dispatch(writeOne(i));
    //             await delay(RoleWriterDelay.Write);
    //         }
    //         if (j !== RoleArchive.length - 1) {
    //             await delay(RoleWriterDelay.Stage);
    //             for (let i = 0; i < target.length; i++) {
    //                 dispatch(deleteOne());
    //                 await delay(RoleWriterDelay.Write);
    //             }
    //         } else {
    //             await delay(RoleWriterDelay.Switch);
    //             setTWriter(false);
    //             setPWriter(true);
    //             await delay(RoleWriterDelay.Switch);
    //             for (let i = 0; i < TargetPosition.length; i++) {
    //                 dispatch(writePositionOne(i));
    //                 await delay(RoleWriterDelay.Write);
    //             }
    //             await delay(RoleWriterDelay.Switch);
    //             setPWriter(false);
    //         }
    //     }
    // };

    /**
     * formChildren
     */
    public formChildren(children: React.ReactNode) {
        let list: Array<JSX.Element> = [],
            contents: Array<JSX.Element> = [];
        if (Array.isArray(children)) {
            let data: Array<any> = children;
            list = data.map((child, i) => {
                return (
                    <a
                        className={styles.contentAnchor}
                        href={"#content_" + child.props.id}
                    >
                        {child.props.title}
                    </a>
                );
            });
            contents = data.map((child, i) => {
                return (
                    <div
                        id={"content_" + child.props.id}
                        className={styles.contentWrapper}
                    >
                        {child}
                    </div>
                );
            });
        }
        return [list, contents];
    }
    render() {
        let content: React.ReactNode = this.props.children;
        let list: Array<JSX.Element> = [],
            contents: Array<JSX.Element> = [];
        [list, contents] = this.formChildren(content);
        return (
            <>
                <section className={styles.list}>{list}</section>
                <section className={styles.contentPanel}>{contents}</section>
            </>
        );
    }
}
