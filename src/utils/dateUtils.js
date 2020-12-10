var timer = "";
export function daojishi(that) {
  //获取当前时间
  var nowTime = new Date();
  //获取活动结束时间，这里注意，月份是0-11
  //比较活动结束日期和当前时间
  var EndTime = "2020/12/10 15:00:00";
  var chaTime = Date.parse(EndTime) - nowTime.getTime();

  var nMS = 0;
  if (chaTime > 0) {
    nMS = chaTime;
  }
  if (chaTime == 0) {
    // alert("活动时间到");
    clearInterval(timer);
    timer = null;
    return;
  } else if (chaTime < 0) {
    // alert("活动已过期");
    clearInterval(timer);
    timer = null;
    return;
  }

  //floor() 方法执行的是向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数。
  var nD = Math.floor(nMS / (1000 * 60 * 60) / 24); //天
  var nH = Math.floor(nMS / (1000 * 60 * 60)) % 24; //时
  var nM = Math.floor(nMS / (1000 * 60)) % 60; //分
  var nS = Math.floor(nMS / 1000) % 60; //秒

  if (nH < 10) {
    nH = "0" + nH;
  }
  if (nM < 10) {
    nM = "0" + nM;
  }
  if (nS < 10) {
    nS = "0" + nS;
  }
  that.nD = nD;
  that.nH = nH;
  that.nM = nM;
  that.nS = nS;
  //定时器
  timer = setTimeout(function() {
    daojishi(that, EndTime);
  }, 1000);
}
