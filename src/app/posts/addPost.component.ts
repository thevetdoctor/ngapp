import { Component } from "@angular/core";

@Component({
    templateUrl: './addPost.component.html',
    selector: 'app-addpost'
})
export class AddPost {
    name = ''
    post = ''
    newPost = ''
    onSubmitPost () {
        if(!this.name || !this.post) return alert('Please fill in missing inputs');
        this.newPost = this.name + 'just sent a post' + this.post;
        alert(this.newPost);
        return;
    }
}