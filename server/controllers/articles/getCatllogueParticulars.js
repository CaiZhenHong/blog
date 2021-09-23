const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
module.exports = function(ctx, next){
    const { count, password } = ctx.request.body
    ctx.status = 200
    ctx.body = succeedModel([
        {
            "title": "必小极变育适",
            "aritlces": [
                {
                    "article_title": "世象马叫",
                    "date": "1994-04-18",
                    "id": "73"
                },
                {
                    "article_title": "步第此",
                    "date": "1984-02-25",
                    "id": "30"
                },
                {
                    "article_title": "养开也社越",
                    "date": "1987-09-23",
                    "id": "73"
                },
                {
                    "article_title": "格约等其",
                    "date": "1991-05-31",
                    "id": "22"
                }
            ]
        },
        {
            "title": "水他资调",
            "aritlces": [
                {
                    "article_title": "即采科把边称",
                    "date": "1991-12-26",
                    "id": "99"
                },
                {
                    "article_title": "除期中切族要高",
                    "date": "2005-11-23",
                    "id": "8"
                },
                {
                    "article_title": "该年边期",
                    "date": "1995-08-16",
                    "id": "9"
                },
                {
                    "article_title": "八海天书切可",
                    "date": "1979-02-07",
                    "id": "62"
                },
                {
                    "article_title": "方存查何",
                    "date": "1976-10-28",
                    "id": "86"
                }
            ]
        }
    ])
}
