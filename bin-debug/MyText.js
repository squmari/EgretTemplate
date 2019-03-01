var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MyText = (function (_super) {
    __extends(MyText, _super);
    /*    public myTextField : egret.TextField | null = null;
        public myText : string | null = null;
    
        public x : number|null = 0;
        public y : number|null = 0;
        public size : number|null = 1;
        public ratio : number|null = 1;
        public color : number|null = 0x000000;
        public stColor : number|null =0x0000000;
        public stSize : number|null = 0;
        public font : string|null = "Meiryo";
        public text : string|null = "";*/
    function MyText(x, y, text, size, ratio, color, font, stColor, stSize) {
        var _this = _super.call(this) || this;
        _this.newText(x, y, text, size, ratio, color, font, stColor, stSize);
        return _this;
        /*        this.x = x;
                this.y = y;
                this.text = text;
                this.size = size;
                this.ratio = ratio;
                this.color= color;
                this.font = font;
                this.stColor = stColor;
                this.stSize = stSize;*/
    }
    MyText.prototype.newText = function (x, y, text, size, ratio, color, font, stColor, stSize) {
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
        //GameObject.display.addChild(tf);
        return tf;
    };
    /*    protected updateText(text:string): void{
    
            this.myTextField.textFlow = <Array<egret.ITextElement>>[
                {text: text,
                    style: {
                        "textColor": this.color || 0x000000, "size": this.size ||1, "fontFamily": this.font ||"Meiryo", "strokeColor": this.stColor || 0x000000, "stroke": this.stSize || 0,
                    }
                }
            ];
            GameObject.display.addChild(this.myTextField);
        }*/
    MyText.prototype.updateContent = function () { };
    return MyText;
}(GameObject));
__reflect(MyText.prototype, "MyText");
//# sourceMappingURL=MyText.js.map