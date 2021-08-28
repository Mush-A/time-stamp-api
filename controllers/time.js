const time =  (req, res) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let data = req.params.time;
    let unix;
    let utc;

    if (/^\d*$/gm.test(data)) {
        data = parseInt(data)
        data = `${new Date(data)}`
    }

    unix = (data) => {
        return Date.parse(data)
    }

    utc = (data) => {

        data = new Date(data.toString());

        let day     = days[data.getUTCDay()];
        let date    = data.getUTCDate();
        let month   = months[data.getUTCMonth()];
        let year    = data.getUTCFullYear();
        let h       = data.getUTCHours();
        let m       = data.getUTCMinutes();
        let s       = data.getUTCSeconds();

        return `${day}, ${date} ${month} ${year} ${(h > 9) ? h : '0' + h}:${(m > 9) ? m : '0' + m}:${(s > 9) ? s : '0' + s} GMT`
    }

    unix = unix(data);
    utc = utc(data);

    if (utc && unix) {
        return res.status(200).json({
            unix: unix,
            utc: utc
        })
    } else {
        res.status(400).json({
            error: 'Invalid request'
        })
    }
}

module.exports = time;