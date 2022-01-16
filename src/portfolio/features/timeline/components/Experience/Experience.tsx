import React from "react";
import styles from "./Experience.module.sass";
import { formatDate } from "../../../../../lib/extentions";

interface Props {
    autoData?: Object;
    date?: Array<Date>;
    note?: string;
    type?: "freelance" | "company" | "personal" | "research";
    company?: string;
    role?: string;
    jobType?: string;
    overview?: string;
    background?: JSX.Element;
    responsibilities?: JSX.Element;
    links?: Array<JSX.Element>;
    isProject?: boolean;
    isFinished?: boolean;
    className?: string;
    onClick?: Function | undefined;
}

export default class Experience extends React.Component<Props> {
    private date: any;
    private isProject: boolean;
    private isFinished: boolean = false;
    private note: string;
    private type: string;
    private company: string;
    private role: string;
    private jobType: string;
    private overview: string;
    private background: JSX.Element;
    private responsibilities: JSX.Element;
    private links: Array<JSX.Element>;
    private className: string | undefined;
    private onClick: React.MouseEventHandler<HTMLButtonElement>;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.note = props.autoData.note ? props.autoData.note : props.note;
        this.date = props.autoData.period ? props.autoData.period : props.date;
        this.type = props.autoData.type ? props.autoData.type : props.type;
        this.company = props.autoData.company
            ? props.autoData.company
            : props.company;
        this.role = props.autoData.role ? props.autoData.role : props.role;
        this.jobType = props.autoData.jobType
            ? props.autoData.jobType
            : props.jobType;
        this.overview = props.autoData.overview
            ? props.autoData.overview
            : props.overview;
        this.background = props.autoData.background
            ? props.autoData.background
            : props.background;
        this.responsibilities = props.autoData.responsibilities
            ? props.autoData.responsibilities
            : props.responsibilities;
        this.links = props.autoData.links ? props.autoData.links : props.links;
        this.isProject =
            props.autoData.isProject !== undefined
                ? props.autoData.isProject
                : props.isProject;
        this.isFinished =
            props.autoData.isFinished !== undefined
                ? props.autoData.isFinished
                : props.isFinished;
        this.className = props.className;
        this.onClick = props.onClick !== undefined ? props.onClick : () => {};
    }

    // private format(children: React.ReactNode): Array<JSX.Element> {
    //     if (Array.isArray(children)) {
    //         let res = children.map((each) => <>{each}</>);
    //         return [res[0], res[1]];
    //     }
    //     return [];
    // }

    render() {
        const type = (
            <b>
                {() => {
                    switch (this.type) {
                        case "freelance":
                            return "Freelance Contract";
                        case "company":
                            return "Company Employee";
                        case "personal":
                            return "Personal Business Project";
                        case "research":
                            return "Research Project";
                    }
                }}
            </b>
        );
        const company = (
            <>
                <b>
                    {this.type === "research"
                        ? "Laboratory Name: "
                        : this.isProject
                        ? "Project Name: "
                        : "Company Name: "}
                </b>
                <span>{this.company}</span>
            </>
        );
        const duration = (
            <>
                <b>
                    {this.isProject
                        ? "Project's Duration: "
                        : this.type === "freelance"
                        ? "Contract Duration: "
                        : "Employement Period: "}
                </b>
                <span>{calcMonths(this.date)}</span>
            </>
        );
        const role = (
            <>
                <b>Role: </b>
                <span>{this.role}</span>
            </>
        );
        const jobType = (
            <>
                <b>Job Type: </b>
                <span>{this.jobType}</span>
            </>
        );
        const overview = (
            <>
                <b>Project Overview</b>
                <div>{this.overview}</div>
            </>
        );
        const background = (
            <>
                <b>Background</b>
                <div>{this.background}</div>
            </>
        );
        const responsibilities = (
            <>
                <b>Responsibilities</b>
                <div>{this.responsibilities}</div>
            </>
        );
        const note = <i className={styles.note}>Note: {this.note}</i>;
        return (
            <div className={styles.wrapper + " " + this.className}>
                <div>{formatPeriod(this.date)}</div>
                <div>{type}</div>
                <div
                    className={
                        this.isFinished === false ? styles.unfinished : ""
                    }
                >
                    {company}
                </div>
                <div>{duration}</div>
                <div>{role}</div>
                <div>{jobType}</div>
                <ul>
                    <li>
                        {overview}
                        {this.isFinished === false ? (
                            <>
                                <br />
                                {note}
                            </>
                        ) : (
                            ""
                        )}
                    </li>
                    <li>{background}</li>
                    <li>{responsibilities}</li>
                </ul>
            </div>
        );
    }
}

export const calcWeeks = (period: any) => {
    // let result =
    //     period.end.getMonth() -
    //     period.start.getMonth() +
    //     12 * (period.end.getFullYear() - period.start.getFullYear());
    let result = period.end.valueOf() - period.start.valueOf();
    result /= 1000 * 3600 * 24 * 7;
    return result + " Weeks";
};

export const calcMonths = (period: any) => {
    let result =
        period.end.getMonth() -
        period.start.getMonth() +
        12 * (period.end.getFullYear() - period.start.getFullYear());
    return result + " Months";
};

export const formatPeriod = (period: any) => (
    <b className={styles.period}>
        {formatDate(period.start, "Y-m-d")} —
        {" " + formatDate(period.end, "Y-m-d")}
    </b>
);
