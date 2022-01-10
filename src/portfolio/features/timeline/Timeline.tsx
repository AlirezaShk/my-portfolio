import { randomInt } from "crypto";
import React from "react";
import Branch from "./components/Branch/Branch";
import End from "./components/End/End";
import Line from "./components/Line/Line";
import Section from "./components/Section/Section";
import StartNode from "./components/StartNode/StartNode";
import styles from "./Timeline.module.sass";
import content from "../../../data/timelineContent";
import Space from "./components/Space/Space";
import ShortContent from "./components/ShortContent/ShortContent";
import LongContent from "./components/LongContent/LongContent";

const defaultTLColor = "#aaaaaa";
const colors = {
    tl: "#aaaaaa",
    uni: {
        bg: "#167fb136",
        line: "#167fb1",
    },
    cc: {
        bg: "#b87c3a36",
        line: "#b87c3a",
    },
    hoi: {
        bg: "#16b17d36",
        line: "#16b17d",
    },
};

export default class Timeline extends React.Component<any, any> {
    constructor(props: React.ComponentProps<any>) {
        super(props);
    }

    private distributeDir = (index: number) => (index % 2 === 0 ? "r" : "l");

    render() {
        return (
            <div className={styles.mainWrapper}>
                <StartNode className={styles.node} color={defaultTLColor} />
                <Branch type={this.distributeDir(0)} color="red">
                    <div>Hi this is tes1</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea, iste quo adipisci sint qui dicta ullam facilis
                        incidunt omnis? Officiis dolorem doloremque harum
                        quibusdam laudantium quasi, sint asperiores? Atque,
                        debitis! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ea, iste quo adipisci sint qui dicta
                        ullam facilis incidunt omnis? Officiis dolorem
                        doloremque harum quibusdam laudantium quasi, sint
                        asperiores? Atque, debitis! Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ea, iste quo adipisci sint
                        qui dicta ullam facilis incidunt omnis? Officiis dolorem
                        doloremque harum quibusdam laudantium quasi, sint
                        asperiores? Atque, debitis!
                    </div>
                </Branch>
                <Section
                    className={styles.secUni}
                    title={content.uni.title}
                    color={colors.uni.line}
                    bgColor={colors.uni.bg}
                >
                    {/* <Branch
                        type={this.distributeDir(1)}
                        color={colors.uni.line}
                    >
                        <div>Hi this is test2</div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, iste quo adipisci sint qui dicta ullam
                            facilis incidunt omnis? Officiis dolorem doloremque
                            harum quibusdam laudantium quasi, sint asperiores?
                            Atque, debitis! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Ea, iste quo adipisci
                            sint qui dicta ullam facilis incidunt omnis?
                            Officiis dolorem doloremque harum quibusdam
                            laudantium quasi, sint asperiores? Atque, debitis!
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, iste quo adipisci sint qui dicta ullam
                            facilis incidunt omnis? Officiis dolorem doloremque
                            harum quibusdam laudantium quasi, sint asperiores?
                            Atque, debitis!
                        </div>
                    </Branch> */}
                    <Section
                        className={styles.secCC}
                        title={content.cc.title}
                        color={colors.cc.line}
                        bgColor={colors.cc.bg}
                    >
                        <Branch
                            type={this.distributeDir(1)}
                            color={colors.cc.line}
                        >
                            <div>{content.cc.period}</div>
                            <ShortContent>{content.cc.title}</ShortContent>
                            <LongContent>{content.cc.text}</LongContent>
                        </Branch>
                    </Section>
                    {/* <Space height={300} /> */}
                </Section>
                {/* <Section
                    className={styles.secHOI}
                    title="HOI"
                    color={colors.hoi.line}
                    bgColor={colors.hoi.bg}
                    top={-450}
                >
                    <Branch
                        type={this.distributeDir(2)}
                        color={colors.hoi.line}
                    >
                        <div>Hi this is test2</div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, iste quo adipisci sint qui dicta ullam
                            facilis incidunt omnis? Officiis dolorem doloremque
                            harum quibusdam laudantium quasi, sint asperiores?
                            Atque, debitis! Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Ea, iste quo adipisci
                            sint qui dicta ullam facilis incidunt omnis?
                            Officiis dolorem doloremque harum quibusdam
                            laudantium quasi, sint asperiores? Atque, debitis!
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea, iste quo adipisci sint qui dicta ullam
                            facilis incidunt omnis? Officiis dolorem doloremque
                            harum quibusdam laudantium quasi, sint asperiores?
                            Atque, debitis!
                        </div>
                    </Branch>
                </Section> */}
                <End />
            </div>
        );
    }
}
