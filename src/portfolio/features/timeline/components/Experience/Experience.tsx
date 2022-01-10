import React from "react";
import styles from "./Experience.module.sass";

interface Props {
    date: Array<Date>;
    type: "freelance" | "company" | "personal" | "research";
    company: string;
    role: string;
    jobType: string;
    overview: string;
    background: JSX.Element;
    responsibilities: JSX.Element;
    links: Array<JSX.Element>;
    isProject: boolean;
    isFinished: boolean;
    className?: string;
    onClick?: Function | undefined;
}

export default class Experience extends React.Component<Props> {
    private date: Array<Date>;
    private isProject: boolean;
    private isFinished: boolean;
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
        this.date = props.date;
        this.type = props.type;
        this.company = props.company;
        this.role = props.role;
        this.jobType = props.jobType;
        this.overview = props.overview;
        this.background = props.background;
        this.responsibilities = props.responsibilities;
        this.links = props.links;
        this.isProject = props.isProject;
        this.isFinished = props.isFinished;
        this.className = props.className;
        this.onClick = props.onClick;
    }

    // private format(children: React.ReactNode): Array<JSX.Element> {
    //     if (Array.isArray(children)) {
    //         let res = children.map((each) => <>{each}</>);
    //         return [res[0], res[1]];
    //     }
    //     return [];
    // }

    render() {
        const period = (
            <b>
                {this.date[0]} — {this.date[1]}
            </b>
        );
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
                <b>{this.isProject ? "Project Name: " : "Company Name: "}</b>
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
                <span>{this.date[0].valueOf() - this.date[1].valueOf()}</span>
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
        return (
            <div className={styles.wrapper + " " + this.className}>
                <div>{period}</div>
                <div>{type}</div>
                <div>{company}</div>
                <div>{duration}</div>
                <div>{role}</div>
                <div>{jobType}</div>
                <ul>
                    <li>{overview}</li>
                    <li>{this.background}</li>
                    <li>{this.responsibilities}</li>
                </ul>
            </div>
        );
    }
}
