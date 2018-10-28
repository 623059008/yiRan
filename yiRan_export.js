/**
 *函数说明
 *函数名称：yiRan
 *函数作者：yika工作室
 *时间：16.07.23
 *函数用法var ran=yiRan(num1,num2,accuracy,mode,percent);
 一、省略用法
 *1.无参数,返回0-1的随机小数,精度0.1,相当于num1=0,num2=1,accuracy=0.1,mode=0,percent={}.
 *2.省略用法,只有一个参数,返回num1---num1+1的随机整数,相当于num2=num1+1,accuracy=1,mode=0,percent={}.
 *3.省略用法,只有两个参数,返回num1---num2的连续区间的随机整数,相当于accuracy=1,mode=0,percent={}.
 *4.省略用法,只有三个参数,根据精度返回num1---num2的随机数,相当于mode=0,percent={}.
 *5.省略用法,只有四个参数,mode!=0时报错,缺少参数percent,mode=0时按照模式用法进行
 二、模式用法
 *1.模式用法,mode=0,按照精度返回num1---num2的随机数.可以缺少percent参数
 *2.模式用法,mode=1,按照自定义概率、精度返回num1---num2的随机数.需要percent参数
 *
 *   percent参数数据类型为object,
 *	 参数格式为{'num1':概率,'numl+accuracy':概率~~~~~~~'num2':概率}
 *   要求概率和为1,否则报错,参数不规范
 *   注意num1和num2和accuracy的关系,num2>num1,num2=num1+k*accuracy(k属于Z),否则报错：参数不规范
 *
 *3.模式用法,mode=2,按照自定义概率、自定义数组返回的随机数.参数num1、num2、accuracy无效,需要填写
 *
 *   percent参数数据类型是object
 *   参数格式为{'自定义数字':'概率'}
 *   自定义数字不限,要求在-2^32+1---2^32之间,概率和为1,否则报错,参数不规范
 */
