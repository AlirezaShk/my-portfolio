import { randomInt } from "crypto";
import React from "react";
import Branch from "./components/Branch/Branch";
import End from "./components/End/End";
import DateLine from "./components/DateLine/DateLine";
import Section from "./components/Section/Section";
import StartNode from "./components/StartNode/StartNode";
import styles from "./Timeline.module.sass";
import content from "../../../data/timelineContent";
import Space from "./components/Space/Space";
import { formatDate } from "../../../lib/extentions";
import Experience, {
    formatPeriod,
    calcMonths,
    calcWeeks,
} from "./components/Experience/Experience";
import LinedNotice from "./components/LinedNotice/LinedNotice";

const defaultTLColor = "#aaaaaa";
const colors = {
    tl: "#aaaaaa",
    uni: {
        bg: "#167fb136",
        line: "#167fb1",
    },
    cc: {
        bg: "#b1161636",
        line: "#b11616",
    },
    kn2c: {
        bg: "#63636336",
        line: "#636363",
    },
    hoi: {
        bg: "#16b17d36",
        line: "#16b17d",
    },
    pw: {
        bg: "#6e16b136",
        line: "#6e16b1",
    },
    uzt: {
        bg: "#d51a1a36",
        line: "#d51a1a",
    },
    free1: {
        bg: "#b87c3a36",
        line: "#b87c3a",
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
                    <DateLine
                        date={formatDate(content.uni.period.start, "Y-m-d")}
                    />
                    <Section
                        className={styles.secCC}
                        title={content.cc.section}
                        color={colors.cc.line}
                        bgColor={colors.cc.bg}
                    >
                        <DateLine
                            date={formatDate(content.cc.period.start, "Y-m-d")}
                            withLine={true}
                        />
                        <Branch
                            type={this.distributeDir(1)}
                            color={colors.cc.line}
                            extLink={content.cc.links[0]}
                            previewHeight={1500}
                        >
                            <div>{calcMonths(content.cc.period)}</div>
                            <div className={styles.titleWrapper}>
                                {content.cc.title}
                            </div>
                            <div>{content.cc.overview}</div>
                            <Experience autoData={content.cc} />
                        </Branch>
                        <Space height={300} />
                    </Section>
                    <Section
                        className={styles.secKN2C}
                        title={content.kn2cR.title}
                        color={colors.kn2c.line}
                        bgColor={colors.kn2c.bg}
                        top={-300}
                    >
                        <DateLine
                            date={formatDate(
                                content.kn2cR.period.start,
                                "Y-m-d"
                            )}
                            withLine={true}
                        />
                        <Branch
                            type={this.distributeDir(2)}
                            color={colors.kn2c.line}
                            previewHeight={1500}
                        >
                            <div>{calcMonths(content.kn2cR.period)}</div>
                            <div className={styles.titleWrapper}>
                                {content.kn2cR.title}
                            </div>
                            <div>{content.kn2cR.overview}</div>
                            <Experience autoData={content.kn2cR} />
                        </Branch>
                        <Section
                            className={styles.secfree1}
                            title={content.free1.section}
                            color={colors.free1.line}
                            bgColor={colors.free1.bg}
                            top={80}
                        >
                            <DateLine
                                date={formatDate(
                                    content.free1.period.start,
                                    "Y-m-d"
                                )}
                                withLine={true}
                            />
                            <Branch
                                type={this.distributeDir(3)}
                                color={colors.free1.line}
                                previewHeight={1500}
                            >
                                <div>{calcMonths(content.free1.period)}</div>
                                <div className={styles.titleWrapper}>
                                    {content.free1.title}
                                </div>
                                <div>{content.free1.overview}</div>
                                <Experience autoData={content.free1} />
                            </Branch>
                            <DateLine
                                date={formatDate(
                                    content.free1.period.end,
                                    "Y-m-d"
                                )}
                                withLine={true}
                            />
                        </Section>
                        <DateLine
                            date={formatDate(content.kn2cR.period.end, "Y-m-d")}
                            withLine={true}
                        />
                        <Branch
                            type={this.distributeDir(4)}
                            color={colors.kn2c.line}
                            extLink={content.kn2cW.links[0]}
                            previewHeight={500}
                        >
                            <div>{calcWeeks(content.kn2cW.period)}</div>
                            <div className={styles.titleWrapper}>
                                {content.kn2cW.title}
                            </div>
                            <div>{content.kn2cW.overview}</div>
                            <Experience autoData={content.kn2cW} />
                        </Branch>
                        <DateLine
                            date={formatDate(content.kn2cW.period.end, "Y-m-d")}
                            withLine={true}
                        />
                    </Section>
                    <Section
                        className={styles.secHOI}
                        title={content.hoi[0].section}
                        color={colors.hoi.line}
                        bgColor={colors.hoi.bg}
                        top={80}
                    >
                        <LinedNotice color={colors.hoi.line}>
                            <div className={styles.titleWrapper}>
                                {content.hoi[0].title}
                            </div>
                            <div>{content.hoi[0].content}</div>
                        </LinedNotice>
                        <DateLine
                            date={formatDate(
                                content.hoi[1].period.start,
                                "Y-m-d"
                            )}
                            withLine={true}
                        />
                        <Branch
                            type={this.distributeDir(5)}
                            color={colors.hoi.line}
                            previewHeight={1500}
                        >
                            <div>{calcMonths(content.hoi[1].period)}</div>
                            <div className={styles.titleWrapper}>
                                {content.hoi[1].title}
                            </div>
                            <div>{content.hoi[1].overview}</div>
                            <Experience autoData={content.hoi[1]} />
                        </Branch>
                        <DateLine
                            date={formatDate(
                                content.hoi[2].period.start,
                                "Y-m-d"
                            )}
                            withLine={true}
                        />
                        <Branch
                            type={this.distributeDir(6)}
                            color={colors.hoi.line}
                            extLink={
                                content.hoi[2].links && content.hoi[2].links[0]
                            }
                            previewHeight={1500}
                        >
                            <div>{calcMonths(content.hoi[2].period)}</div>
                            <div className={styles.titleWrapper}>
                                {content.hoi[2].title}
                            </div>
                            <div>{content.hoi[2].overview}</div>
                            <Experience autoData={content.hoi[2]} />
                        </Branch>
                        <DateLine
                            date={formatDate(
                                content.hoi[3].period.start,
                                "Y-m-d"
                            )}
                            withLine={true}
                        />
                        <Branch
                            type={this.distributeDir(7)}
                            color={colors.hoi.line}
                            previewHeight={1500}
                        >
                            <div>{calcMonths(content.hoi[3].period)}</div>
                            <div className={styles.titleWrapper}>
                                {content.hoi[3].title}
                            </div>
                            <div>{content.hoi[3].overview}</div>
                            <Experience autoData={content.hoi[3]} />
                        </Branch>
                        <DateLine
                            date={formatDate(
                                content.hoi[3].period.end,
                                "Y-m-d"
                            )}
                            withLine={true}
                        />
                    </Section>
                </Section>
                <Section
                    className={styles.secfree1}
                    title={content.free2.section}
                    color={colors.free1.line}
                    bgColor={colors.free1.bg}
                    top={80}
                >
                    <DateLine
                        date={formatDate(content.free2.period.start, "Y-m-d")}
                        withLine={true}
                    />
                    <Branch
                        type={this.distributeDir(8)}
                        color={colors.free1.line}
                        previewHeight={1500}
                    >
                        <div>{calcMonths(content.free2.period)}</div>
                        <div className={styles.titleWrapper}>
                            {content.free2.title}
                        </div>
                        <div>{content.free2.overview}</div>
                        <Experience autoData={content.free2} />
                    </Branch>
                    <DateLine
                        date={formatDate(content.free2.period.end, "Y-m-d")}
                        withLine={true}
                    />
                </Section>
                <Section
                    className={styles.secpw}
                    title={content.pw.section}
                    color={colors.pw.line}
                    bgColor={colors.pw.bg}
                    top={80}
                >
                    <DateLine
                        date={formatDate(content.pw.period.start, "Y-m-d")}
                        withLine={true}
                    />
                    <Branch
                        type={this.distributeDir(9)}
                        color={colors.pw.line}
                        previewHeight={1500}
                    >
                        <div>{calcMonths(content.pw.period)}</div>
                        <div className={styles.titleWrapper}>
                            {content.pw.title}
                        </div>
                        <div>{content.pw.overview}</div>
                        <Experience autoData={content.pw} />
                    </Branch>
                    <DateLine
                        date={formatDate(content.pw.period.end, "Y-m-d")}
                        withLine={true}
                    />
                </Section>
                <Section
                    className={styles.secuzt}
                    title={content.uzt.section}
                    color={colors.uzt.line}
                    bgColor={colors.uzt.bg}
                    top={80}
                >
                    <DateLine
                        date={formatDate(content.uzt.period.start, "Y-m-d")}
                        withLine={true}
                    />
                    <Branch
                        type={this.distributeDir(10)}
                        color={colors.uzt.line}
                        previewHeight={1500}
                    >
                        <div>{calcMonths(content.uzt.period)}</div>
                        <div className={styles.titleWrapper}>
                            {content.uzt.title}
                        </div>
                        <div>{content.uzt.overview}</div>
                        <Experience autoData={content.uzt} />
                    </Branch>
                    <DateLine
                        date={formatDate(content.uzt.period.end, "Y-m-d")}
                        withLine={true}
                    />
                </Section>
                <End />
            </div>
        );
    }
}
