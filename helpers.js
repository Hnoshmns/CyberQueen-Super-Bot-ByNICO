/* Copyright (C) 2021.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

*/

function successfullMessage(msg) {
    return "✅ *᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐs*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *᳆⃞🇱🇰ᴄʏͥʙᴇͣʀͫ↯ǫᴇᴇɴᬐ*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}

