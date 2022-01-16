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
                res += date.getMonth() + '-'
                break

            case 'd':
                res += date.getDate() + '-'
                break
        }
    }
    return res.slice(0, -1)
}
