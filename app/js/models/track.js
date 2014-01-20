App.Track = function (data) {
    var self = this;
    self.name = data.name;
    self.fileName = data.fileName;
    self.index = data.index;
    self.background = ko.observable(false);
    self.id = "sample_" + self.index;

//    self._audio = $('<audio data-bind="event: {ended: onended()}" id="sample_' + self.index + '"  preload="auto" loop="loop" autoload></audio>')[0];

//    $(this._audio).attr('src', src);
//    $(this._audio)
//        .appendTo(this.cnt)


    self.onended = function () {
            console.log('sdf')
            App.list.next(self.index + 1)
    };
    self.change = function () {
        App.list.stage(false);
        App.list.tracks().forEach(function (item) {
            item.background(false)
        });
        self.background(true);
        App.player.change(self.fileName, self.index);
    };
};