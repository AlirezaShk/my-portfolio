export const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const formatDate = (date: Date, format: string) => {
    // const [d, t] = format.split(" ")
    // const dateFormat = new RegExp("^(Y)?((-m)*|(m)*)?(-d)?$");
    // if (d.includes("/") | d.includes("Y"))
    // const [year, month, day] = format.split("-")
    let res = ''
    const fs = format.split('-')
    for (let i = 0; i < fs.length; i++) {
        switch (fs[i]) {
            case 'Y':
                res += date.getFullYear() + '-'
                break

            case 'm':
                res += withPrecedingZero(date.getMonth().toString()) + '-'
                break

            case 'd':
                res += withPrecedingZero(date.getDate().toString()) + '-'
                break
        }
    }
    return res.slice(0, -1)
}

export const withPrecedingZero = (target: string) =>
    Number(target) < 10 ? '0' + target : target
