<template>
  <div>
    <h2>Create a Post</h2>
    <div class="Neon Neon-theme-dragdropbox">
      <input
        style="
          z-index: 999;
          opacity: 0;
          width: 320px;
          height: 8.5em;
          position: absolute;
          right: 0px;
          left: 0px;
          margin-right: auto;
          margin-left: auto;
        "
        name="files[]"
        id="filer_input2"
        multiple="multiple"
        type="file"
      />
      <div class="Neon-input-dragDrop">
        <div class="Neon-input-inner">
          <div class="Neon-input-icon"><i class="fa fa-file-image-o"></i></div>
          <div class="Neon-input-text">
            <h3>Upload Image</h3>
          </div>
          <br />
          <a class="Neon-input-choose-btn blue">Browse Files</a>
        </div>
      </div>
    </div>

    <form @submit.prevent="postPost">
      <div class="formgroup">
        <label for="title">Species</label>
        <input v-model="title" type="text" name="species" id="species" />
      </div>
      <div class="formgroup">
        <label for="author">Author</label>
        <input v-model="author" type="text" name="author" id="author" />
      </div>
      <div class="formgroup">
        <label for="description">Description</label>
        <textarea
          v-model="description"
          type="text"
          name="description"
          id="description"
          cols="20"
          rows="5"
        >
        </textarea>
      </div>
      <button type="submit">Create Post</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["posted"],
  name: "PostCreate",
  data() {
    return {
      species: null,
      author: null,
      description: null,
    };
  },
  methods: {
    async postPost() {
      const post = {};
      post.title = this.title;
      post.body = this.body;
      if (this.author) {
        post.author = this.author;
      }

      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          author: this.author,
          description: this.description,
        }),
      });
      const data = await response.json();
      this.$emit("posted");
    },
  },
};
</script>

<style scoped>
.formgroup {
  margin-bottom: 1em;
}

.Neon {
  font-family: sans-serif;
  font-size: 14px;
  color: #494949;
  position: relative;
  margin-bottom: 2em;
}
.Neon * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.Neon-input-dragDrop {
  display: block;
  width: 343px;
  margin: 0 auto 25px auto;
  padding: 25px;
  color: #8d9499;
  color: #97a1a8;
  background: #fff;
  border: 2px dashed #c8cbce;
  text-align: center;
  -webkit-transition: box-shadow 0.3s, border-color 0.3s;
  -moz-transition: box-shadow 0.3s, border-color 0.3s;
  transition: box-shadow 0.3s, border-color 0.3s;
}
.Neon-input-dragDrop .Neon-input-icon {
  font-size: 48px;
  margin-top: -10px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.Neon-input-text h3 {
  margin: 0;
  font-size: 18px;
}
.Neon-input-text span {
  font-size: 12px;
}
.Neon-input-choose-btn.blue {
  color: #41794d;
  border: 1px solid #76b69b;
}
.Neon-input-choose-btn {
  display: inline-block;
  padding: 8px 14px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  font-size: 12px;
  font-weight: bold;
  color: #8d9496;
  border-radius: 3px;
  border: 1px solid #c6c6c6;
  vertical-align: middle;
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  transition: all 0.2s;
}
</style>