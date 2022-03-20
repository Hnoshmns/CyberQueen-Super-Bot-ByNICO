/*

const Cq = require('../events');
const {
    MessageType,
    GroupSettingChange,
    Mimetype,
    MessageOptions
} = require('');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');

let cqwork = Config.WORKTYPE == 'public' ? false: true

Cq.addCommand({ pattern: 'dinuka', fromMe: cqwork, desc: 'down;load passpepr'
}, (async (message, match) => {
        // send a list main  subject
       const rows15 =[{title: ' 🗃️2015  ️ ', description:    "《《====``` ", rowId: "rowid1"},
                      {title: ' 🗃️2015 1st ️ ', description:   "《《===15``` ", rowId: "rowid1"},
                      {title: ' 🗃️2015 2nd ️ ', description:   "《《====``` ", rowId: "rowid1"},
                      {title: ' 🗃️2015 3rd ️ ', description:   "《《===5``` ", rowId: "rowid1"} ]

        const rows16 =[{title: ' 🗃️2016 O/L ️ ', description:    "《《=====●|: ", rowId: "rowid2"},
                      {title: ' 🗃️2016 2nd ️ ', description:   "《《=====●|: ", rowId: "rowid1"},
                      {title: ' 🗃️2016 3rd ️ ', description:   "《《==== ", rowId: "rowid1"} ]
 
        const rows17 =[{title: ' 🗃️2017 O/L ️ ', description:    "《《====`` ", rowId: "rowid3"},
                      {title: ' 🗃️2017 2nd ️ ', description:   "《《=` ", rowId: "rowid1"},
                      {title: ' 🗃️2017 3rd ️ ', description:   "《《==== ", rowId: "rowid1"} ]

        const rows18 =[{title: ' 🗃️2018 O/L ️ ', description:    "《《=====``` ", rowId: "rowid1"},
                      {title: ' 🗃️2018 1st ️ ', description:   "《《=====●|`` ", rowId: "rowid4"},
                      {title: ' 🗃️2018 2nd ️ ', description:   "《《==== ", rowId: "rowid1"},
                      {title: ' 🗃️2018 3rd ️ ', description:   "《《==`` ", rowId: "rowid1"} ]

        const rows19 =[{title: ' 🗃️2019 O/L ️ ', description:    "《《=====●|:`obu 2019``` ", rowId: "rowid1"},
                      {title: ' 🗃️2019 1st ️ ', description:   "《《=====●|:|🔅|:|●== ", rowId: "rowid5"},
                      {title: ' 🗃️2019 2nd ️ ', description:   "《` ", rowId: "rowid1"},
                      {title: ' 🗃️2019 3rd ️ ', description:   "《《=====` ", rowId: "rowid1"} ]


                     const sections = [{ title: "2015 ", rows: rows15},
                                       { title: "2016 ", rows: rows16},
                                       { title: "2017 ", rows: rows17},
                                       { title: "2018 ", rows: rows18},
                                       { title: "2019 ", rows: rows19}]

        const button = {
            buttonText: 'Click Me',
            description: "btn test",
            sections: sections,
            listType: 1
        }

        await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));*/
