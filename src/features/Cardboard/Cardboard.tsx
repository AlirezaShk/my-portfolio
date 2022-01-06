import React, { createRef } from "react";
import styles from "./Cardboard.module.sass";

export default class Cardboard extends React.Component<any, any> {
    private className: string;
    private height: string;
    private content: Array<JSX.Element> = [];
    private wrapperRef;
    constructor(props: React.ComponentProps<any>) {
        super(props);
        this.className = props.className;
        this.height = props.height + "px";
        if (Array.isArray(this.props.children)) {
            this.content = this.props.children.map((each) => <>{each}</>);
        }
        this.wrapperRef = createRef<HTMLDivElement>();
    }

    private clickHandler(target: any, index: number): void {
        let cards = this.wrapperRef.current?.getElementsByClassName(
            styles.card
        );
        if (cards === undefined) return;
        // console.log({ cards: cards, target: target });
        for (let i = 0; i < cards.length; i++) {
            // if (cards[i] === target) {
            //     target.className = ;
            // } else if (
            //     cards[i].className.includes(styles.active) &&
            //     cards[i] !== target
            // )
            cards[i].className = styles.card;
        }
        cards[index].className = styles.card + " " + styles.active;
    }
    render() {
        return (
            <div
                ref={this.wrapperRef}
                className={styles.mainWrapper + " " + this.className}
                style={{ height: this.height }}
            >
                {this.content.map((each, i) => (
                    <div
                        className={
                            styles.card + " " + (i == 1 ? styles.active : "")
                        }
                        onMouseOver={(e) => this.clickHandler(e.target, i)}
                        style={{ height: this.height }}
                    >
                        {each}
                    </div>
                ))}
            </div>
        );
    }
}
