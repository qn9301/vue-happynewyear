<template>
  <input type="file" id="uploadfile" name="" v-on:change="readFile()" v-bind:accept="accept">
</template>

<script>
import $ from 'jquery'

export default {
  name: 'zyfUpload',
  props: {
    accept: String,
    url: String
  },
  data () {
    return {
      img_str: '',
      img_url: ''
    }
  },
  methods: {
    readFile: function () {
      var obj = $('#uploadfile')[0]
      console.dir(obj)
      var that = this
      var file = obj.files[0]
      if (!/image\/\w+/.test(file.type)) {
        window.alert('请确保文件为图像类型')
        return false
      }
      var reader = new window.FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        that.img_str = this.result
        $.ajax({
          type: 'POST',
          url: that.url,
          data: {'img_str': that.img_str},
          dataType: 'json',
          cache: false,
          success: function (data) {
            if (data.flag === 1) {
              // alert(data.img)
              that.img_url = data.img
              that.$emit('passData', that.img_url)
            } else {
              window.alert('头像上传失败！')
            }
          },
          error: function (xhr, type, error) {
            window.alert(type)
            window.alert(error)
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type=file]{
  display: none
}
</style>
