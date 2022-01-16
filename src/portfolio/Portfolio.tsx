import { useAppSelector, useAppDispatch } from "../app/hooks";
import React, { useState, useEffect } from "react";
import styles from "./Portfolio.module.sass";
import { Role } from "./features/role/Role";
import strings from "../lib/strings";
import { delay as delayFunc } from "../lib/extentions";
import * as actions from "./actions";
import { selectStage } from "./selectors";
import { ChangeStagePayload, ChangeStatusPayload } from "./constants";
import ContentList from "./features/contentList/ContentList";
import { SkillTable } from "./features/skillTable/SkillTable";
import SkillsData from "../data/skills";
import Timeline from "./features/timeline/Timeline";
import PersonalInfo from "./features/personalInfo/PersonalInfo";

const loadingState = {
    play: "running",
    pause: "paused",
};

function Portfolio() {
    const [stage, delay, status] = useAppSelector(selectStage);
    const dispatch = useAppDispatch();
    const [lastStage, setlastStage] = useState(0);
    const [scrolling, setScroll] = useState(false);

    const afterIntro = async () => {
        let statusPayload: ChangeStatusPayload = {
            status: "loading1",
            delay: 15,
        };
        dispatch(actions.changeStatus(statusPayload));
        await delayFunc(5500);
        let stagePayload: ChangeStagePayload = {
            stage: 1,
        };
        dispatch(actions.changeStage(stagePayload));
        await delayFunc(8500);
        statusPayload.status = "idle";
        dispatch(actions.changeStatus(statusPayload));
        setlastStage(0);
        // setLoading(true);
        // await delay(6200).finally(() => {
        //     window.scrollTo(0, 0);
        //     setstage(1);
        //     window.scrollTo(0, 0);
        // });
    };

    let timeout: NodeJS.Timeout;

    const isScrolling = () => {
        setScroll(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setScroll(false);
        }, 500);
    };

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", isScrolling);
        }
        watchScroll();
        // return () => {
        //     window.removeEventListener("scroll", logit);
        // };
    });

    return (
        <div className={styles.page}>
            <div
                className={styles.sideR}
                data-stage={status === "idle" ? stage : lastStage}
                data-loading={status === "loading1" ? "1" : "0"}
                data-loading-state={
                    status === "loading1"
                        ? loadingState.play
                        : loadingState.pause
                }
            ></div>
            <div
                className={styles.sideL}
                data-stage={status === "idle" ? stage : lastStage}
                data-loading={status === "loading1" ? "1" : "0"}
                data-loading-time={delay + "s"}
                data-loading-state={
                    status === "loading1"
                        ? loadingState.play
                        : loadingState.pause
                }
            ></div>
            {stage == 0 && (
                <>
                    <div className={styles.myPic}>
                        <img src="resources/me1.jpg" />
                    </div>
                    <Role />
                    <div className={styles.introduction}>
                        {strings.INTRODUCTION}
                    </div>
                </>
            )}
            <div
                className={styles.myName}
                style={{
                    color: status === "loading1" ? "transparent" : "#black",
                    marginTop:
                        status === "loading1" && stage === 0 ? "-60vh" : "0",
                }}
                data-stage={status === "idle" ? stage : lastStage}
            >
                {stage == 0 && <>My name is </>}
                <span
                    data-loading={status === "loading1" ? "1" : "0"}
                    data-loading-time={delay + "s"}
                    data-loading-state={
                        status === "loading1"
                            ? loadingState.play
                            : loadingState.pause
                    }
                >
                    <span>
                        {stage === 0 && <>A</>}
                        {stage === 1 && <>Andrew</>}
                    </span>
                </span>
                {stage === 0 && <>ndrew</>}
            </div>
            {stage === 0 && (
                <div className={styles.next} onClick={afterIntro}>
                    <span>Next</span>
                </div>
            )}
            {stage === 1 && (
                <>
                    {/* <div className={styles.next} onClick={() => setTest(true)}>
                        <span>Click Me</span>
                    </div> */}
                    {/* <div
                        className={styles.trans1}
                        data-state={test && "ok"}
                    ></div>
                    <div
                        className={styles.trans2}
                        data-state={test && "ok"}
                    ></div> */}
                    <ContentList>
                        <PersonalInfo id="personalInfo" title="Personal Info" />
                        <SkillTable
                            id="skillTable"
                            title="Skill Set"
                            data={SkillsData}
                        />
                        <Timeline id="pastExp" title="Past Experience" />
                    </ContentList>
                </>
            )}
            <div id={styles.bg}>
                <div className={styles.overlay}></div>
                <svg
                    className={
                        styles.animatron +
                        (scrolling ? " " + styles.active : "")
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2000 1500"
                >
                    <rect fill="#000000" width="2000" height="1500" />
                    <defs>
                        <circle
                            stroke="#006BDD"
                            vectorEffect="non-scaling-stroke"
                            id="a"
                            fill="none"
                            strokeWidth="7.7"
                            r="315"
                        />
                        <use
                            id="f"
                            href="#a"
                            strokeDasharray="100 100 100 9999"
                        />
                        <use
                            id="b"
                            href="#a"
                            strokeDasharray="250 250 250 250 250 9999"
                        />
                        <use
                            id="e"
                            href="#a"
                            strokeDasharray="1000 500 1000 500 9999"
                        />
                        <use id="g" href="#a" strokeDasharray="1500 9999" />
                        <use
                            id="h"
                            href="#a"
                            strokeDasharray="2000 500 500 9999"
                        />
                        <use
                            id="j"
                            href="#a"
                            strokeDasharray="800 800 800 800 800 9999"
                        />
                        <use
                            id="k"
                            href="#a"
                            strokeDasharray="1200 1200 1200 1200 1200 9999"
                        />
                        <use
                            id="l"
                            href="#a"
                            strokeDasharray="1600 1600 1600 1600 1600 9999"
                        />
                    </defs>
                    <g transform="translate(1000 750)" strokeOpacity="1">
                        <g transform="">
                            <circle fill="#006BDD" fillOpacity="1" r="10" />
                            <g
                                className={styles.bgDisks}
                                transform="rotate(-300 0 0)"
                            >
                                <use
                                    href="#f"
                                    transform="scale(.1) rotate(50 0 0)"
                                />
                                <use
                                    href="#f"
                                    transform="scale(.2) rotate(100 0 0)"
                                />
                                <use
                                    href="#f"
                                    transform="scale(.3) rotate(150 0 0)"
                                />
                            </g>
                            <g className={styles.bgDisks} transform="">
                                <use
                                    href="#b"
                                    transform="scale(.4) rotate(200 0 0)"
                                />
                                <use
                                    href="#z"
                                    transform="scale(.5) rotate(250 0 0)"
                                />
                            </g>
                            <g
                                className={styles.bgDisks}
                                id="z"
                                transform="rotate(135 0 0)"
                            >
                                <g transform="">
                                    <use href="#b" />
                                    <use
                                        href="#b"
                                        transform="scale(1.2) rotate(90 0 0)"
                                    />
                                    <use
                                        href="#b"
                                        transform="scale(1.4) rotate(60 0 0)"
                                    />
                                    <use
                                        href="#e"
                                        transform="scale(1.6) rotate(120 0 0)"
                                    />
                                    <use
                                        href="#e"
                                        transform="scale(1.8) rotate(30 0 0)"
                                    />
                                </g>
                            </g>
                            <g className={styles.bgDisks} id="y" transform="">
                                <g transform="">
                                    <use
                                        href="#e"
                                        transform="scale(1.1) rotate(20 0 0)"
                                    />
                                    <use
                                        href="#g"
                                        transform="scale(1.3) rotate(-40 0 0)"
                                    />
                                    <use
                                        href="#g"
                                        transform="scale(1.5) rotate(60 0 0)"
                                    />
                                    <use
                                        href="#h"
                                        transform="scale(1.7) rotate(-80 0 0)"
                                    />
                                    <use
                                        href="#j"
                                        transform="scale(1.9) rotate(100 0 0)"
                                    />
                                </g>
                            </g>
                            <g className={styles.bgDisks} transform="">
                                <g transform="rotate(-135 0 0)">
                                    <g transform="">
                                        <use
                                            href="#h"
                                            transform="scale(2) rotate(60 0 0)"
                                        />
                                        <use
                                            href="#j"
                                            transform="scale(2.1) rotate(120 0 0)"
                                        />
                                        <use
                                            href="#j"
                                            transform="scale(2.3) rotate(180 0 0)"
                                        />
                                        <use
                                            href="#h"
                                            transform="scale(2.4) rotate(240 0 0)"
                                        />
                                        <use
                                            href="#j"
                                            transform="scale(2.5) rotate(300 0 0)"
                                        />
                                    </g>
                                    <use
                                        href="#y"
                                        transform="scale(2) rotate(180 0 0)"
                                    />
                                    <use href="#j" transform="scale(2.7)" />
                                    <use
                                        href="#j"
                                        transform="scale(2.8) rotate(45 0 0)"
                                    />
                                    <use
                                        href="#j"
                                        transform="scale(2.9) rotate(90 0 0)"
                                    />
                                    <use
                                        href="#k"
                                        transform="scale(3.1) rotate(135 0 0)"
                                    />
                                    <use
                                        href="#k"
                                        transform="scale(3.2) rotate(180 0 0)"
                                    />
                                </g>
                                <use
                                    href="#k"
                                    transform="scale(3.3) rotate(225 0 0)"
                                />
                                <use
                                    href="#k"
                                    transform="scale(3.5) rotate(270 0 0)"
                                />
                                <use
                                    href="#k"
                                    transform="scale(3.6) rotate(315 0 0)"
                                />
                                <use href="#k" transform="scale(3.7)" />
                                <use
                                    href="#k"
                                    transform="scale(3.9) rotate(75 0 0)"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default Portfolio;
