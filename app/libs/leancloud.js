let AV = require('avoscloud-sdk')

AV.initialize('7hyoc6are05n823dd424ywvf752gem2w96inlkl3yiann6vw', 'tgufkdybjtb4gvsbwcatiwd9wx49adxrmf8qkpwunh0h3wx3')

let FeedBack = AV.Object.extend('FeedBack')

module.exports.AV = AV
module.exports.FeedBack = FeedBack
