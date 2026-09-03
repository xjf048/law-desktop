// 法律法条本地数据 (众合电子法条 v2)
// 数据来源: https://online-api.zhongheschool.com  /api/laws/listV2 + /api/laws/infoV2
// 抓取策略:
//   - listV2 拉目录树
//   - 对每个 type=1/2/3 节点 infoV2 抓正文
//   - 对每个 type=0 学科 infoV2 拿所有直接 type=4 子项 (顶层独立法规)
// 抓取时间: 2026-09-03T22:36:43+0800
window.LAW_DATA = {"version":"1","fetchedAt":"2026-09-03T22:36:43+0800","tree":[{"id":1080,"type":0,"title":"宪法","parentId":0,"position":0,"topId":0,"createdAt":1654002678000,"children":[{"id":1081,"type":1,"title":"中华人民共和国宪法","parentId":1080,"position":0,"topId":1080,"createdAt":1654002678000,"children":[{"id":1082,"type":4,"title":"序言","parentId":1081,"position":0,"topId":1080,"createdAt":1654002678000,"children":[]},{"id":1083,"type":4,"title":"第一章 总纲","parentId":1081,"position":1,"topId":1080,"createdAt":1654002678000,"children":[]},{"id":1084,"type":4,"title":"第二章 公民的基本权利和义务","parentId":1081,"position":2,"topId":1080,"createdAt":1654002678000,"children":[]},{"id":1085,"type":4,"title":"第三章 国家机构","parentId":1081,"position":3,"topId":1080,"createdAt":1654002678000,"children":[]},{"id":1086,"type":4,"title":"第四章 国旗、国歌、国徽、首都","parentId":1081,"position":4,"topId":1080,"createdAt":1654002678000,"children":[]}]}]}]