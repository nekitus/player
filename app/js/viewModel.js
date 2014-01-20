App.ListViewModel = function () {
    var self = this;

    self.tracks = ko.observableArray([]);

    self.progress = ko.observable(0);
    self.stage = ko.observable(true);
    self.muted = ko.observable(false);

    self.next = function (index) {
        var nextTrack = self.tracks()[index];
        if (nextTrack) {
            nextTrack.change()
        } else {
            self.tracks()[0].change()
        }
    };
    self.mute = function () {
        if(self.muted()){
            self.muted(false)
        } else {
            self.muted(true)
        }
        App.player.mute(self.muted())
    };
    self.play = function () {
        self.stage(false);
        var firstTrack = this.tracks()[0];
        if (!App.player.play()) firstTrack.change()
    };
    self.pause = function () {
        self.stage(true);
        App.player.pause()
    };
    self.moveTo = function (event) {
        App.player.changeTime(event.progress());
    };
    self.add = function (data) {
        this.tracks.push(new App.Track(data));
    }
};