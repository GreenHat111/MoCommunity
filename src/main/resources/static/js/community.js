
function post() {
    var questionId= $("#question_id").val();
    var comment_content = $("#comment_content").val();
    if (comment_content == "") {
        alert("输入内容不能为空");
        return;
    }
    comment(questionId,1,comment_content);
    location.reload()
}

function subComment(e) {
    var commentId  = e.getAttribute("data-id");
    var content = $("#input-"+commentId).val();
    comment(commentId,2,content);
    location.reload();
}

// 打开二级评论
function collapseComments(e) {
    var id = e.getAttribute("data-id");
    var comment = $("#comment-"+id);
    var collapse = e.getAttribute("data-collapse");
    if (collapse != null && collapse=="in") {
        comment.removeClass("in");
        e.removeAttribute("data-collapse");
        e.classList.remove("active");
    } else {
        var subComment = $("#comment-"+id);
        if (subComment.children().length != 1) {
            comment.addClass("in");
            e.setAttribute("data-collapse","in");
            e.classList.add("active");
        }else {
            $.getJSON("/comment/" + id, function (data) {
                $.each(data.data, function (key, comment) {
                    var mediaLeftElement = $("<div/>", {
                        "class": "media-left"
                    }).append($("<img/>", {
                        "class": "media-object head_img img-rounded",
                        "src": comment.user.headImg
                    }));

                    var mediaBodyElement = $("<div/>", {
                        "class": "media-body"
                    }).append($("<h2/>", {
                        "class": "media-heading comment-head",
                        "html": comment.user.name
                    })).append($("<div/>", {
                        "class":"comment-content",
                        "html": comment.comment.comment
                    }));
                    var mediaBottomElement = $("<div/>", {
                        "class": "media-bottom"
                    }).append($("<span/>", {
                        "class": "pull-right",
                        "style": "margin-right: 50px;",
                        "html": moment(comment.gmtCreate).format('YYYY-MM-DD')
                    }));

                    var mediaElement = $("<div/>", {
                        "class": "media"
                    }).append(mediaLeftElement).append(mediaBodyElement).append(mediaBottomElement);

                    var commentElement = $("<div/>", {
                        "class": "col-lg-12 col-md-12 col-sm-12 col-xs-12 comments"
                    }).append(mediaElement);

                    subComment.prepend(commentElement);
                });
                //展开二级评论
                comment.addClass("in");
                // 标记二级评论展开状态
                e.setAttribute("data-collapse", "in");
                e.classList.add("active");
            });
        }

    }
}


function comment(targetId,type,content) {

    if (content == "") {
        alert("输入内容不能为空");
        return;
    }
    $.ajax({
        type:"POST",
        url:"/comment",
        contentType:"application/json",
        data:JSON.stringify({
            "parentId":targetId,
            "comment":content,
            "type":type
        }),
        success:function (response) {
            if (response.code == 200) {
                $("#comment_section").hide();
            } else {
                if (response.code == 2003) {
                    // 未登录 跳转到首页
                    var isAccept = confirm(response.message);
                    if (isAccept) {
                        window.open("https://github.com/login/oauth/authorize?client_id=Iv1.c17fb30c27305fb1&redirect_url=http://localhost:8080/callback&scope=user&state=1");
                        window.localStorage.setItem("closable", true);
                    }
                } else {
                    alert(response.message)
                }
            }
        },
        dataType:"json"
    });
}
