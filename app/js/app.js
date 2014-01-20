$(function () {

    App.list = new App.ListViewModel();
    App.player = new App.Player({
        container: $("#player_1"),
        ended: App.list.next,
        timeupdate: App.list.progress
    });

    tracksData.tracks.forEach(function(item, index){
        item.index = index;
        App.list.add(item);
    });

    ko.applyBindings(App.list);
});