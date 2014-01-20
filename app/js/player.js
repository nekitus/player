App.Player = function (cfg) {
    var self = this;

    this.cfg = cfg;
    this._audio = null;
    this.cnt = this.cfg.container;

    var timerInterval = this._listenTimer(1000);

    return this
};
App.Player.prototype = {
    changeTime: function (time) {
        if (this._audio && this._audio.currentTime ) this._audio.currentTime = time * this._audio.duration / 100;
    },
    mute: function (bool) {
        if(this._audio) this._audio.muted = bool;
    },
    change: function (fileName, index) {
        var self = this;
        var src = fileName;
        if (this._audio) {
            this._audio.pause();
            self.changeTime(0);
        }

        this._audio = $('#player_1 #sample_' + index)[0];

        if (this._audio) {
            this._audio.pause();
        } else {
            this._audio = $('<audio id="sample_' + index + '"  preload="auto" loop="loop" autoload></audio>')[0];

            self.mute(App.list.muted())

            $(this._audio).attr('src', src)
            $(this._audio)
                .appendTo(this.cnt)
        }
        this._audio.play();

        $(self._audio).bind('ended', function () {
            App.list.next(index + 1)
        });

    },
    play: function () {
        if (!this._audio) return;
        if (this._audio) {
            this._audio.play();
            return true
        } else {
            return false
        }
    },
    pause: function () {
        if (!this._audio) return;
        this._audio.pause();
    },
    _listenTimer: function (duration) {
        var self = this;

        return setInterval(function () {
            if (self._audio) {
                self.cfg.timeupdate((self._audio.currentTime / self._audio.duration * 100) || 0)
                if (self._audio.duration - self._audio.currentTime < 0.9) {
                    $(self._audio).trigger('ended')
                }
            }
        }, duration);
    }
};