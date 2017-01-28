<template>
  <div class="voiceshare">
    <div class="picture_area">
      <img v-bind:src="img_url" />
    </div>
    <div class="talk_line">
      <div class="talk_btn">
          <img src="/static/images/talk3.png" class="talk_gif" />
          <audio id="users_talk" src="/static/images/music.mp3"></audio>
      </div>
    </div>
    <div class="btn_line">
      <a href="">
        <div class="btn_send"></div>
      </a>
      <a href="">
        <div class="btn_share"></div>
      </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'voiceshare',
  data () {
    return {
      img_url: '',
      type: 0
    }
  },
  mounted () {
    this.$nextTick(function () {
      var that = this
      let id = this.$route.params.id
      $.post('http://wx.project.com/Home/Index/getData', {id: id}, function (data) {
        if (data.result === 1) {
          that.img_url = data.info.img
          that.type = data.info.type
        }
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*拍照分享页面*/
.picture_area{
  width:2.25rem;
  height:2.57rem;
  background-size:cover;
  margin:0.8rem auto 0.17rem;
  overflow: hidden;
  border:0.06rem solid #fff9ce;
}
.picture_area img{
  width:100%;
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
.talk_line .talk_btn audio{
  display: none;
}
.btn_line{
  width: 100%;
  height:0.7rem;
  position: relative;
}
.btn_line div{
  width:1.24rem;
  height:0.4rem;
  position: absolute;
  background-size: cover;
}
.btn_send{
  background: url(../../static/images/shy.png);
  left:0.245rem;
}
.btn_share{
  background: url(../../static/images/fxjhq.png);
  right:0.245rem;
}
</style>
