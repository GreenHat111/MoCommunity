package cn.sl.controller;

import cn.sl.domain.Comment;
import cn.sl.domain.User;
import cn.sl.dto.CommentCreateDto;
import cn.sl.dto.CommentDto;
import cn.sl.dto.ResultDto;
import cn.sl.enums.CommentTypeEnum;
import cn.sl.exception.CustomErrorCode;
import cn.sl.exception.CustomizeException;
import cn.sl.mapper.CommentMapper;
import cn.sl.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
@Controller
public class CommentController {

    @Autowired
    private CommentService commentService;


    @ResponseBody
    @PostMapping("/comment")
    public Object post(@RequestBody CommentCreateDto commentDto,
                       HttpServletRequest request) {
        User user = (User) request.getSession().getAttribute("user");
        if (user == null) {
            return ResultDto.errorOf(CustomErrorCode.NO_LOGIN);
        }
        if (commentDto == null || commentDto.getComment() == null || "".equals(commentDto.getComment())) {
            return ResultDto.errorOf(CustomErrorCode.COMMENT_IS_EMPTY);
        }
        Comment comment = new Comment();
        comment.setParentId(commentDto.getParentId());
        comment.setType(commentDto.getType());
        comment.setComment(commentDto.getComment());
        comment.setGmtCreate(System.currentTimeMillis());
        comment.setGmtModified(comment.getGmtCreate());
        comment.setCommentUser(user.getId());
        commentService.create(comment);
        return ResultDto.okOf();
    }

    @ResponseBody
    @GetMapping("/comment/{id}")
    public ResultDto comments(@PathVariable(name = "id") Integer id) {
        List<CommentDto> commentDtoList = commentService.listByTargetId(id, CommentTypeEnum.COMMENT.getType());
        return ResultDto.okOf(commentDtoList);
    }

}
