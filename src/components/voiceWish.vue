<template>
  <div class="voicewish">
    <div class="photo_area">
      <img v-bind:src="img_url" />
    </div>
    <div class="head">
      <div>
        <img v-for="(img, index) in head" v-bind:src="index==select_index?select_head[index]:img" v-bind:class="{on:index == select_index}" v-on:click="change_head(index)"/>
      </div>
    </div>
    <div class="take_photo">
      <label v-if="!is_upload">
        <img src="/static/images/take_photo.png" class="take_btn inline_block"/>
        <zyfUpload v-on:passData="get_upload_url" accept="*" url="http://wx.project.com/Home/Index/upload_base64"></zyfUpload>
      </label>
      <img v-if="is_upload" v-on:click="sendData()" src="/static/images/photo_sure.png" />
    </div>
  </div>
</template>

<script>
import zyfUpload from './upload-file'
import $ from 'jquery'

export default {
  name: 'voicewish',
  components: {
    zyfUpload
  },
  data () {
    return {
      head: ['/static/images/qiao.png', '/static/images/duan.png', '/static/images/xu.png', '/static/images/wang.png', '/static/images/yun.png'],
      select_head: ['/static/images/qiao_on.png', '/static/images/duan_on.png', '/static/images/xu_on.png', '/static/images/wang_on.png', '/static/images/yun_on.png'],
      select_index: 0,
      distance: 50,
      status: false,
      img_url: '/static/images/photo.png',
      is_upload: false
    }
  },
  mounted () {
    this.$nextTick(function () {
      var that = this
      var _x, x
      window.document.body.addEventListener('touchstart', function (e) {
        x = e.touches[0].clientX
      })
      window.document.body.addEventListener('touchmove', function (e) {
        _x = e.touches[0].clientX
        if (that.status) {
          return false
        }
        if ((_x - x) > that.distance) {
          that.status = true
          x = _x
          that.leftSlide()
        }
        if ((x - _x) > that.distance) {
          that.status = true
          x = _x
          that.rightSlide()
        }
        // status = false
      })
      window.document.body.addEventListener('touchend', function (e) {
        that.status = false
      })
    })
  },
  methods: {
    change_head: function (index) {
      this.select_index = index
    },
    leftSlide: function () {
      var newindex = this.select_index + 1
      if (newindex > this.head.length - 1) {
        newindex = 0
      }
      this.select_index = newindex
    },
    rightSlide: function () {
      var newindex = this.select_index - 1
      if (newindex < 0) {
        newindex = this.head.length - 1
      }
      this.select_index = newindex
    },
    get_upload_url: function (url) {
      this.img_url = url
      this.is_upload = true
    },
    sendData: function () {
      var that = this
      $.post('http://wx.project.com/Home/Index/saveImg', {imgurl: this.img_url, type: this.select_index}, function (data) {
        if (data.result === 1) {
          window.alert(data.info)
          that.$router.push('/voiceShare/' + data.id)
        } else {
          window.alert(data.info)
        }
      }, 'json')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.voicewish{
  height:100%;
}
.photo_area img{
  width: 100%;
}
.head{
  width:100%;
  height:0.74rem;
  box-sizing: border-box;
  padding:0 0.15rem;
  font-size: 0;
  margin:0.125rem 0 0.15rem 0;
}
.head div{
  width:2.8rem;
  margin:0 auto;
}
.head img{
  width:0.56rem;
  height:0.735rem;
}
.take_photo{
  width:100%;
  height:0.7rem;
  text-align: center;
  font-size: 0;
}
.file_btn{
  display: none;
}
.talk_line{
  width: 100%;
  height:0.41rem;
  margin-bottom:0.3rem;
}
.talk_line .talk_btn{
  width:2.25rem;
  height:0.41rem;
  background:url(../../static/images/talk_bg.png);
  background-size: cover;
  margin:0 auto;
  position: relative;
}
.talk_line .talk_btn .talk_gif{
  width:0.16rem;
  height:0.24rem;
  display: block;
  position: absolute;
  top:0.085rem;
  left:0.1rem;
}
.take_photo img{
  width:0.7rem;
  height:0.7rem;
}
.inline_block{
  display: inline-block!important;
}
.photo_area{
  height:60%;
  overflow: hidden;
  position: relative;
}
.photo_area img{
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
