const errorModel = require('../../model/errorModel')
const succeedModel = require('../../model/succeedModel')
module.exports = function(ctx, next){
    const { count, password } = ctx.request.body
    ctx.status = 200
    ctx.body = succeedModel([
        {
            "liked": true,
            "like_count": 94,
            "comment_count": 89,
            "tag": "影断斗形",
            "title": "公术两毛几且根",
            "cover": "http://dummyimage.com/\"160x100\"/ea79f2",
            "date": "1996-05-27 13:03:58",
            "content": "员族百许运量算力面指感万都声。响满铁共国反务保使离步信低特习构。快克万成安价音切今称统听。海离正须根是克下热政周使口。飞土现品信即面样场社党走明天。"
        },
        {
            "title": "收才办产查于",
            "liked": false,
            "comment_count": 54,
            "date": "1974-08-08 08:58:08",
            "cover": "http://dummyimage.com/\"160x100\"/79f2c6",
            "content": "改高点亲展采门被入变现机技联。统品流风后只毛局车手子火。民价龙组好北技约须天治大还自年。比门格变相报内土美导际引之工级用最统。识层适至入方角装般学指我革。",
            "like_count": 94,
            "tag": "争江"
        },
        {
            "date": "2017-08-04 01:20:15",
            "title": "花与平及月适每",
            "like_count": 66,
            "content": "增条你治以拉队五写标想放百至。命设意维我受江制无战马只学议。面市件有山清此一六做可毛七。属约确者始北不音第劳查要克题美。",
            "cover": "http://dummyimage.com/\"160x100\"/f2a379",
            "tag": "共元",
            "liked": false,
            "comment_count": 41
        },
        {
            "date": "2006-05-22 17:43:57",
            "liked": true,
            "content": "数导记点选传种物变布装话离。规圆圆才团口收次千部组文热权根律。志支红将住老特领风心学如己力光入次。效事省中部接京西斯内石构求太门。斯力革深定照文整五单界阶思精存济统。造市始层走标原门门果面记米。",
            "like_count": 67,
            "title": "油非应色第电风",
            "cover": "http://dummyimage.com/\"160x100\"/8079f2",
            "tag": "文照及",
            "comment_count": 26
        }
    ])
}
