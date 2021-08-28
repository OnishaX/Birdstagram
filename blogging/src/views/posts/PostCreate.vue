<template>
  <section>
    <div class="image-upload">
      <div class="Neon Neon-theme-dragdropbox">
        <input
          style="
            z-index: 999;
            opacity: 0;
            width: 20em;
            height: 8.5em;
            position: absolute;
            right: 0px;
            left: 0px;
            margin-right: auto;
            margin-left: auto;
            cursor: pointer;
          "
          name="files[]"
          id="filer_input2"
          multiple="multiple"
          type="file"
        />
        <div class="Neon-input-dragDrop">
          <div class="Neon-input-inner">
            <div class="Neon-input-icon">
              <i class="fa fa-file-image-o"></i>
            </div>
            <div class="Neon-input-text">
              <h3>Upload Image</h3>
            </div>
            <br />
            <a class="Neon-input-choose-btn blue">Browse Files</a>
          </div>
        </div>
      </div>
    </div>

    <div class="user-info">
      <form @submit.prevent="postPost">
        <div class="formgroup">
          <label for="title"></label>
          <input
            v-model="species"
            type="text"
            name="species"
            id="species"
            placeholder="Species"
          />
        </div>
        <div class="formgroup">
          <label for="author"></label>
          <input
            v-model="author"
            type="text"
            name="author"
            id="author"
            placeholder="Author"
          />
        </div>
        <div class="formgroup">
          <label for="description"></label>
          <textarea
            v-model="description"
            type="text"
            name="description"
            id="description"
            cols="20"
            rows="10"
            placeholder="Description"
          >
          </textarea>
        </div>

        <div class="formgroup">
          <button type="submit">Create Post</button>
        </div>
      </form>
    </div>
  </section>
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
      const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          species: this.species,
          author: this.author,
          description: this.description,
        }),
      });
      const data = await response.json();
      console.log(data);
      this.$emit("posted");
    },
  },
};
</script>

<style scoped>
.formgroup {
  margin-bottom: 2em;
  display: block;
}

.formgroup input {
  font-size: 1.1em;
  width: 90%;
  height: 3em;
  border: none;
  border-bottom: thin rgb(187, 187, 187) solid;
  outline: none;
}

.formgroup textarea {
  font-size: 1.1em;
  outline: none;
  width: 90%;
  height: 8em;
  border: none;
  border-bottom: thin rgb(187, 187, 187) solid;
}

section {
  display: flex;
  height: 90vh;
  width: 100vw;
}

.image-upload {
  background-color: #eeeeee;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}

.user-info {
  background-color: white;
  padding: 1em;
  width: 50%;
  position: relative;
}

button {
  cursor: pointer;
  font-size: 1.15em;
  color: white;
  border-radius: 1em;
  background-color: #1b4036;
  border: none;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0 2em 0 1.5em;
  height: 3em;
  width: 90%;
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
  border-radius: 1em;
  width: 343px;
  margin: 0 auto 25px auto;
  padding: 25px;
  color: #285e4f;
  background: #fff;
  border: thin dotted #3b7062;
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
  color: #1b4036;
  border: thin solid #1b4036;
  border-radius: 1em;
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
  color: #1b4036;
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