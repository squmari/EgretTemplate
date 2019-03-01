// ゲームで便利に使えるUtilityクラス
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Util = (function () {
    function Util() {
    }
    Util.init = function (eui) {
        this.height = eui.stage.stageHeight;
        this.width = eui.stage.stageWidth;
    };
    Util.random = function (min, max) {
        return min + Math.random() * (max - min);
    };
    Util.randomInt = function (min, max) {
        return Math.floor(min + Math.random() * (max + 0.999 - min));
    };
    Util.clamp = function (value, min, max) {
        if (value < min)
            value = min;
        if (value > max)
            value = max;
        return value;
    };
    Util.color = function (r, g, b) {
        return (Math.floor(r * 0xff) * 0x010000 + Math.floor(g * 0xff) * 0x0100 + Math.floor(b * 0xff));
    };
    Util.colorLerp = function (c0, c1, rate01) {
        var rate10 = 1 - rate01;
        var color = (((c0 & 0xff0000) * rate10 + (c1 & 0xff0000) * rate01) & 0xff0000) +
            (((c0 & 0xff00) * rate10 + (c1 & 0xff00) * rate01) & 0xff00) +
            (((c0 & 0xff) * rate10 + (c1 & 0xff) * rate01) & 0xff);
        return color;
    };
    Util.newText = function (x, y, text, size, ratio, color, font, stColor, stSize) {
        var tf = new egret.TextField();
        tf.x = x || 0;
        tf.y = y || 0;
        tf.scaleX = ratio || 1;
        tf.scaleY = ratio || 1;
        tf.textFlow = [
            { text: text,
                style: {
                    "textColor": color || 0x000000, "size": size || 1, "fontFamily": font || "Meiryo", "strokeColor": stColor || 0x000000, "stroke": stSize || 0,
                }
            }
        ];
        return tf;
    };
    return Util;
}());
__reflect(Util.prototype, "Util");
//# sourceMappingURL=Util.js.map