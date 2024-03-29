package cn.sl.mapper;

import cn.sl.domain.Comment;
import cn.sl.domain.Question;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface QuestionMapper {

    @Insert("insert into question(title,description,gmt_create,gmt_modified,creator,comment_count,view_count,like_count" +
            ",tag) values(#{title},#{description},#{gmtCreate},#{gmtModified},#{creator},#{commentCount}" +
            ",#{viewCount},#{likeCount},#{tag})")
    void create(Question question);

    @Select("select * from question")
//    @Results({
//            @Result(column = "gmt_create",property = "gmtCreate"),
//            @Result(column = "gmt_modified",property = "gmtModified"),
//            @Result(column = "comment_count", property = "commentCount"),
//            @Result(column = "view_count", property = "viewCount"),
//            @Result(column = "like_count", property = "likeCount")
//    })
    List<Question> list();

    @Select("select * from question order by gmt_create desc limit #{page},#{size}")
    List<Question> paginationList(@Param("page") Integer page,@Param("size") Integer size);

    @Select("select * from question where tag regexp #{search} or title regexp #{search} order by gmt_create desc limit #{page},#{size}")
    List<Question> paginationSearchList(@Param("search") String search,@Param("page") Integer page,@Param("size") Integer size);

    @Select("select * from question where creator=#{id} order by gmt_create desc limit #{page},#{size}")
    List<Question> paginationWithIdList(@Param("id") int id,@Param("page") int page,@Param("size") int size);

    @Select("select count(1) from question where creator=#{userId}")
    int count(Integer userId);

    @Select("select count(1) from question")
    int countAll();

    @Select("select * from question where id=#{id}")
    Question getById(Long id);

    @Select("select * from question where creator=#{id}")
    Question getQuestionWithCreator(Integer id);


    @Update("update question set title=#{title},description=#{description}," +
            "gmt_create=#{gmtCreate},gmt_modified=#{gmtModified}," +
            "creator=#{creator},comment_count=#{commentCount}," +
            "view_count=#{viewCount},like_count=#{likeCount},tag=#{tag} where id=#{id}")
    int updateQuestion(Question question);

    @Update("update question set view_count=view_count+1 where id=#{id}")
    void addViewCount(Long id);

    @Select("select * from question where id=#{parentId}")
    Question selectByPrimaryKey(Long parentId);

    @Update("update question set comment_count=comment_count+1 where id=#{id}")
    void updateCommentCount(Long id);

    @Select("select * from question where id!=#{id} and tag regexp #{tags}")
    List<Question> selectRelated(@Param("id") Long id, @Param("tags") String tags);

    @Select("select count(1) from question where tag regexp #{search} or title regexp #{search}")
    int countSearchAll(String search);
}
