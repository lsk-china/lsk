function stopBgmListener(){
	$(".stop-bgm").click(function(){
		var player = $(".bgm")[0];
		player.pause();
	});
}
function startBgm(){
	if(window.href.endsWith("?bgm=yes")){
		var player = $(".bgm")[0];
		player.play();
	}
}
function playBgmListener(){
        $(".play-bgm").click(function(){
                var player = $(".bgm")[0];
                player.pause();
        });
}
function load(){
	playBgmListener();
	stopBgmListener();
	startBgm();
}
window.addEventListener("load",load,true);
