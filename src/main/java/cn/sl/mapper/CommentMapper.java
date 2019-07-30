package cn.sl.mapper;

import cn.sl.domain.Comment;
import cn.sl.domain.Question;
import cn.sl.dto.CommentDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CommentMapper {
    @Insert("insert into comment(parent_id,type,comment_user,gmt_create,gmt_modified,like_count,comment) " +
            " values(#{parentId},#{type},#{commentUser},#{gmtCreate},#{gmtModified},#{likeCount},#{comment})")
    int create(Comment comment);

    @Select("select * from comment where id = #{parentId}")
    Comment selectByPrimaryKey(Integer parentId);

    @Select("select * from comment where parent_id=#{id} and type=#{type}")
    List<Comment> selectByQuestionId(@Param("id") Integer id, @Param("type") Integer type);
}
