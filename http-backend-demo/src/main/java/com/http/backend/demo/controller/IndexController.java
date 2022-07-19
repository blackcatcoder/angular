package com.http.backend.demo.controller;

import com.http.backend.demo.model.Post;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping
@CrossOrigin
public class IndexController {

    private static final Logger LOGGER = LoggerFactory.getLogger(IndexController.class);

    List<Post> posts = new ArrayList<>();

    @GetMapping
    public List<Post> getPosts(){
      //  int x = 10;
        //int i = x / 0;

        try{
            Thread.sleep(1000);
        }catch(Exception ex){

        }
        return posts;
    }

    @PostMapping
    public Post addPost(@RequestBody Post post){
      //  int x = 10;
       // int i = x / 0;
        LOGGER.info(post.toString());
        this.posts.add(post);
        return post;
    }

    @DeleteMapping("/{id}")
    public void deletePost(String id){
        posts = posts.stream().filter(post -> {
            return !post.getId().equals(id);
        }).collect(Collectors.toList());
    }

    @DeleteMapping
    public void deletePosts(){
        this.posts = new ArrayList<>();
    }


}
