import { relative } from "path";
import React, { createRef, RefObject } from "react";
import styles from "./Carousel.module.sass";
import "./sample.css";
import { CarouselProps, CarouselState } from "./constants";

export default class Carousel extends React.Component<
    CarouselProps,
    CarouselState
> {
    private changeTime: string;
    private className: string;
    private content: Array<JSX.Element>;
    private height: number;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.changeTime = props.changeTime + "ms";
        this.className = props.className;
        this.height = props.height;
        this.content = this.fillContent(this.props.children);
        let displayCount = Math.max(props.displayCount, 3);
        this.state = {
            current: 0,
            displayCount: displayCount,
            pages: this.format(this.content, 0, displayCount),
        };
    }

    private fillContent(data: React.ReactNode): Array<JSX.Element> {
        if (Array.isArray(data)) {
            return data.map((each) => <>{each}</>);
        }
        return [];
    }

    private cycleIndex(target: number, max: number): number {
        while (target > max) {
            target -= max + 1;
        }
        while (target < 0) {
            target += max + 1;
        }
        return target;
    }

    //This should be set dynamically for dynamic display count
    private posIndicer(index: number): string {
        switch (index) {
            case 3:
                return "+1";
            case 4:
                return "+2";
            default:
                return (index - 2).toString();
        }
    }

    private dataIndicer(pos: string, current: number, count: number): number {
        return this.cycleIndex(parseInt(pos) + current, count - 1);
    }

    private clickHandler(pos: string, current: number, el: any) {
        let target = this.cycleIndex(
            current + parseInt(pos),
            this.content.length - 1
        );
        // el.attr("data-pos", "0");
        // el.setAttribute("data-pos", "0");
        el.className = styles.page + " pos" + target;
        // this.setState((state) => ({
        //     current: target,
        //     pages: this.format(this.content, target, state.displayCount),
        // }));
    }

    private format(
        data: Array<JSX.Element>,
        current: number,
        count: number
    ): Array<JSX.Element> {
        let result: Array<JSX.Element> = [];
        if (Array.isArray(data)) {
            for (let i = 0; i < count + 2; i++) {
                let ref = createRef<HTMLDivElement>();
                let pos = this.posIndicer(i);
                result.push(
                    <div
                        className={styles.page + " " + "pos" + parseInt(pos)}
                        data-pos={pos}
                        ref={ref}
                        onClick={(e) =>
                            this.clickHandler(pos, current, e.target)
                        }
                        style={{
                            height: this.height + "px",
                        }}
                    >
                        {data[this.dataIndicer(pos, current, count)]}
                    </div>
                );
            }
        }
        return result;
    }

    render() {
        return (
            <div
                className={this.className + " " + styles.wrapper}
                style={{ height: this.height + "px" }}
            >
                {this.state.pages}
            </div>
        );
    }
}
