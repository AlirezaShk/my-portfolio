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
                <div className={styles.image}></div>
            </div>
        </div>
    );
}

export default Portfolio;
