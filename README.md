## 默社区
[ **github文档**](https://developer.github.com/apps/building-github-apps/creating-a-github-app/)
## sql脚本
```sql
create table `user`(
id int auto_increment primary key ,
name varchar (100),
account_id varchar (100),
gmt_create bigint,
gmt_modified bigint,
);

create table `question`(
`id` int primary key auto_increment,
`title` varchar(50),
`description` text,
`gmt_create` bigint comment "创建时间",
`gmt_modified` bigint comment "修改时间",
`creator` int comment "作者",
`comment_count` int default 0 ,
`view_count` int default 0,
`like_count` int default 0,
`tag` varchar(250) comment "标签"
);

```

## 此项目出现的错误
##### 1.org.apache.ibatis.binding.BindingException: Parameter '' not found. Available parameters are [arg1,
    在mapper中参数过多 需要加入@Param注解 
    @Select("select * from question limit #{page},#{size}")
    List<Question> paginationList(@Param("page") Integer page,@Param("size") Integer size);