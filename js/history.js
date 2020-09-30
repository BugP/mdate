$(function() {

    /* data-hover="owl" */
    if ($('[data-hover="owl"]').length && $('[data-hover="owl"]').is(":visible")) {
        var $allDropdowns = $();
        $allDropdowns = $allDropdowns.add($('[data-hover="owl"]').parent());
        $('[data-hover="owl"]').each(function() {
            var $this = $(this),
            $parent = $this.parent(),
            delay = 200,
            timeoutHover;
            $parent.hover(function() {
                window.clearTimeout(timeoutHover);
                $allDropdowns.removeClass('open');
                if (!$parent.hasClass('open')) {
                    $parent.addClass('open');
                }
            },
            function() {
                timeoutHover = window.setTimeout(function() {
                    $parent.removeClass('open');
                },
                delay);
            });
        });
    }

    /* detail-intro-more */
    $("#detail-intro-more").on('click',
    function(event) {
        event.preventDefault();
        var that = $(this),
        selector = that.parent("li");
        if (selector.hasClass("owl")) {
            selector.removeClass("owl");
            that.text("详情");
        } else {
            selector.addClass("owl");
            that.text("收起");
        }
    });

    /*history-get*/
    if($(".history-record-get").length){
        $.get(cms.root+'index.php?g=home&m=record&a=vod&sid=1', function(data){
            if(data == ''){
                data = '<strong>暂无观看记录</strong>';
            }
            $(".history-record-get").html(data);
        });
    }
});