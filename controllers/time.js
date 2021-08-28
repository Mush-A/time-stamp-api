const time =  (req, res) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let unix, utc;
    let data = req.params.time || null;

    if (data === null) {
      data = new Date();
    }
    
    // If it is a continuos string of digits, convert to type number else leave it as a string.
    try {
      if (/^\d*$/gm.test(data)) {
        data = parseInt(data);
        data = Math.floor(data);
        unix = data;
        utc = new Date(data).toUTCString();
      } 
      else {
        unix = Date.parse(data);
        utc = new Date(data).toUTCString();
      }
    } 
    catch(err) {
      return res.status(400).json({
        error: err
      })
    }

    if (unix && utc) {
      return res.status(200).json({
        unix: unix,
        utc: utc
      })
    } else {
      return res.status(400).json({
        error: 'Invalid date'
      })
    }

}

module.exports = time;