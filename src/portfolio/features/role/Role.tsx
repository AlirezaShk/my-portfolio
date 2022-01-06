import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { writeOne, writePositionOne, deleteOne } from "./actions";
import { selectTitle } from "./selectors";
import styles from "./Role.module.css";
import {
    RoleArchive,
    Position as TargetPosition,
    RoleWriterDelay,
} from "./constants";
import { relative } from "path";
import { delay } from "../../../lib/extentions";

export function Role() {
    const [status, position, title] = useAppSelector(selectTitle);
    const dispatch = useAppDispatch();
    const [tWriter, setTWriter] = useState(false);
    const [pWriter, setPWriter] = useState(false);

    const cycle = async () => {
        setTWriter(true);
        for (let j = 0; j < RoleArchive.length; j++) {
            let target = RoleArchive[j];
            for (let i = 0; i < target.length; i++) {
                dispatch(writeOne(i));
                await delay(RoleWriterDelay.Write);
            }
            if (j !== RoleArchive.length - 1) {
                await delay(RoleWriterDelay.Stage);
                for (let i = 0; i < target.length; i++) {
                    dispatch(deleteOne());
                    await delay(RoleWriterDelay.Write);
                }
            } else {
                await delay(RoleWriterDelay.Switch);
                setTWriter(false);
                setPWriter(true);
                await delay(RoleWriterDelay.Switch);
                for (let i = 0; i < TargetPosition.length; i++) {
                    dispatch(writePositionOne(i));
                    await delay(RoleWriterDelay.Write);
                }
                await delay(RoleWriterDelay.Switch);
                setPWriter(false);
            }
        }
    };
    return (
        <div style={{ position: "relative" }}>
            <h1 className={styles.roleTitle}>
                Hi! I'm a {position}
                {pWriter && (
                    <span className={status === "idle" ? styles.blinking : ""}>
                        |
                    </span>
                )}
                {title}
                {tWriter && (
                    <span className={status === "idle" ? styles.blinking : ""}>
                        |
                    </span>
                )}
                Developer
            </h1>
            <button
                style={{ position: "fixed", bottom: "15px" }}
                onClick={() => cycle()}
            >
                cycle
            </button>
        </div>
    );
}
