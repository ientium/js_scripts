/*
shaolin-kongfu
仅适配v2p以及青龙（青龙请自行抓包），不支持圈x

新手写脚本，难免有bug,欢迎反馈！
频道:https://t.me/ShaolinTemple1

软件名称：晶彩看点
赞赏:邀请码54870223 

万分感谢！！

[rewrite_local]

#看看赚
https://ant.xunsl.com/v5/nameless/adlickstart.json 重写目标 https://raw.githubusercontent.com/shaolin-kongfu/js_scripts/main/jckkz.js
https://ant.xunsl.com/v5/nameless/bannerstatus.json 重写目标 https://raw.githubusercontent.com/shaolin-kongfu/js_scripts/main/jckkz.js
https://ant.xunsl.com/v5/nameless/adlickend.json 重写目标 https://raw.githubusercontent.com/shaolin-kongfu/js_scripts/main/jckkz.js

[MITM]
hostname = ant.xunsl.com
*/
const _0x562c=['WRnmW5mtpYPz','s8oCWO/cI3ldICk/W44t','zMv0y2G','DGzDaNz7WO4','WRq0lG','W6m8uSo4vmo4WPRcTq','WPCCe8oppXxdTSoYWRq','W6NdM8kiW6xdKGG','WRWbgCoQWQdcKa','b8kGW6mq','h8kgW5tdKs7dJCkFW4iXEmkk','57U+5OgS5yMp5lQ15y2/5zcc','5QYa55+k556e6lsM5lI+5yMh6k6v5Rgm5BEf5AYB5z6N772/5P6s5Q6J6lw76l6A','WOTpWRdcTG','cUA/GoA0U+ECI+ECI+I1MUs7U+wkOEAiKowkNW','baZdV19KWO8W','W6ZdKmkcW6FdNI/dUq','WReIxCo8WRHXgb1tW5qysCor','C2v0lwnVB2TPzq','W6/cMSk4efG','qSorWP3dKG','AxrLBxm','mSkXW6X+W6i','C3rYAw5NAwz5','z2v0twLUDxrLCW','BaXY','E8k+fmod','tg/dLde','W6zjW67dMW','z2v0','WRTmW5mekaXB','W6JdHJZdPGtcMSkq','Bwf0y2G','ig3dImofig5isEEUTGS','r0Lusfvc','5lIQ55Yl55Yl6lwA6zIf6k+7yM9KEq','tSk3WONdSmosqa','W60GdW','BwvKAwfvCMW','WOxcMhldO8oZbW','hWFdQ1z9WQmZ','5lIn55+L6ygt6k+05zwL5Aw9','BJ3cOmkOmvfGWQZdReniqYegp0NcGG','WRSPumkH','gmkvW4W','W7v+W4dcKG','AxnrDwfUwa','Aw5PDeDVDevUDG','hCoAjwCd','qJjpW4y','5lI5556r55+m6lEB5RY55Rw0EcBdVfO','WR4zamoIWRu','BwvZC2fNzq','z290','C2v0q29VA2LLu3LUyW','WOpcPSox','toATPoEFTUEFN+I1IEs7NEwlHUAiUEIITEs4KvlcHJSYWQ3dNSoJWQldSa','ue9tva','WPDbWQm','5Ogk6yg75OQE55IU5PM255wuWRRcSCoY6zIY5BYeaa','5PM25B2P55Yl54k555Yl55Yl6lwA','Bg9N','pJ7dNSkDW4uUfq','vXvoWPxcLN0','p3ddLmoBp3aRm8o5tSonwa','sCoBW6a5xZjS','6i6F5y2L56+m','acRcMSkhDLyglmkysbddMq','z1VdQvLYCq','W7HsqCkVsg0','y2fSBa','WPuFrSkK','6i2Q5y6K552H556i6lADW4q05OMu5yIzW6JdOmoUs3BdS8kKySkzCSoxzmoy','omkjfaVcHmki','Aw5KzxHpzG','AxnmB29U','m3vQAw5VAa','BqziehjL','WRqTxCkZ','5lIQ55Yl55Yl6lwA5lU75yQH6k+35RgcoIdMIjdLIP/WN46j','W6hcLmk2geSVaeKP','afBdTmk6','osNdGG','5OkO6ycj5OUP55Qe5PIV55sOiIyI6zQu5BYacG','f8kXW6mvWRe','yrbMzHOc','A2v5CW','WPVdKvLl','C3rHDhvZ','W5SYW4ddU8k7W4aAW60','D2fPDa','Bg9HzgrHDge','hZdcNSk3DLuu','W4CYW5ZdPa','6i635y+w56YS','yxbWBgLJyxrPB24VEc13D3CTzM9YBs11CMXLBMnVzgvK','W7y8uCorsCoPWORcQCk6sW','Bg9VA1n0yxj0yM9KEq','W7nRW5NcH1RcI8oy','W64+a8oVWQNcKLO','WORdVeFdUmkUW4RcVW','i8kFlqxcKSkjeSo7WPJcLG','nSkJW5vOW758','W7DBW6NdMSkTW5C','5lQR552e552J6lwJ6k6/5RgOBSow5OU45yMt8ykUJG','zMXVB3i','emoAW5OqqcK','rmoCWOC','nZKWmwLHEvvgBW','W7zeECkKrNFcVa','ysxcI8kpEsS','hGZdRLDGWP4M','z2v0u2nYAxb0','W6faF8kZqG','z+A9U+A1RoECN+EDREI1Tos7L+wlPUwKT+I2JW','WQZdLLjrW5fSW6ulqMmncqSG','FSoLhq','WPyjwSk+ia','tJzAW4mLEmkF','WOCCaq','W6rtyq','BNvSBa','F8o/WQNdPSknjW','AgvHzgvYCW','mte5oq','Bg9KyxnOx2DLDa','CEAVM+EDKEEDR+I2UUA8REA1I+AlS+IISos7GNNdHmkvWRhdQr/cHgJdJq','W7Hsq8kVq2y','WQiPwSk9WQXYeW','gGBdOfHNWOmXda','B3bLBI11CMW','yM9KEq','W7fnW64','W7PVW53cMWNdH8kwW5jxWPHJWP9CmSkcW4hcJSkLf23cTCkFW7FcMvHLWOKTx3e7m8o4','Du9LW5ldOZC','vJjpW48','DMfSDwvgB3jlzxK','W5m8W5VdSq','z2v0twLSBgLZzwnVBMrZ','W584W47dTmk8W50n','b8k2W6S','57Uz5OkO5yQi5lIQ5y+j5zcN','zgf0yq','hIdcISk1yuifmCkDrq','WRtcRSkKsXb3vCk6W7Sl','5lIQ55Yl55Yl6lwA5R+a5Rs7yM9KEq','5Q+Y55YJ556r6lEP6kY95Ro75Bwj5A6C5z+p77+O5PYh5Q+b6lsO6l2t','W6dcNSk1','WO3cP8ohWRJdPSkJWRG','C3rHDhvZq29Kzq','WR/cPmk3','mvDIt2rWAG','Brnqd2C','Cgf0Aa','lcdNU5pMNz8HipcFLzSG','imkPW7tcSmk0kNSUW79O','ESo0WQ7dTCk+ig4mW7zv','z2v0DMfS','acdcK8kZz04','C3vIC3rY','WROIff0asW','gsVcMCkXDu8jo8kD','WQBcPCk0yX9WtSkRW7O','vSkqWP4','xSolWOK','5OcT6yk35OIp55Ig5PQj55wiWR1ff+MANow+Omkw','AxntDxjNzq','yw5KCM9Pza','j8k8ccBcKaa','WRe+pKS','6i635y+w55Yl55Yl6lwA5lU75yQHoIdMIjdLIP8SigXVB2TtDgfYDgjVzhLZoIa','b1ZdTmk0lfDN','aCkVW7K','W75NW4tcHbtdL8kKW59qWPq','C3vJy2vZCW','W6rnW63dKSk4W53dMCkRWOpcNq','zxHPC3rZu3LUyW','tcL7W6Gubga','n8kKW6XTW7KJbLT2WPNcPmoMFSoljCk8WOnkdKPsW4uyWRJcVtaNWODjWOPqDaxcJmkrm8kOW77cGSo9W4tcKSkMnsDeFmk6WPpdQCkF','W67NN4lNNQJOTOFOJkNLVBVVV4q','WQtcUCk5CHX9qCk6W78','6i635y+w56YS5lIa5lIQ55Yl55Yl6lwA6k+35RgcoIdMIjdLIP/WN46j','gmoEW4awCIH1pa','WPzlWQdcT8oYvSoUWQNcPW','W6NdKa7dTXpcJ8kg','bmoigxScsW','ChvZAa','FXFdH8kDW4OHpG','WRaWnL4','44kv5O2U56EC44kt6k2r54oz5ywK552O55Y+6lws5P2W5lQC5lMP5yIr5BUs6zQM5lYU54ct5yA65lUT56Yk5Pw856Ix772F5RUj5yUA5BQ+6ycF77Y35O2x56sP5Bsb55YzBEETQE+8G+wiVoIpOEwnRmk6WQ0oW7FMIRFLIyq','F8oRdSkfAW','CMvZB2X2zq','rJ9O','cUA1J+INIoECI+ECI+I1MUAwH+EROoAiKowkNW','z2v0tw9UDgG','WOuxa8oooaJdUq','BuhdPL8','C2vUza','Dg9tDhjPBMC','e8oYW7BcRmkhhCopuCkWnSkNxq','u8kIW4KFWR/cLaK','WO8bea','v8oCWOFdIqhcOZWNsam','fmkUW7Wi','B3bLBLvYBa','BxnN','WQirh8ollWxdH8o1WR/dNM55W7ldM2LcqSoIw8kiuviOW5NcSSoPvZpcVa','yCo/WRFdRCkylh8','cmkUW6SDWRBcJJ1PuJC','zxHLyW','D3jPDgvKyxrH','WROIc0CfqmkJ','WPZdJu5mW5PLW7HaDW','umoYvxa','Dw5KzwzPBMvK','zM9YrwfJAa','oCk1W6X+W6i','CMvTB3zL','5Q6n556e55+g6lA45AsV5yMN6k2l5RoO5BEi5A6n5z+X77+l5P+t5Q6y6lwz6l6w','6i2K5yYD56+8','WQuBWQNcGSkhW5ZdMSkJWOdcRW','W4/dUNldTmk4W47cSq','fSkKW7GDWRFcGGbHuZO','iCkPW7dcSSooD3qGW69oW6r5','aCouma','isJdIq','C3bSAxq','iSkGkYlcRbRdGadcLmkPlZ7cNG','BMfTzq','Bg9NrxjY','5lIQ55Yl55Yl6lwA5Aww5yQXyM9KEq','zmo7WQ7dTq','wGLzWP3cGNTGWQNcUca','CNvUu2nYAxb0','44on5O6I56wq44ks6kYW5z+w55YF552p6lEC5lUp5Pw55O2s56sE5A6v5OQiW7dNR4RMLBRNQ6VLKQRVVzlLHBxMRRhPM6JKVjhNGjZLHOJKUjpNR7xMLiNNQ4xVVRVMU77LI5ZLUOxPGOhVVzFLH5xNJyhPHAxLU7xLMBBMOBlVVAJLIAdOJ4RLJj3LPlZLIjddL8k3W7hdHEAiNUwlNq','D8oKda','W7X6W5NcKWhdKmkw','W6ZdJCk3W7FdHW7dHW','WPBdUfNdSG','CgfYC2u','AxnoB2rL','5lU455YP55686ls75Asg5yUY6k+k5RoIWRFdN+AlUUwiOFcZRQ4','xSolWOhdKsBcPa4SuGldTmkdWPu','C2v0zgf0yq','WOHEWQJcT8oN','xc1MW7G','z2v0ANnVBG','yuRdJvn1ya','Bg9NCW','W7HjW7FdLG','WR5nW5a','W5JcUmkDWPGXWPFdJCoY','tSoYsMyQ','pt09pt09pt09pt09pt3WN5oJ57o757UF6ycA55+L8j+tOZ09pt09pt09pt09pt09','y2TQyxi','WOpcRmox','WOFdRSkGWOC','WORcLMJdQ8oYccW','WPRdQSk5WPqyWRO','zfBdPa','cmoxW5ez','b1BdTmk4mq','Dg91z2GTy29VA2LL','gGBdQa','z2v0vgLTzq','BwfW','f8oAW40e','W6VcLmkMb0TU','DgvZDa','C3rYAw5N','hSoEi0ihqLKIqmofWQ4Goce','z2v0sg91CNm','W5pdVmkxW6ZcQ8knWRqLm0SX','kZ7dMSkhW4uH','wsLRW6uhfwiW','WOhdQSkSWOyCWQtdJW','v8oGDNaQz8oCftiMgdZdKG','Cg9ZDa','W6dcLmk8fL5Q','F8o1WQJdQSkQo3S7W6XbW4H8W7e','W7fnW67dL8kRW43dMG','qCoDWOtcHwpdO8kt','pSkGW6HXW6n6sab+WPJcVSoNFSktpmk4WPHjc0PnWODdW7JdOdiJWOrpWOLryHi','CMvKDwnL','pCkFnapcLmkf','W4/cNSk8bu9SaryrlfGN','W7/cHmkWaL5W','y3DK','qmkHWRpdU8oxuCoC','wI/dVwqqidFcICkA','bGJdVubG','BGj4AG','55+K556Y6lwM6zIG6k2p5PwY5lQF5AwW5yQ/5Pw25lMU5zgI772Z6k6/5Rcp5OAu6i+45y6+5AEG5yUEqCkFWO8rW6W','6i665y6w55+U55+J6lwx5Asv5yUuxSk65OI75yI/hLqSW4pcRN9/WOVcR8kCW5n7WO1PWRi','WPtdTLVdVmkrW4JcU2xdVwWEomoo','D3jPDgvgAwXLu3LUyW','BgvUz3rO','ys/cGG','acRcMG','C2nVCMu','6i635y+w56YS5lIa5lIQ55Yl55Yl6lwA5lU75yQH6k+35RgcoIdMIjdLIP/WN46j','Bg9VA2jVzhK','WPZdJv1rW4fXW5jjAMm','zComA1FdKCovaSozWPlcQY7cRa','g8oAW4atvtv4','WRPhW5yfntfo','Ef1FW5ZdGtVcUeG','WOJcJwZdQmoUdcveWO5tnqrwW7ZdJmkDWPP1WPxcRSk0uCkWgYH2f8kLWP3cGwtcTee','CmkVfmor','CColWOhdKrZcTsu/va','qmowWOhcHh7dNSkg','zc7cGCknDqWd','B3b0CW','zg9Uzq','AxnozwvKuMv3CML0zq','WOhcIwJdTa','CCo1WQpdUa','W6CMbLGKrI0','iCkZtSoEo8kDAKagWRBdVZq','W7HpACkLx0ZcUW','Bf1zW47dOG','WPCpwmkJm8kz','WRichSoW','W7tdTSosW7hdO8kqWQa','Dg9tDhi','zgf0yuzPBgu','W45kWPdcKmo4cmoU','WPnlWQxcUSo2cCoO','W5mYW4hdTq','pCkvpq','CMvWBgfJzq','C2XPy2u','i2tdLa','W7jXW4NcKHJdQ8kr','ghu7WRrnqLGvW4LHqCoD','FSoLfCknyCoav2G','Dmo/WRpdJmkwiw4H','zmkVfmoy','WR40lLOlsG','W6NcN8kK','CMv3yxjKyM9KEq','uJziW5m','l3yXl3nJCMLWDgLUzY9LDMfSDwf0zq','E8o5kCktCCoivG','z2v0rNvSBfLLyxi','WRmNxCk9WRvJhG','W75rECkZ','WQOOW73cJsJdPCkgW74','WOJdReFdVW','sI58','FCk9lmoFrmkh','sJXCW5q','44oc5O+Y56An44gW6k6N54o65yEg556R556g6lAL5PY65lQ+5lMj5yQg5BMM6zMS5l6q54gP5yE75lQl56+s5Ps056MB776r5RMe5yIz5BMQ6ygf77Yd5OYu56su5BAU55YHWQtNRO3VVz3LIPROJyBLJ6NdRCoceCkV5OIi5yMG','WPyBgSopnGNdRa','lcdPLjNOR68H','grNdQL0OWPKNgq','W6CYtmorsq','mte5nW','ArbeEHWcWPm','yLBdQLi','zw52','yuRdJvL0ysXoWPVdRCobW67dQa','W6JdM8kcW6VdHZxdRq8','u8kHWRtdQW','qCobWPRdNHtcPa4','z2v0zgf0yq','Bg9KyxnOx3nLDa'];const _0x1a1e0b=_0x596b,_0x53df93=_0x522e;(function(_0x4b2a31,_0x3ed8f4){const _0x17fb1d=_0x522e,_0x1932a7=_0x596b;while(!![]){try{const _0x1c8ccd=-parseInt(_0x1932a7(0x268,'HHao'))*-parseInt(_0x1932a7(0x249,'#*E9'))+parseInt(_0x1932a7(0x1ae,'w6m0'))*parseInt(_0x17fb1d(0x1d9))+parseInt(_0x1932a7(0x27d,'21B^'))*-parseInt(_0x1932a7(0x24a,'A]mc'))+-parseInt(_0x1932a7(0x1ad,'rxLg'))*parseInt(_0x1932a7(0x1d0,'(8u6'))+parseInt(_0x1932a7(0x234,'Y(iy'))+-parseInt(_0x1932a7(0x24c,'cO@E'))*parseInt(_0x17fb1d(0x204))+parseInt(_0x1932a7(0x2ab,'q$yO'))*parseInt(_0x17fb1d(0x1b9));if(_0x1c8ccd===_0x3ed8f4)break;else _0x4b2a31['push'](_0x4b2a31['shift']());}catch(_0x5cb60d){_0x4b2a31['push'](_0x4b2a31['shift']());}}}(_0x562c,0x5b06c));const $=new Env(_0x53df93(0x1a9)),notify=$[_0x1a1e0b(0x1ec,'FzxG')]()?require('./sendNotify'):'';message='';let remove=$[_0x1a1e0b(0x226,'JJpR')]()?process[_0x53df93(0x2d5)][_0x1a1e0b(0x2ae,'3e0C')]?process[_0x53df93(0x2d5)]['remove']:![]:$[_0x1a1e0b(0x28d,'Y(iy')]('remove')?$[_0x53df93(0x2da)](_0x53df93(0x246)):![],lookbody=$['isNode']()?process[_0x53df93(0x2d5)][_0x53df93(0x29a)]?process['env'][_0x53df93(0x29a)]:'':$[_0x1a1e0b(0x259,'TB@a')]('lookbody')?$['getdata']('lookbody'):'',lookbodyArr=[],lookbodys='',rewardbody=$[_0x53df93(0x25d)]()?process[_0x53df93(0x2d5)][_0x1a1e0b(0x1cd,'J*Li')]?process[_0x53df93(0x2d5)][_0x1a1e0b(0x21c,'#*E9')]:'':$[_0x1a1e0b(0x1da,'FzxG')]('rewardbody')?$[_0x53df93(0x2da)](_0x53df93(0x2c1)):'',rewardbodyArr=[],rewardbodys='',lookStartbody=$[_0x1a1e0b(0x20d,'B2G0')]()?process[_0x1a1e0b(0x1e4,'d7jV')][_0x1a1e0b(0x293,'A]mc')]?process[_0x53df93(0x2d5)][_0x1a1e0b(0x284,'cO@E')]:'':$[_0x53df93(0x2da)]('lookStartbody')?$[_0x1a1e0b(0x29d,'w6m0')]('lookStartbody'):'',lookStartbodyArr=[],lookStartbodys='';function _0x522e(_0x5c73f5,_0x2f06a9){return _0x522e=function(_0x562cef,_0x522e5f){_0x562cef=_0x562cef-0x171;let _0x2793b3=_0x562c[_0x562cef];if(_0x522e['gSLeEK']===undefined){var _0x45d2c9=function(_0x3a8d89){const _0x596b89='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x458f8a='',_0x327e6c='';for(let _0x52114b=0x0,_0x48eb34,_0x6314c9,_0x4c487f=0x0;_0x6314c9=_0x3a8d89['charAt'](_0x4c487f++);~_0x6314c9&&(_0x48eb34=_0x52114b%0x4?_0x48eb34*0x40+_0x6314c9:_0x6314c9,_0x52114b++%0x4)?_0x458f8a+=String['fromCharCode'](0xff&_0x48eb34>>(-0x2*_0x52114b&0x6)):0x0){_0x6314c9=_0x596b89['indexOf'](_0x6314c9);}for(let _0x5c142a=0x0,_0x29d5a1=_0x458f8a['length'];_0x5c142a<_0x29d5a1;_0x5c142a++){_0x327e6c+='%'+('00'+_0x458f8a['charCodeAt'](_0x5c142a)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x327e6c);};_0x522e['QnqlCg']=_0x45d2c9,_0x5c73f5=arguments,_0x522e['gSLeEK']=!![];}const _0x17f735=_0x562c[0x0],_0x4834b8=_0x562cef+_0x17f735,_0x4e0e64=_0x5c73f5[_0x4834b8];return!_0x4e0e64?(_0x2793b3=_0x522e['QnqlCg'](_0x2793b3),_0x5c73f5[_0x4834b8]=_0x2793b3):_0x2793b3=_0x4e0e64,_0x2793b3;},_0x522e(_0x5c73f5,_0x2f06a9);}const lookheader={'device-platform':_0x53df93(0x214),'Content-Type':_0x1a1e0b(0x1f2,'TB@a'),'Content-Length':'1183','Host':'ant.xunsl.com'},rewardheader={'device-platform':_0x1a1e0b(0x2dc,'E^[H'),'Content-Type':_0x53df93(0x1cc),'Content-Length':_0x53df93(0x1e9),'Host':_0x1a1e0b(0x17e,'zdpT')},lookStartheader={'device-platform':_0x53df93(0x214),'Content-Type':_0x1a1e0b(0x2a0,'UlqV'),'Content-Length':_0x53df93(0x2d2),'Host':'ant.xunsl.com'};typeof $request!==_0x1a1e0b(0x173,'d7jV')&&(getlookStartbody(),getlookbody(),getrewardbody(),$[_0x53df93(0x2a6)]());if(!lookStartbody)$[_0x53df93(0x23a)]($['name'],_0x1a1e0b(0x2cd,'E^[H'),'不知道说啥好',{'open-url':_0x1a1e0b(0x178,'Y(iy')}),$[_0x53df93(0x2a6)]();else{if(lookStartbody[_0x53df93(0x1b7)]('&')==-0x1)lookStartbodyArr['push'](lookStartbody);else{if(lookStartbody['indexOf']('&')>-0x1)lookStartbodys=lookStartbody['split']('&');else process['env'][_0x1a1e0b(0x25f,'R$u$')]&&process['env']['lookStartbody']['indexOf']('&')>-0x1?(lookStartbodyArr=process['env'][_0x53df93(0x1ce)]['split']('&'),console[_0x53df93(0x1aa)](_0x1a1e0b(0x212,'EZOj'))):lookStartbodys=[process['env'][_0x1a1e0b(0x250,'7vs)')]];}};Object[_0x53df93(0x1c3)](lookStartbodys)['forEach'](_0x5c142a=>{const _0xc95577=_0x53df93;lookStartbodys[_0x5c142a]&&lookStartbodyArr[_0xc95577(0x227)](lookStartbodys[_0x5c142a]);});if(!lookbody)$['msg']($[_0x53df93(0x251)],_0x1a1e0b(0x22a,'EZOj'),_0x53df93(0x196),{'open-url':'给您劈个叉吧'}),$['done']();else{if(lookbody[_0x53df93(0x1b7)]('&')==-0x1)lookbodyArr[_0x1a1e0b(0x1b4,'3e0C')](lookbody);else{if(lookbody[_0x1a1e0b(0x2ac,'FzxG')]('&')>-0x1)lookbodys=lookbody[_0x1a1e0b(0x205,'um3T')]('&');else process[_0x53df93(0x2d5)][_0x1a1e0b(0x1ee,'$7MF')]&&process[_0x53df93(0x2d5)][_0x1a1e0b(0x2bc,'q$yO')][_0x53df93(0x1b7)]('&')>-0x1?(lookbodyArr=process[_0x1a1e0b(0x2c0,'ta1x')][_0x1a1e0b(0x1c6,'Ho!Q')][_0x53df93(0x24f)]('&'),console[_0x1a1e0b(0x2b6,'AB4f')](_0x53df93(0x1c0))):lookbodys=[process[_0x53df93(0x2d5)]['lookbody']];}};Object[_0x1a1e0b(0x277,'w6m0')](lookbodys)['forEach'](_0x29d5a1=>{const _0x3710c7=_0x1a1e0b;lookbodys[_0x29d5a1]&&lookbodyArr[_0x3710c7(0x2c9,'A]mc')](lookbodys[_0x29d5a1]);});function _0x596b(_0x5c73f5,_0x2f06a9){return _0x596b=function(_0x562cef,_0x522e5f){_0x562cef=_0x562cef-0x171;let _0x2793b3=_0x562c[_0x562cef];if(_0x596b['xrcrzG']===undefined){var _0x45d2c9=function(_0x596b89){const _0x458f8a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x327e6c='',_0x52114b='';for(let _0x48eb34=0x0,_0x6314c9,_0x4c487f,_0x5c142a=0x0;_0x4c487f=_0x596b89['charAt'](_0x5c142a++);~_0x4c487f&&(_0x6314c9=_0x48eb34%0x4?_0x6314c9*0x40+_0x4c487f:_0x4c487f,_0x48eb34++%0x4)?_0x327e6c+=String['fromCharCode'](0xff&_0x6314c9>>(-0x2*_0x48eb34&0x6)):0x0){_0x4c487f=_0x458f8a['indexOf'](_0x4c487f);}for(let _0x29d5a1=0x0,_0x781939=_0x327e6c['length'];_0x29d5a1<_0x781939;_0x29d5a1++){_0x52114b+='%'+('00'+_0x327e6c['charCodeAt'](_0x29d5a1)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x52114b);};const _0x3a8d89=function(_0x10c245,_0x1cf90d){let _0x38fe29=[],_0x51493f=0x0,_0x42de79,_0x49edc3='';_0x10c245=_0x45d2c9(_0x10c245);let _0x566246;for(_0x566246=0x0;_0x566246<0x100;_0x566246++){_0x38fe29[_0x566246]=_0x566246;}for(_0x566246=0x0;_0x566246<0x100;_0x566246++){_0x51493f=(_0x51493f+_0x38fe29[_0x566246]+_0x1cf90d['charCodeAt'](_0x566246%_0x1cf90d['length']))%0x100,_0x42de79=_0x38fe29[_0x566246],_0x38fe29[_0x566246]=_0x38fe29[_0x51493f],_0x38fe29[_0x51493f]=_0x42de79;}_0x566246=0x0,_0x51493f=0x0;for(let _0x5cf263=0x0;_0x5cf263<_0x10c245['length'];_0x5cf263++){_0x566246=(_0x566246+0x1)%0x100,_0x51493f=(_0x51493f+_0x38fe29[_0x566246])%0x100,_0x42de79=_0x38fe29[_0x566246],_0x38fe29[_0x566246]=_0x38fe29[_0x51493f],_0x38fe29[_0x51493f]=_0x42de79,_0x49edc3+=String['fromCharCode'](_0x10c245['charCodeAt'](_0x5cf263)^_0x38fe29[(_0x38fe29[_0x566246]+_0x38fe29[_0x51493f])%0x100]);}return _0x49edc3;};_0x596b['saDrmE']=_0x3a8d89,_0x5c73f5=arguments,_0x596b['xrcrzG']=!![];}const _0x17f735=_0x562c[0x0],_0x4834b8=_0x562cef+_0x17f735,_0x4e0e64=_0x5c73f5[_0x4834b8];return!_0x4e0e64?(_0x596b['gDduDE']===undefined&&(_0x596b['gDduDE']=!![]),_0x2793b3=_0x596b['saDrmE'](_0x2793b3,_0x522e5f),_0x5c73f5[_0x4834b8]=_0x2793b3):_0x2793b3=_0x4e0e64,_0x2793b3;},_0x596b(_0x5c73f5,_0x2f06a9);}if(!rewardbody)$[_0x1a1e0b(0x24e,'BgbY')]($[_0x1a1e0b(0x266,'#*E9')],_0x1a1e0b(0x257,'(8u6'),_0x53df93(0x196),{'open-url':_0x53df93(0x1fa)}),$[_0x1a1e0b(0x2b5,'Ho!Q')]();else{if(rewardbody[_0x53df93(0x1b7)]('&')==-0x1)rewardbodyArr[_0x1a1e0b(0x181,'R$u$')](rewardbody);else{if(rewardbody[_0x1a1e0b(0x195,'$7MF')]('&')>-0x1)rewardbodys=rewardbody['split']('&');else process[_0x53df93(0x2d5)][_0x53df93(0x2c1)]&&process[_0x53df93(0x2d5)][_0x1a1e0b(0x24b,'UA5(')][_0x1a1e0b(0x2a4,'rxLg')]('&')>-0x1?(rewardbodyArr=process[_0x53df93(0x2d5)][_0x53df93(0x2c1)][_0x1a1e0b(0x261,'t7(j')]('&'),console[_0x53df93(0x1aa)](_0x1a1e0b(0x1a8,'d7jV'))):rewardbodys=[process[_0x1a1e0b(0x258,'q$yO')][_0x1a1e0b(0x1d2,'AB4f')]];}};Object[_0x1a1e0b(0x198,'zdpT')](rewardbodys)[_0x53df93(0x244)](_0x781939=>{const _0x48cf5d=_0x53df93;rewardbodys[_0x781939]&&rewardbodyArr[_0x48cf5d(0x227)](rewardbodys[_0x781939]);}),!(async()=>{const _0xf46408=_0x53df93,_0x1faf8e=_0x1a1e0b;console['log']('共'+lookStartbodyArr[_0x1faf8e(0x1db,'rxLg')]+_0x1faf8e(0x19f,'cO@E'));for(let _0x10c245=0x0;_0x10c245<lookStartbodyArr[_0x1faf8e(0x194,'UlqV')];_0x10c245++){$[_0xf46408(0x1a1)]='',lookStartbody1=lookStartbodyArr[_0x10c245],console['log']('--------第\x20'+(_0x10c245+0x1)+_0x1faf8e(0x1eb,'AB4f')),await lookStart(),await $[_0x1faf8e(0x262,'vPCU')](0x1388),console[_0xf46408(0x1aa)]('\x0a\x0a');}console[_0xf46408(0x1aa)]('共'+lookbodyArr[_0x1faf8e(0x174,'EZOj')]+'个看看赚阅读body');for(let _0x1cf90d=0x0;_0x1cf90d<lookbodyArr[_0xf46408(0x295)];_0x1cf90d++){$['message']='',lookbody1=lookbodyArr[_0x1cf90d],console[_0xf46408(0x1aa)](_0x1faf8e(0x18e,'rxLg')+(_0x1cf90d+0x1)+_0x1faf8e(0x1a5,'7S@^'));for(let _0x38fe29=0x0;_0x38fe29<0x6;_0x38fe29++){await lookstart(),await $[_0xf46408(0x1c7)](0x2710);}remove==!![]?(await removebody(),console[_0x1faf8e(0x296,'rxLg')]('清空看看赚阅读和激活body完成'),console[_0xf46408(0x1aa)]('共'+lookbodyArr[_0x1faf8e(0x20b,'7S@^')]+_0xf46408(0x190)),console[_0x1faf8e(0x297,'7S@^')]('共'+lookStartbodyArr['length']+_0xf46408(0x1fe))):console[_0xf46408(0x1aa)]('\x0a\x0a'),console[_0xf46408(0x1aa)]('\x0a\x0a');}date=new Date(),$[_0x1faf8e(0x1f3,'!!2A')]()&&date[_0xf46408(0x27c)]()===0xb&&date[_0xf46408(0x185)]()<0xa?message[_0xf46408(0x295)]!==0x0&&await notify['sendNotify'](_0xf46408(0x1a9),message+_0x1faf8e(0x197,'NA2c')):$[_0x1faf8e(0x22d,'vPCU')]($['name'],'',message);})()[_0x1a1e0b(0x272,'NA2c')](_0x51493f=>$[_0x53df93(0x252)](_0x51493f))[_0x1a1e0b(0x2aa,'(l7!')](()=>$['done']());function sleep(_0x42de79){return new Promise(_0x49edc3=>setTimeout(_0x49edc3,_0x42de79));}!(async()=>{const _0x2526de=_0x1a1e0b,_0x547f1f=_0x53df93;console[_0x547f1f(0x1aa)]('共'+rewardbodyArr[_0x547f1f(0x295)]+_0x547f1f(0x253));if(lookbodyArr[_0x547f1f(0x295)]==rewardbodyArr[_0x547f1f(0x295)])for(let _0x566246=0x0;_0x566246<rewardbodyArr[_0x547f1f(0x295)];_0x566246++){rewardbody1=rewardbodyArr[_0x566246],await $[_0x2526de(0x254,'cO@E')](0x1388),await reward();}else console[_0x2526de(0x200,'ta1x')](_0x2526de(0x291,'rf[&')),$[_0x547f1f(0x2a6)]();})();function removebody(){let _0x5cf263=[];lookbodyArr=_0x5cf263,lookStartbodyArr=_0x5cf263;}function getlookStartbody(){const _0xb314d0=_0x53df93,_0x926791=_0x1a1e0b;if($request['url'][_0x926791(0x22b,'q$yO')](/\/nameless\/adlickstart/)){bodyVal=$request['body'];if(lookStartbody){if(lookStartbody['indexOf'](bodyVal)>-0x1)$[_0x926791(0x1e1,'q$yO')](_0x926791(0x179,'UA5('));else lookStartbody[_0x926791(0x201,'21B^')](bodyVal)==-0x1&&(lookStartbodys=lookStartbody+'&'+bodyVal,$[_0xb314d0(0x260)](lookStartbodys,_0xb314d0(0x1ce)),$[_0x926791(0x267,'E^[H')]($[_0x926791(0x26d,'HHao')]+'获取看看赚任务:\x20成功,\x20lookStartbodys:\x20'+bodyVal),bodys=lookStartbodys[_0x926791(0x1c1,'UA5(')]('&'),$[_0xb314d0(0x23a)]($[_0xb314d0(0x251)],_0x926791(0x248,'MI[V')+bodys[_0x926791(0x1e7,'cO@E')]+_0xb314d0(0x1bc),''));}else $[_0x926791(0x2b0,'PKTm')](bodyVal,'lookStartbody'),$[_0xb314d0(0x1aa)]($[_0x926791(0x242,'5j8!')]+_0xb314d0(0x217)+bodyVal),$[_0x926791(0x24e,'BgbY')]($[_0x926791(0x19a,'TB@a')],_0xb314d0(0x299),'');}}function getlookbody(){const _0x1f8c27=_0x1a1e0b,_0x5807e2=_0x53df93;if($request['url'][_0x5807e2(0x18d)](/\/nameless\/bannerstatus/)){bodyVal=$request['body'];if(lookbody){if(lookbody[_0x1f8c27(0x18b,'E^[H')](bodyVal)>-0x1)$['log'](_0x1f8c27(0x1ff,'#*E9'));else lookbody[_0x1f8c27(0x2ba,'TB@a')](bodyVal)==-0x1&&(lookbodys=lookbody+'&'+bodyVal,$['setdata'](lookbodys,_0x5807e2(0x29a)),$[_0x1f8c27(0x211,'R$u$')]($[_0x5807e2(0x251)]+'获取看看赚:\x20成功,\x20lookbodys:\x20'+bodyVal),bodys=lookbodys[_0x5807e2(0x24f)]('&'),$[_0x5807e2(0x23a)]($['name'],_0x1f8c27(0x1af,'BIW8')+bodys[_0x5807e2(0x295)]+_0x1f8c27(0x1d5,'(l7!'),''));}else $[_0x1f8c27(0x2d9,'R$u$')](bodyVal,_0x5807e2(0x29a)),$['log']($[_0x5807e2(0x251)]+_0x1f8c27(0x1b5,'(8u6')+bodyVal),$[_0x5807e2(0x23a)]($[_0x5807e2(0x251)],_0x5807e2(0x222),'');}}function getrewardbody(){const _0x1f7dce=_0x53df93,_0x27d405=_0x1a1e0b;if($request[_0x27d405(0x1bf,'BgbY')]['match'](/\/nameless\/adlickend/)){bodyVal=$request[_0x27d405(0x216,'B2G0')];if(rewardbody){if(rewardbody[_0x1f7dce(0x1b7)](bodyVal)>-0x1)$[_0x1f7dce(0x1aa)](_0x27d405(0x247,'HHao'));else rewardbody[_0x27d405(0x286,'BIW8')](bodyVal)==-0x1&&(rewardbodys=rewardbody+'&'+bodyVal,$[_0x1f7dce(0x260)](rewardbodys,_0x1f7dce(0x2c1)),$[_0x1f7dce(0x1aa)]($[_0x1f7dce(0x251)]+_0x27d405(0x292,'rxLg')+bodyVal),bodys=rewardbodys['split']('&'),$[_0x27d405(0x236,'d7jV')]($['name'],_0x1f7dce(0x1cb)+bodys[_0x1f7dce(0x295)]+_0x27d405(0x25e,'E^[H'),''));}else $['setdata'](bodyVal,_0x27d405(0x1fc,'7S@^')),$[_0x1f7dce(0x1aa)]($[_0x1f7dce(0x251)]+'获取看看赚奖励:\x20成功,\x20rewardbodys:\x20'+bodyVal),$[_0x1f7dce(0x23a)]($[_0x27d405(0x290,'7nm]')],'获取第一个看看赚奖励请求:\x20成功🎉','');}}function lookStart(_0x70df7f=0x0){return new Promise(_0x5151a0=>{const _0x2eecb5=_0x522e;let _0x17cbb0={'url':'https://ant.xunsl.com/v5/nameless/adlickstart.json','headers':lookStartheader,'body':lookStartbody1};$[_0x2eecb5(0x282)](_0x17cbb0,async(_0x3da939,_0x14a743,_0x54f801)=>{const _0x5b6dc6=_0x2eecb5,_0x5cbff7=_0x596b;try{const _0x33540c=JSON[_0x5cbff7(0x19d,'JJpR')](_0x54f801);_0x33540c[_0x5cbff7(0x1c9,'7S@^')]===!![]?console[_0x5cbff7(0x1a7,'t7(j')](_0x5b6dc6(0x17b)):console[_0x5cbff7(0x267,'E^[H')](_0x5cbff7(0x1df,'JJpR'));}catch(_0xf9089b){}finally{_0x5151a0();}},_0x70df7f);});}function lookstart(_0x4ec244=0x0){return new Promise(_0x1cbae8=>{const _0x469da8=_0x596b;let _0x2e8e85={'url':_0x469da8(0x21f,'a]Eb'),'headers':lookheader,'body':lookbody1};$['post'](_0x2e8e85,async(_0x5276fe,_0x28c174,_0x5dfb55)=>{const _0x38dd0d=_0x522e,_0x1f55d3=_0x469da8;try{const _0x526e73=JSON[_0x1f55d3(0x28f,'$7MF')](_0x5dfb55);_0x526e73[_0x38dd0d(0x21b)]===!![]?console[_0x1f55d3(0x1d8,'BIW8')](_0x38dd0d(0x22e)):console[_0x38dd0d(0x1aa)]('\x0a浏览看看赚文章失败');}catch(_0x289ac9){}finally{_0x1cbae8();}},_0x4ec244);});}function reward(_0x5ccbd0=0x0){return new Promise(_0x2ee41f=>{let _0x24229d={'url':'https://ant.xunsl.com/v5/nameless/adlickend.json','headers':rewardheader,'body':rewardbody1};$['post'](_0x24229d,async(_0x55ac83,_0x387f75,_0x445a46)=>{const _0x3db140=_0x522e,_0x48deb6=_0x596b;try{const _0x2e5ff2=JSON[_0x48deb6(0x1de,'FzxG')](_0x445a46);_0x2e5ff2['items'][_0x48deb6(0x1e2,'3e0C')]!==_0x3db140(0x243)?console[_0x3db140(0x1aa)](_0x48deb6(0x220,'21B^')+_0x2e5ff2[_0x3db140(0x182)][_0x3db140(0x298)]+'金币'):console[_0x48deb6(0x192,'(l7!')]('\x0a领取奖励失败');}catch(_0x2740ff){}finally{_0x2ee41f();}},_0x5ccbd0);});}function Env(_0x3f85b1,_0x49fb87){const _0x3d2de5=_0x53df93,_0x37e28e=_0x1a1e0b;_0x37e28e(0x20f,'MI[V')!=typeof process&&JSON[_0x3d2de5(0x184)](process['env'])[_0x37e28e(0x17d,'EZOj')](_0x3d2de5(0x18f))>-0x1&&process['exit'](0x0);class _0x2265a6{constructor(_0x481123){const _0x560421=_0x3d2de5;this[_0x560421(0x2d5)]=_0x481123;}[_0x3d2de5(0x232)](_0x39dc6b,_0x314864=_0x37e28e(0x199,'a]Eb')){const _0x4f35bf=_0x37e28e,_0x5b48f0=_0x3d2de5;_0x39dc6b='string'==typeof _0x39dc6b?{'url':_0x39dc6b}:_0x39dc6b;let _0xe9bee3=this[_0x5b48f0(0x18a)];return'POST'===_0x314864&&(_0xe9bee3=this[_0x4f35bf(0x1ca,'Ho!Q')]),new Promise((_0x250cf7,_0x9f3a41)=>{const _0x466dfa=_0x4f35bf;_0xe9bee3[_0x466dfa(0x229,'B2G0')](this,_0x39dc6b,(_0x585692,_0x4ec805,_0x31afb7)=>{_0x585692?_0x9f3a41(_0x585692):_0x250cf7(_0x4ec805);});});}[_0x37e28e(0x26c,'21B^')](_0x22eeab){const _0x10410f=_0x37e28e,_0x2bf6ff=_0x3d2de5;return this[_0x2bf6ff(0x232)][_0x10410f(0x176,'UA5(')](this[_0x2bf6ff(0x2d5)],_0x22eeab);}['post'](_0x752257){const _0x389be6=_0x37e28e,_0x505c12=_0x3d2de5;return this[_0x505c12(0x232)][_0x505c12(0x1b3)](this[_0x389be6(0x219,'UA5(')],_0x752257,_0x505c12(0x1a6));}}return new class{constructor(_0x519379,_0x70b633){const _0x16514b=_0x3d2de5,_0x482332=_0x37e28e;this['name']=_0x519379,this[_0x482332(0x2a8,'UlqV')]=new _0x2265a6(this),this[_0x482332(0x19e,'WM7T')]=null,this[_0x16514b(0x2b2)]='box.dat',this['logs']=[],this['isMute']=!0x1,this[_0x16514b(0x2a7)]=!0x1,this[_0x482332(0x1b0,'7S@^')]='\x0a',this['startTime']=new Date()[_0x16514b(0x275)](),Object['assign'](this,_0x70b633),this[_0x16514b(0x1aa)]('','🔔'+this[_0x482332(0x25b,'A]mc')]+',\x20开始!');}[_0x37e28e(0x1b6,'AB4f')](){const _0xac486f=_0x37e28e;return _0xac486f(0x20e,'7S@^')!=typeof module&&!!module['exports'];}[_0x37e28e(0x25a,'EZOj')](){return'undefined'!=typeof $task;}[_0x3d2de5(0x213)](){const _0x11a341=_0x3d2de5;return'undefined'!=typeof $httpClient&&_0x11a341(0x243)==typeof $loon;}[_0x37e28e(0x215,'7vs)')](){const _0x3a9b3a=_0x3d2de5;return _0x3a9b3a(0x243)!=typeof $loon;}['toObj'](_0x176b88,_0x36040e=null){const _0x2ccd8b=_0x3d2de5;try{return JSON[_0x2ccd8b(0x25c)](_0x176b88);}catch{return _0x36040e;}}[_0x3d2de5(0x2b1)](_0x4f8ec0,_0x1be1fe=null){try{return JSON['stringify'](_0x4f8ec0);}catch{return _0x1be1fe;}}[_0x3d2de5(0x263)](_0x4c6a8e,_0x472d1d){const _0x1d4c17=_0x3d2de5,_0x5292f3=_0x37e28e;let _0x2ff5e8=_0x472d1d;const _0x1249bc=this[_0x5292f3(0x230,'d7jV')](_0x4c6a8e);if(_0x1249bc)try{_0x2ff5e8=JSON[_0x1d4c17(0x25c)](this[_0x5292f3(0x285,'#*E9')](_0x4c6a8e));}catch{}return _0x2ff5e8;}['setjson'](_0x2953e6,_0x4923ef){const _0x14db45=_0x3d2de5;try{return this['setdata'](JSON[_0x14db45(0x184)](_0x2953e6),_0x4923ef);}catch{return!0x1;}}[_0x3d2de5(0x1dd)](_0x13e8bc){return new Promise(_0x561533=>{const _0x4ea06e=_0x596b;this[_0x4ea06e(0x171,'B2G0')]({'url':_0x13e8bc},(_0x540b64,_0xa0ba23,_0x445025)=>_0x561533(_0x445025));});}[_0x3d2de5(0x256)](_0x390e5f,_0x2a290f){const _0x1e142f=_0x3d2de5;return new Promise(_0x348375=>{const _0x11a5b3=_0x522e,_0xec2532=_0x596b;let _0x5d17c7=this[_0xec2532(0x285,'#*E9')](_0xec2532(0x23b,'d7jV'));_0x5d17c7=_0x5d17c7?_0x5d17c7[_0xec2532(0x23c,'cO@E')](/\n/g,'')['trim']():_0x5d17c7;let _0x4f989a=this[_0xec2532(0x21e,'vPCU')]('@chavy_boxjs_userCfgs.httpapi_timeout');_0x4f989a=_0x4f989a?0x1*_0x4f989a:0x14,_0x4f989a=_0x2a290f&&_0x2a290f[_0xec2532(0x2ce,'d7jV')]?_0x2a290f[_0xec2532(0x2ce,'d7jV')]:_0x4f989a;const [_0x48029d,_0x5080ad]=_0x5d17c7['split']('@'),_0x48cf47={'url':_0xec2532(0x1cf,'TB@a')+_0x5080ad+_0x11a5b3(0x2c3),'body':{'script_text':_0x390e5f,'mock_type':'cron','timeout':_0x4f989a},'headers':{'X-Key':_0x48029d,'Accept':_0xec2532(0x210,'w6m0')}};this[_0xec2532(0x238,'UA5(')](_0x48cf47,(_0x8c105,_0x1ee73c,_0x556ca0)=>_0x348375(_0x556ca0));})['catch'](_0x1366b7=>this[_0x1e142f(0x252)](_0x1366b7));}[_0x3d2de5(0x1c8)](){const _0x15c349=_0x3d2de5,_0x129780=_0x37e28e;if(!this[_0x129780(0x191,'Y(iy')]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x129780(0x189,'#*E9')]=this[_0x15c349(0x206)]?this[_0x129780(0x17a,'t7(j')]:require(_0x15c349(0x206));const _0x2b0b6d=this[_0x15c349(0x206)][_0x129780(0x1d1,'A]mc')](this[_0x129780(0x223,'w6m0')]),_0x4634bf=this['path']['resolve'](process[_0x15c349(0x28c)](),this['dataFile']),_0x4d9e20=this['fs'][_0x15c349(0x21d)](_0x2b0b6d),_0x391493=!_0x4d9e20&&this['fs'][_0x129780(0x21a,'TB@a')](_0x4634bf);if(!_0x4d9e20&&!_0x391493)return{};{const _0x45077e=_0x4d9e20?_0x2b0b6d:_0x4634bf;try{return JSON[_0x15c349(0x25c)](this['fs']['readFileSync'](_0x45077e));}catch(_0x18807e){return{};}}}}[_0x3d2de5(0x23f)](){const _0xc8162a=_0x37e28e,_0x46bcb5=_0x3d2de5;if(this['isNode']()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x46bcb5(0x206)]=this[_0x46bcb5(0x206)]?this[_0x46bcb5(0x206)]:require(_0x46bcb5(0x206));const _0x1cba0e=this[_0xc8162a(0x1f4,'WM7T')][_0xc8162a(0x1ed,'zdpT')](this[_0xc8162a(0x29f,'!!2A')]),_0x387aa4=this[_0xc8162a(0x2be,'51qO')][_0x46bcb5(0x22c)](process[_0xc8162a(0x1f9,'UA5(')](),this['dataFile']),_0x869741=this['fs'][_0x46bcb5(0x21d)](_0x1cba0e),_0x3f2d64=!_0x869741&&this['fs'][_0xc8162a(0x237,'R$u$')](_0x387aa4),_0x25e73a=JSON['stringify'](this['data']);_0x869741?this['fs'][_0x46bcb5(0x294)](_0x1cba0e,_0x25e73a):_0x3f2d64?this['fs'][_0x46bcb5(0x294)](_0x387aa4,_0x25e73a):this['fs']['writeFileSync'](_0x1cba0e,_0x25e73a);}}[_0x37e28e(0x23d,'UA5(')](_0x618e49,_0x194ffd,_0x4778d2){const _0x412ba5=_0x3d2de5,_0x3dfe3d=_0x37e28e,_0x1c2ac5=_0x194ffd[_0x3dfe3d(0x17c,'$7MF')](/\[(\d+)\]/g,_0x3dfe3d(0x2b9,'rxLg'))[_0x412ba5(0x24f)]('.');let _0x576ddc=_0x618e49;for(const _0x410c32 of _0x1c2ac5)if(_0x576ddc=Object(_0x576ddc)[_0x410c32],void 0x0===_0x576ddc)return _0x4778d2;return _0x576ddc;}[_0x3d2de5(0x2db)](_0x25e4fa,_0x4e35d1,_0xef671a){const _0x1109c0=_0x3d2de5,_0xbaa914=_0x37e28e;return Object(_0x25e4fa)!==_0x25e4fa?_0x25e4fa:(Array['isArray'](_0x4e35d1)||(_0x4e35d1=_0x4e35d1['toString']()[_0xbaa914(0x183,'a]Eb')](/[^.[\]]+/g)||[]),_0x4e35d1[_0x1109c0(0x2b8)](0x0,-0x1)[_0x1109c0(0x288)]((_0x3b39b5,_0x508240,_0x3f0ae8)=>Object(_0x3b39b5[_0x508240])===_0x3b39b5[_0x508240]?_0x3b39b5[_0x508240]:_0x3b39b5[_0x508240]=Math[_0xbaa914(0x2ca,'vPCU')](_0x4e35d1[_0x3f0ae8+0x1])>>0x0==+_0x4e35d1[_0x3f0ae8+0x1]?[]:{},_0x25e4fa)[_0x4e35d1[_0x4e35d1[_0xbaa914(0x289,'AB4f')]-0x1]]=_0xef671a,_0x25e4fa);}[_0x37e28e(0x259,'TB@a')](_0x1811d4){const _0x59b6ad=_0x37e28e,_0x28aa3e=_0x3d2de5;let _0x3c059c=this[_0x28aa3e(0x20a)](_0x1811d4);if(/^@/[_0x28aa3e(0x279)](_0x1811d4)){const [,_0x44e85a,_0x1fe949]=/^@(.*?)\.(.*?)$/[_0x28aa3e(0x23e)](_0x1811d4),_0x3d00b9=_0x44e85a?this[_0x59b6ad(0x278,'ta1x')](_0x44e85a):'';if(_0x3d00b9)try{const _0xdad9a3=JSON['parse'](_0x3d00b9);_0x3c059c=_0xdad9a3?this[_0x28aa3e(0x1ea)](_0xdad9a3,_0x1fe949,''):_0x3c059c;}catch(_0x3b5ed0){_0x3c059c='';}}return _0x3c059c;}[_0x3d2de5(0x260)](_0x542119,_0x42c48e){const _0x5cecad=_0x3d2de5,_0x1ba909=_0x37e28e;let _0x26f668=!0x1;if(/^@/[_0x1ba909(0x2d8,'Y(iy')](_0x42c48e)){const [,_0x53e301,_0x5ed6ea]=/^@(.*?)\.(.*?)$/[_0x1ba909(0x231,'uCJT')](_0x42c48e),_0x11948e=this[_0x5cecad(0x20a)](_0x53e301),_0x4bd38b=_0x53e301?_0x5cecad(0x1e6)===_0x11948e?null:_0x11948e||'{}':'{}';try{const _0x2d0f66=JSON[_0x1ba909(0x2ad,'!!2A')](_0x4bd38b);this['lodash_set'](_0x2d0f66,_0x5ed6ea,_0x542119),_0x26f668=this['setval'](JSON[_0x1ba909(0x241,'rf[&')](_0x2d0f66),_0x53e301);}catch(_0x15526f){const _0x3ff194={};this[_0x1ba909(0x255,'0hP4')](_0x3ff194,_0x5ed6ea,_0x542119),_0x26f668=this['setval'](JSON['stringify'](_0x3ff194),_0x53e301);}}else _0x26f668=this[_0x1ba909(0x1ba,'um3T')](_0x542119,_0x42c48e);return _0x26f668;}[_0x37e28e(0x27e,'BgbY')](_0x10daaa){const _0x568922=_0x37e28e,_0x73fbc6=_0x3d2de5;return this[_0x73fbc6(0x213)]()||this['isLoon']()?$persistentStore['read'](_0x10daaa):this['isQuanX']()?$prefs[_0x73fbc6(0x1f5)](_0x10daaa):this[_0x73fbc6(0x25d)]()?(this[_0x568922(0x1bb,'zdpT')]=this[_0x73fbc6(0x1c8)](),this[_0x568922(0x2a1,'51qO')][_0x10daaa]):this[_0x73fbc6(0x1fb)]&&this['data'][_0x10daaa]||null;}[_0x37e28e(0x26f,'HHao')](_0x2d248f,_0x45e1e8){const _0x2ca205=_0x37e28e,_0x290d07=_0x3d2de5;return this[_0x290d07(0x213)]()||this[_0x2ca205(0x2cb,'51qO')]()?$persistentStore['write'](_0x2d248f,_0x45e1e8):this[_0x2ca205(0x240,'B2G0')]()?$prefs[_0x2ca205(0x27b,'JJpR')](_0x2d248f,_0x45e1e8):this[_0x290d07(0x25d)]()?(this[_0x290d07(0x1fb)]=this[_0x290d07(0x1c8)](),this[_0x2ca205(0x1be,'NA2c')][_0x45e1e8]=_0x2d248f,this[_0x2ca205(0x221,'MI[V')](),!0x0):this['data']&&this[_0x2ca205(0x1f6,'Ho!Q')][_0x45e1e8]||null;}[_0x3d2de5(0x19c)](_0x47cb04){const _0x57673f=_0x37e28e,_0xf2473f=_0x3d2de5;this['got']=this[_0xf2473f(0x1a2)]?this['got']:require(_0x57673f(0x1a4,'21B^')),this['cktough']=this[_0x57673f(0x2c6,'zdpT')]?this['cktough']:require(_0xf2473f(0x273)),this[_0x57673f(0x180,'ta1x')]=this[_0xf2473f(0x26b)]?this[_0x57673f(0x2d1,'J*Li')]:new this[(_0x57673f(0x26e,'UlqV'))][(_0x57673f(0x2a2,'R$u$'))](),_0x47cb04&&(_0x47cb04[_0x57673f(0x2a3,'BIW8')]=_0x47cb04[_0x57673f(0x280,'HHao')]?_0x47cb04[_0x57673f(0x2b4,'t7(j')]:{},void 0x0===_0x47cb04[_0xf2473f(0x1e8)]['Cookie']&&void 0x0===_0x47cb04[_0x57673f(0x2dd,'BIW8')]&&(_0x47cb04[_0x57673f(0x28e,'rwfH')]=this[_0x57673f(0x180,'ta1x')]));}[_0x3d2de5(0x18a)](_0x2418af,_0x3ed319=()=>{}){const _0x50ae69=_0x37e28e,_0x12107b=_0x3d2de5;_0x2418af[_0x12107b(0x1e8)]&&(delete _0x2418af['headers']['Content-Type'],delete _0x2418af[_0x12107b(0x1e8)]['Content-Length']),this[_0x12107b(0x213)]()||this[_0x50ae69(0x1b2,'FzxG')]()?(this['isSurge']()&&this['isNeedRewrite']&&(_0x2418af[_0x12107b(0x1e8)]=_0x2418af['headers']||{},Object[_0x50ae69(0x1d4,'#*E9')](_0x2418af[_0x50ae69(0x280,'HHao')],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x50ae69(0x1f1,'#*E9')](_0x2418af,(_0x489ebd,_0x509870,_0x1b7f84)=>{const _0x51f546=_0x12107b,_0x2f0668=_0x50ae69;!_0x489ebd&&_0x509870&&(_0x509870['body']=_0x1b7f84,_0x509870[_0x2f0668(0x29b,'rf[&')]=_0x509870[_0x51f546(0x1c5)]),_0x3ed319(_0x489ebd,_0x509870,_0x1b7f84);})):this['isQuanX']()?(this[_0x12107b(0x2a7)]&&(_0x2418af['opts']=_0x2418af[_0x50ae69(0x187,'51qO')]||{},Object[_0x50ae69(0x1ac,'0hP4')](_0x2418af['opts'],{'hints':!0x1})),$task[_0x12107b(0x2de)](_0x2418af)[_0x50ae69(0x271,'w6m0')](_0x38e8a5=>{const {statusCode:_0x2d27c6,statusCode:_0x46cebf,headers:_0x49bc30,body:_0x587063}=_0x38e8a5;_0x3ed319(null,{'status':_0x2d27c6,'statusCode':_0x46cebf,'headers':_0x49bc30,'body':_0x587063},_0x587063);},_0x293804=>_0x3ed319(_0x293804))):this[_0x50ae69(0x264,'uCJT')]()&&(this[_0x50ae69(0x209,'cO@E')](_0x2418af),this[_0x12107b(0x1a2)](_0x2418af)['on'](_0x50ae69(0x27f,'vPCU'),(_0x2acc32,_0x491207)=>{const _0x3b8b6f=_0x12107b,_0x1d7e7a=_0x50ae69;try{if(_0x2acc32[_0x1d7e7a(0x29e,'E^[H')][_0x3b8b6f(0x17f)]){const _0x43f032=_0x2acc32[_0x3b8b6f(0x1e8)][_0x3b8b6f(0x17f)][_0x3b8b6f(0x276)](this[_0x1d7e7a(0x218,'NA2c')]['Cookie'][_0x1d7e7a(0x269,'5j8!')])[_0x3b8b6f(0x233)]();this['ckjar'][_0x3b8b6f(0x1a3)](_0x43f032,null),_0x491207['cookieJar']=this[_0x1d7e7a(0x1a0,'(8u6')];}}catch(_0x5c8193){this[_0x3b8b6f(0x252)](_0x5c8193);}})['then'](_0x32b167=>{const {statusCode:_0xfedf8d,statusCode:_0x202388,headers:_0x6d603f,body:_0x32b9d0}=_0x32b167;_0x3ed319(null,{'status':_0xfedf8d,'statusCode':_0x202388,'headers':_0x6d603f,'body':_0x32b9d0},_0x32b9d0);},_0x192d0a=>{const _0x1ed126=_0x12107b,{message:_0x2f73f5,response:_0x351fc0}=_0x192d0a;_0x3ed319(_0x2f73f5,_0x351fc0,_0x351fc0&&_0x351fc0[_0x1ed126(0x1f0)]);}));}['post'](_0xa3f8,_0x33445f=()=>{}){const _0x4f9638=_0x37e28e,_0x5e1dac=_0x3d2de5;if(_0xa3f8[_0x5e1dac(0x1f0)]&&_0xa3f8[_0x4f9638(0x1e3,'WM7T')]&&!_0xa3f8[_0x5e1dac(0x1e8)]['Content-Type']&&(_0xa3f8[_0x5e1dac(0x1e8)][_0x4f9638(0x28a,'ta1x')]=_0x4f9638(0x287,'a]Eb')),_0xa3f8[_0x4f9638(0x280,'HHao')]&&delete _0xa3f8[_0x4f9638(0x225,'6rag')][_0x4f9638(0x1e0,'rf[&')],this[_0x5e1dac(0x213)]()||this[_0x5e1dac(0x1b8)]())this['isSurge']()&&this[_0x4f9638(0x281,'5j8!')]&&(_0xa3f8[_0x4f9638(0x1f8,'Ho!Q')]=_0xa3f8[_0x4f9638(0x2df,'um3T')]||{},Object[_0x4f9638(0x1c2,'7nm]')](_0xa3f8[_0x4f9638(0x1dc,'$7MF')],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x5e1dac(0x282)](_0xa3f8,(_0x42e35f,_0x5c0452,_0x2872da)=>{const _0x3f8bf5=_0x5e1dac;!_0x42e35f&&_0x5c0452&&(_0x5c0452[_0x3f8bf5(0x1f0)]=_0x2872da,_0x5c0452[_0x3f8bf5(0x202)]=_0x5c0452[_0x3f8bf5(0x1c5)]),_0x33445f(_0x42e35f,_0x5c0452,_0x2872da);});else{if(this['isQuanX']())_0xa3f8[_0x4f9638(0x2bf,'B2G0')]='POST',this[_0x4f9638(0x2d6,'uCJT')]&&(_0xa3f8[_0x4f9638(0x2c7,'FzxG')]=_0xa3f8[_0x5e1dac(0x2a5)]||{},Object[_0x4f9638(0x175,'(8u6')](_0xa3f8[_0x4f9638(0x2af,'(8u6')],{'hints':!0x1})),$task[_0x4f9638(0x245,'a]Eb')](_0xa3f8)[_0x4f9638(0x1c4,'rf[&')](_0x3ecb25=>{const {statusCode:_0x337548,statusCode:_0x50eb77,headers:_0x2b2e68,body:_0x119347}=_0x3ecb25;_0x33445f(null,{'status':_0x337548,'statusCode':_0x50eb77,'headers':_0x2b2e68,'body':_0x119347},_0x119347);},_0x290e1a=>_0x33445f(_0x290e1a));else{if(this[_0x5e1dac(0x25d)]()){this[_0x5e1dac(0x19c)](_0xa3f8);const {url:_0xe0dae9,..._0x8a8e35}=_0xa3f8;this[_0x5e1dac(0x1a2)]['post'](_0xe0dae9,_0x8a8e35)['then'](_0x4b0e5c=>{const {statusCode:_0x32af98,statusCode:_0x423d3b,headers:_0x3cd9c0,body:_0x5302c0}=_0x4b0e5c;_0x33445f(null,{'status':_0x32af98,'statusCode':_0x423d3b,'headers':_0x3cd9c0,'body':_0x5302c0},_0x5302c0);},_0x15d351=>{const _0x58b6df=_0x4f9638,{message:_0x700a69,response:_0x53f3c3}=_0x15d351;_0x33445f(_0x700a69,_0x53f3c3,_0x53f3c3&&_0x53f3c3[_0x58b6df(0x2a9,'cO@E')]);});}}}}['time'](_0x243c91){const _0x858534=_0x3d2de5,_0x4d9a36=_0x37e28e;let _0x508c10={'M+':new Date()[_0x4d9a36(0x2bd,'cO@E')]()+0x1,'d+':new Date()['getDate'](),'H+':new Date()[_0x4d9a36(0x172,'J*Li')](),'m+':new Date()[_0x4d9a36(0x1fd,'MI[V')](),'s+':new Date()['getSeconds'](),'q+':Math[_0x858534(0x1d6)]((new Date()[_0x858534(0x22f)]()+0x3)/0x3),'S':new Date()[_0x858534(0x1f7)]()};/(y+)/[_0x4d9a36(0x2c2,'WM7T')](_0x243c91)&&(_0x243c91=_0x243c91[_0x858534(0x2b7)](RegExp['$1'],(new Date()[_0x858534(0x2c5)]()+'')[_0x858534(0x20c)](0x4-RegExp['$1'][_0x4d9a36(0x283,'ta1x')])));for(let _0x4e0e55 in _0x508c10)new RegExp('('+_0x4e0e55+')')[_0x858534(0x279)](_0x243c91)&&(_0x243c91=_0x243c91[_0x4d9a36(0x1ab,'BgbY')](RegExp['$1'],0x1==RegExp['$1'][_0x4d9a36(0x1db,'rxLg')]?_0x508c10[_0x4e0e55]:('00'+_0x508c10[_0x4e0e55])[_0x4d9a36(0x28b,'ta1x')]((''+_0x508c10[_0x4e0e55])[_0x4d9a36(0x1d7,'w6m0')])));return _0x243c91;}['msg'](_0x354154=_0x3f85b1,_0x38a8d1='',_0x365413='',_0x49dcaf){const _0x7c077d=_0x3d2de5,_0x4c09bd=_0x37e28e,_0x1f2f33=_0x48d706=>{const _0x336c7d=_0x596b,_0x415e6b=_0x522e;if(!_0x48d706)return _0x48d706;if(_0x415e6b(0x27a)==typeof _0x48d706)return this[_0x415e6b(0x1b8)]()?_0x48d706:this[_0x415e6b(0x19b)]()?{'open-url':_0x48d706}:this[_0x415e6b(0x213)]()?{'url':_0x48d706}:void 0x0;if(_0x336c7d(0x1b1,'uCJT')==typeof _0x48d706){if(this[_0x415e6b(0x1b8)]()){let _0x42ee2c=_0x48d706[_0x415e6b(0x239)]||_0x48d706['url']||_0x48d706[_0x336c7d(0x2d0,'$7MF')],_0x205651=_0x48d706[_0x336c7d(0x2d7,'EZOj')]||_0x48d706[_0x336c7d(0x1bd,'ta1x')];return{'openUrl':_0x42ee2c,'mediaUrl':_0x205651};}if(this[_0x336c7d(0x2d3,'7nm]')]()){let _0xd284b0=_0x48d706[_0x415e6b(0x1ef)]||_0x48d706['url']||_0x48d706['openUrl'],_0x283967=_0x48d706[_0x336c7d(0x224,'t7(j')]||_0x48d706[_0x415e6b(0x193)];return{'open-url':_0xd284b0,'media-url':_0x283967};}if(this['isSurge']()){let _0x2beb09=_0x48d706[_0x336c7d(0x1e5,'FzxG')]||_0x48d706[_0x415e6b(0x239)]||_0x48d706[_0x415e6b(0x1ef)];return{'url':_0x2beb09};}}};this[_0x4c09bd(0x1d3,'a]Eb')]||(this[_0x4c09bd(0x18c,'6rag')]()||this[_0x7c077d(0x1b8)]()?$notification[_0x7c077d(0x282)](_0x354154,_0x38a8d1,_0x365413,_0x1f2f33(_0x49dcaf)):this[_0x7c077d(0x19b)]()&&$notify(_0x354154,_0x38a8d1,_0x365413,_0x1f2f33(_0x49dcaf)));let _0x45b052=['',_0x7c077d(0x26a)];_0x45b052[_0x7c077d(0x227)](_0x354154),_0x38a8d1&&_0x45b052['push'](_0x38a8d1),_0x365413&&_0x45b052[_0x4c09bd(0x188,'1GNS')](_0x365413),console[_0x4c09bd(0x192,'(l7!')](_0x45b052['join']('\x0a')),this[_0x7c077d(0x265)]=this['logs']['concat'](_0x45b052);}[_0x37e28e(0x186,'7nm]')](..._0x2fddae){const _0x4a8ffe=_0x3d2de5,_0x2ab3f1=_0x37e28e;_0x2fddae['length']>0x0&&(this[_0x2ab3f1(0x2cc,'WM7T')]=[...this[_0x4a8ffe(0x265)],..._0x2fddae]),console[_0x2ab3f1(0x274,'$7MF')](_0x2fddae[_0x2ab3f1(0x2d4,'uCJT')](this['logSeparator']));}['logErr'](_0x26ab2b,_0x471511){const _0x35fe6e=_0x3d2de5,_0x23bd0a=_0x37e28e,_0x308f87=!this[_0x23bd0a(0x2c4,'q$yO')]()&&!this[_0x35fe6e(0x19b)]()&&!this[_0x35fe6e(0x1b8)]();_0x308f87?this[_0x35fe6e(0x1aa)]('','❗️'+this[_0x35fe6e(0x251)]+_0x35fe6e(0x2cf),_0x26ab2b['stack']):this[_0x23bd0a(0x24d,'JJpR')]('','❗️'+this[_0x23bd0a(0x19a,'TB@a')]+',\x20错误!',_0x26ab2b);}[_0x3d2de5(0x1c7)](_0x4e8036){return new Promise(_0x588160=>setTimeout(_0x588160,_0x4e8036));}['done'](_0x37b95f={}){const _0x43b565=_0x37e28e,_0xcb43c2=_0x3d2de5,_0x91931=new Date()[_0xcb43c2(0x275)](),_0x52540b=(_0x91931-this['startTime'])/0x3e8;this[_0x43b565(0x203,'MI[V')]('','🔔'+this[_0xcb43c2(0x251)]+_0xcb43c2(0x207)+_0x52540b+'\x20秒'),this[_0x43b565(0x270,'uCJT')](),(this['isSurge']()||this['isQuanX']()||this[_0xcb43c2(0x1b8)]())&&$done(_0x37b95f);}}(_0x3f85b1,_0x49fb87);}