;
(function(_I, _F, _S) {
  this.yiRan = function(_A, _Q, _e, _k, _i) {
    var _wei = function(_v) {
      var _a = _v,
        _b;
      var _c = _a.indexOf(".");
      if (_c != -1) {
        var _d = _a.substring(_c + 1, _a.length);
        _b = _d.length
      } else {
        _b = "+" + _a.length
      }
      return _b
    };
    var _p = "number",
      _lsl = "object";
    var _ee = function() {
      if (this._k == 0) {
        if ((typeof this._A != _p) || (typeof this._Q != _p)) {
          throw ("error:001");
        }
        if (typeof this._e != _p) throw ("error:002");
        if (this._Q < this._A) throw ("error:004");
        var _t = (this._Q - this._A) / this._e;
        if (_I(_t) != _t) throw ("error:005");
        if ((typeof this._i != _lsl)) throw ("error:006");
      } else if (this._k == 1) {
        if ((typeof this._A != _p) || (typeof this._Q != _p)) {
          throw ("error:001");
        }
        if (typeof this._e != _p || this._e > _Q) throw ("error:002");
        if (this._Q < this._A) throw ("error:004");
        var _t = (this._Q - this._A) / this._e;
        if (_I(_t) != _t) throw ("error:005");
        if ((typeof this._i != _lsl)) throw ("error:006");
        var aG = _S(_wei(_S(this._e)));
        var _Re = 0;
        var _h = true;
        if (aG.indexOf("+") == -1) {
          for (var _x = this._A; _x <= this._Q; _x += _F(this._e)) {
            _x = _F(_x);
            (_x != 0) ? _x = _x.toFixed(aG): _x = _I(_x);
            if (typeof this._i[_S(_x)] != _p) {
              _h = false
            } else {
              _Re = _Re + this._i[_S(_x)]
            }
            _x = _F(_x)
          }
        } else {
          for (var _x = this._A; _x <= this._Q; _x += _I(this._e)) {
            if (typeof this._i[_x] != _p) {
              _h = false
            } else {
              _Re = _Re + this._i[_S(_x)]
            }
            _x = _I(_x)
          }
        }
        var _di = _Re - 1;
        _di = (_di >= 0) ? _di : -_di;
        _h = (_di < 0.1) ? _h : false;
        if (!_h) throw ("error:007");
      } else if (this._k == 2) {
        if ((typeof this._i != _lsl)) throw ("error:006");
        var _Re = 0;
        var _h = true;
        for (var n in this._i) {
          if (typeof this._i[n] != _p) {
            _h = false
          } else {
            _Re = _Re + this._i[n]
          }
        }
        var _di = _Re - 1;
        _di = (_di >= 0) ? _di : -_di;
        _h = (_di < 0.1) ? _h : false;
        if (!_h) throw ("error:008");
      } else {
        throw ("error:003.");
      }
    };
    switch (arguments.length) {
      case 0:
        var _A = 0,
          _Q = 1,
          _e = 0.1,
          _k = 0,
          _i = {};
        this._A = _A;
        this._Q = _Q;
        this._e = _e;
        this._k = _k;
        this._i = _i;
        break;
      case 1:
        this._A = _A;
        var _Q = this._A + 1,
          _e = 1,
          _k = 0,
          _i = {};
        this._Q = _Q;
        this._e = _e;
        this._k = _k;
        this._i = _i;
        break;
      case 2:
        this._A = _A;
        this._Q = _Q;
        var _e = 1,
          _k = 0,
          _i = {};
        this._e = _e;
        this._k = _k;
        this._i = _i;
        break;
      case 3:
        this._A = _A;
        this._Q = _Q;
        this._e = _e;
        var _k = 0,
          _i = {};
        this._k = _k;
        this._i = _i;
        break;
      case 4:
        this._A = _A;
        this._Q = _Q;
        this._e = _e;
        this._k = _k;
        var _i = {};
        this._i = _i;
        break;
      case 5:
        this._A = _A;
        this._Q = _Q;
        this._e = _e;
        this._k = _k;
        this._i = _i;
        break
    }
    _ee();
    var aG = _S(_wei(_S(this._e)));
    if (this._k == 0) {
      aG = _S(aG);
      if (aG.indexOf("+") == -1) {
        aG = _I(aG);
        var aF = (1 / ((this._Q - this._A) / this._e + 1)).toFixed(_I(aG + 10));
        for (var _x = this._A; _x <= this._Q; _x += _F(this._e)) {
          if (_x != 0) {
            _x = _x.toFixed(aG)
          }
          this._i[_S(_x)] = _S(aF);
          _x = _F(_x)
        }
      } else {
        aG = 1;
        var aF = (1 / ((this._Q - this._A) / this._e + 1)).toFixed(_I(aG + 10));
        for (var _x = this._A; _x <= this._Q; _x += _I(this._e)) {
          this._i[_S(_x)] = _S(aF);
          _x = _I(_x)
        }
        aG = "+1";
      }
    }
    if (this._k != 2) {
      aG = _S(aG);
      if (aG.indexOf("+") == -1) {
        aG = _I(aG);
        var _pl = new Array();
        var _z = 0;
        _pl[(this._A).toFixed(aG)] = this._i[(this._A).toFixed(aG)];
        for (var _x = this._A + this._e; _x <= this._Q; _x += _F(this._e)) {
          _x = _F(_x);
          _z = _F(_z);
          (_x != 0) ? _x = _x.toFixed(aG): _x = _x;
          _z = _x - this._e;
          (_z != 0) ? _z = _z.toFixed(aG): _z = _z;
          _pl[_S(_x)] = _F(_pl[_S(_z)]) + _F(this._i[_S(_x)]);
          _x = _F(_x)
        }
        _x = _F(_F(_z) + _F(this._e));
        (_x != 0) ? _x = _x.toFixed(aG): _x = _x;
        _pl[_S(_x)] = 1;
        var aH = Math.random();
        for (var aQ in _pl) {
          if (aH <= _pl[_S(aQ)]) return aQ
        }
      } else {
        aG = 1;
        var _pl = new Array();
        var _z = 0;
        _pl[this._A] = this._i[this._A];
        for (var _x = this._A + this._e; _x <= this._Q; _x += _I(this._e)) {
          _z = _x - this._e;
          _x = _I(_x);
          _z = _I(_z);
          _pl[_S(_x)] = _F(_pl[_S(_z)]) + _F(this._i[_S(_x)]);
          _x = _I(_x)
        }
        _x = _I(_I(_z) + _I(this._e));
        _pl[_S(_x)] = 1;
        var aH = Math.random();
        for (var aQ in _pl) {
          if (aH <= _pl[_S(aQ)]) return _S(aQ)
        }
      }
    }
    if (this._k == 2) {
      var _r = {};
      var _ke = {};
      var _lp = 0;
      for (var nn in _i) {
        _lp++;
        _ke[_S(_lp)] = nn;
        _r[_S(_lp)] = _i[nn]
      }
      var _lQ = yiRan(1, _lp, 1, 1, _r);
      return _ke[_lQ]
    }
  }
})(parseInt, parseFloat, String);
module.exports = this;