export default (context, inject) => {
    const date = (rawDate) => {
        let date = rawDate.split(' ')
        let parsedDate = date[0].split('-')
        return `${parsedDate[2]}/${parsedDate[1]}/${parsedDate[0]}`
    }
    const time = (rawTime) => {
        let time = rawTime.split(' ')
        let parsedTime = time[1].split(':')
        return `${parsedTime[0]}:${parsedTime[1]}`
    }

    inject('date', date)
    inject('time', time)
    context.$date = date
    context.$time = time
}
