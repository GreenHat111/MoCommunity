## 默社区
[ **github文档**](https://developer.github.com/apps/building-github-apps/creating-a-github-app/)<br />
[**网页插件postman**](https://chrome.google.com/webstore/detail/tabbed-postman-rest-clien/coohjcphdfgbiolnekdpbcijmhambjff)<br />
[**Markdown editor插件**](https://pandao.github.io/editor.md/#download)
## sql脚本
```sql
create table `user`(
`id` int auto_increment primary key ,
`name` varchar (100),
`token` char(36),
`account_id` varchar (100),
`gmt_create` bigint,
`gmt_modified` bigint,
`bio` varchar (256),
`head_img` varchar (100)
);
// 增加字段 不止通过github上登录 同样也可以自己注册登录
// 需要增加 邮箱 密码(密码通过加密的方式存储)
alter table `user` add `mail` varchar (256);
alter table `user` add `password_md5` varchar (256);


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

create table `comment`(
`id` bigint primary key auto_increment,
`parent_id` bigint not null,
`type` int comment "父类类型",
`comment_user` int not null comment "评论人ID",
`gmt_create` bigint comment "创建时间",
`gmt_modified` bigint comment "更新时间",
`like_count` bigint default 0 comment "点赞数",
`comment` varchar (1024) comment "评论"
);
// 通知信息的表
create table `notification`(
`id` bigint auto_increment primary key ,
`notify_user` bigint not null,
`receive_user` bigint not null,
`outer` bigint not null,
`type` int not null comment "通知类型",
`gmt_create` bigint not null,
`status` int default 0
);
alter table notification add `notifier_name` varchar(100);
alter table notification add `outer_title` varchar(256);

```

## 此项目出现的错误
####   1.org.apache.ibatis.binding.BindingException: Parameter '' not found. Available parameters are [arg1,       
        在mapper中参数过多 需要加入@Param注解 
        @Select("select * from question limit #{page},#{size}")
        List<Question> paginationList(@Param("page") Integer page,@Param("size") Integer size);
####   2.interceptor拦截器中exclude失效
        应该取消@EnableWebMvc注解
####   3. 使用ajax向后端发送post请求
        JSON parse error: Unrecognized token 'parentId': was expecting ('true', 'false' or 'null'); nested exception is com.fasterxml.jackson.core.JsonParseException: Unrecognized token 'parentId': was expecting ('true', 'false' or 'null')
        at [Source: (PushbackInputStream); line: 1, column: 10]
        解决方法：JSON.stringify序列法JSON 将json转化成字符串
        JSON.stringify({
                      "parentId":questionId,
                      "comment":comment_content,
                      "type":1
                  })
## IDEA 使用技巧
####    1.用alt按住鼠标左键就能同时操作多列