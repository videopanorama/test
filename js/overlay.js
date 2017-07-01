
$(document).ready(function(){
        var h = 195;
        var l = h;
        var r = h;
        var b = h;
        $('.overlay:eq(0)').css({
            background: 'red',
            top: 0,
            left: 0,
            width: '100%',
            height: h
        });
        $('.overlay:eq(1)').css({
            background:'green',
            top: 0,
            left: 0,
            width: l,
            height: '100%'
        });
        $('.overlay:eq(2)').css({
            background:'blue',
            bottom: 0,
            right: 0,
            width: r,
            height: '100%'
        });
        $('.overlay:eq(3)').css({
            bottom: 0,
            right: 0,
            width: '100%',
            height: b
        });
});