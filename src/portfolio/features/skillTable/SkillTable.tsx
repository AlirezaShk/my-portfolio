import { relative } from "path";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { delay } from "../../../lib/extentions";
import { deleteOne, writeOne, writePositionOne } from "./actions";
import { Skill, SkillCat, ColorThemes } from "./constants";
import styles from "./SkillTable.module.sass";
import { selectTitle } from "./selectors";
import Percentile from "./components/Percentile/Percentile";
import Carousel from "../../../features/Carousel/Carousel";
import Cardboard from "../../../features/Cardboard/Cardboard";

interface Props {
    data: Array<SkillCat>;
    id: string;
    title: string;
}

export function SkillTable(props: Props) {
    const createSkill = (skill: Skill, cat: string) => (
        <div className={styles.skill}>
            <span>{skill.name}</span>
            <Percentile
                value={skill.expertise}
                colors={ColorThemes[cat]}
                className={styles.percent}
                height={18}
            />
            {skill.libs.length !== 0 && (
                <section className={styles.skillLibs}>
                    {skill.libs.map((each) => createSkill(each, cat))}
                </section>
            )}
        </div>
    );
    const createCat = (cat: SkillCat) => (
        <section className={styles.skillCat} data-category={cat.name}>
            <span>{cat.name}</span>
            <section className={styles.skillsWrapper}>
                {cat.data.map((each) => createSkill(each, cat.name))}
            </section>
        </section>
    );
    return (
        <div style={{ position: "relative" }}>
            <Cardboard
                height={400}
                changeTime={200}
                className={"carousel"}
                displayCount={3}
            >
                {props.data.map((each) => createCat(each))}
            </Cardboard>
        </div>
    );
}
