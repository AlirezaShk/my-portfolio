export interface CarouselState {
    current: number
    displayCount: number
    pages: Array<JSX.Element>
}

export interface CarouselProps {
    changeTime: number
    className: string
    displayCount: number
    height: number
}
