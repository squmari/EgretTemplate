// UnityのGameObjectライクなタスク管理クラス
//  update()に毎フレームの処理を書く
//  オブジェクトを破棄するときはdestroy()を呼ぶ
//  破棄のときに後処理が必要なら、onDestroy()に記述
//  生成時の初期化はUnityと違い、constructor()を使う（引数を渡せる）
//  シーンを切り替えたい場合は transitにシーンロード関数を設定（全オブジェクトを破棄してからtransitを実行）
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameObject = (function () {
    function GameObject() {
        this.shape = null;
        this.deleteFlag = false;
        GameObject.objects.push(this);
    }
    GameObject.initial = function (displayObjectContainer) {
        GameObject.objects = [];
        GameObject.display = displayObjectContainer;
    };
    GameObject.update = function () {
        GameObject.objects.forEach(function (obj) { return obj.updateContent(); });
    };
    GameObject.dispose = function () {
        GameObject.objects = GameObject.objects.filter(function (obj) {
            obj.destroy();
            obj.delete();
            return false;
        });
    };
    GameObject.prototype.destroy = function () { this.deleteFlag = true; };
    GameObject.prototype.onDestroy = function () { };
    GameObject.prototype.delete = function () {
        this.onDestroy();
        if (this.shape) {
            GameObject.display.removeChild(this.shape);
            this.shape = null;
        }
    };
    GameObject.objects = [];
    return GameObject;
}());
__reflect(GameObject.prototype, "GameObject");
//# sourceMappingURL=GameObject.js.map