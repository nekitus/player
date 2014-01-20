App.Track = function(data){
    var self = this;
    self.name = data.name;
    self.fileName = data.fileName;
    self.index = data.index;
    self.background = ko.observable(false);

    self.change = function(){
        App.list.stage(false);
        App.list.tracks().forEach(function(item){
             item.background(false)
        });
        self.background(true);
        App.player.change(self.fileName, self.index);
    };
};