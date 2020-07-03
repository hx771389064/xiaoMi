class Banner {
    constructor(newImg, newLi) {
        this.index = 0;
        this.oImg = newImg;
        this.oLi = newLi;
        this.oImg.style.backgroundImage = "url(../img/"+ this.index +".jpg)";
        this.oLi[this.index].style.backgroundColor = "red";
    }

    //设置Div的背景图片
    setImgBackground() {
        this.oImg.style.backgroundImage = "url(../img/" + this.index + ".jpg)";
    }

    //设置li的颜色
    setOligBackgroundColor() {
        for (let i = 0; i < this.oLi.length; i++) {
            if (i == this.index) {
                this.oLi[i].style.backgroundColor = "red";
            } else {
                this.oLi[i].style.backgroundColor = "black";
            }
        }
    }

    prev() {
        this.index--;

        if (this.index == -1) {
            this.index = this.oLi.length - 1;
        }

        this.setImgBackground();
        this.setOligBackgroundColor();
    }

    next() {
        this.index++;

        if (this.index == this.oLi.length) {
            this.index = 0;
        }
        this.setImgBackground();
        this.setOligBackgroundColor();
    }

    eventBind() {
        let oPrev = document.getElementById("btn-previous");
        let oNext = document.getElementById("btn-next");
        let that = this;
        oPrev.onclick = function () {
            that.prev();
        }
        oNext.onclick = function () {
            that.next();
        }
    }

    eventBindLi() {
        let that = this;
        for (let i = 0; i < this.oLi.length; i++) {
            this.oLi[i].onclick = function () {
                that.index = i;
                that.setImgBackground();
                that.setOligBackgroundColor();
            }
        }
    }
}

