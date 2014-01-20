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
//window.onerror = function(e, url, line){
//  alert('onerror: ' + e + ' URL:' + url + ' Line:' + line);
//  mailError('onerror: ' + e + ' URL:' + url + ' Line:' + line);
//  console.error('\nLine ' + line + ':');
//  setTimeout(function(){retry();}, 100); //mainly useful in content scripts for extensions,
//  return true;
//}