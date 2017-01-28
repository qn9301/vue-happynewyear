<template>
  <div class="fireboom">
    <div class="fire">
      <img v-for="(fire,index) in img_url" v-bind:src="fire" v-bind:class="{load_fire:true,show:index+1==i && j==0}" v-on:load="loadImg()" />
    </div>
    <div class="boom">
      <img v-for="(boom,index) in boom_url" v-bind:src="boom" v-bind:class="{boom_img:true,show:index+1==j}" v-on:load="loadImg()" />
      <img src="/static/images/boom_text.png" class="boom_text" v-on:load="loadImg()" />
      <router-link to="/voiceWish" class="btn_voice">
      </router-link>
      <router-link to="/textWish" class="btn_text">
      </router-link>
    </div>
    <audio src="/static/images/bpboom.mp3"></audio>
    <div></div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'fireboom',
  data () {
    return {
      len: 0,
      timmer: null,
      timmer_boom: null,
      i: 1,
      j: 0,
      img: $('.fireboom img'),
      len_img: 15,
      img_url: ['/static/images/fire1.png', '/static/images/fire2.png', '/static/images/fire3.png', '/static/images/fire4.png', '/static/images/fire5.png', '/static/images/fire6.png', '/static/images/fire7.png', '/static/images/fire8.png'],
      boom_url: ['/static/images/boom1.png', '/static/images/boom2.png', '/static/images/boom3.png', '/static/images/boom4.png', '/static/images/boom5.png', '/static/images/boom6.png']
    }
  },
  methods: {
    loadImg: function () {
      this.len++
      if (this.len === this.len_img) {
        let that = this
        $('.fireboom audio')[0].play()
        this.timmer = setInterval(function () {
          that.i++
          if (that.i === 8) {
            that.boom()
            clearInterval(that.timmer)
          }
        }, 180)
      }
    },
    boom: function () {
      let that = this
      clearInterval(this.timmer)
      this.timmer_boom = setInterval(function () {
        that.j++
        that.j === 6 && clearInterval(that.timmer_boom)
      }, 30)
      $('.fireboom .boom img.boom_text').css({ '-moz-animation': 'show 0.5s ease-in-out forwards', '-ms-animation': 'show 0.5s ease-in-out forwards', '-o-animation': 'show 0.5s ease-in-out forwards', 'animation': 'show 0.5s ease-in-out forwards' })
      $('.fireboom .boom a').stop().delay(500).animate({ 'opacity': '1' }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fire{
  width:1.06rem;
  height:4.875rem;
  position: absolute;
  left:calc(50% - 0.53rem);
  bottom:0.29rem;
}
.load_fire{
  width:100%;
  height:100%;
  position: absolute;
  top:0;
  left: 0;
  filter:alpha(opacity=0); /* IE */
  -moz-opacity:0; /* 老版Mozilla */
  -khtml-opacity:0; /* 老版Safari */
  opacity: 0; /* 支持opacity的浏览器*/
}
.boom{
  position:absolute;
  width:100%;
  height:100%;

}
.boom_img{
  width:4.54rem;
  height:4.67rem;
  position: absolute;
  left: calc( 50% - 2.27rem );
  bottom:0.4rem;
  filter:alpha(opacity=0); /* IE */
  -moz-opacity:0; /* 老版Mozilla */
  -khtml-opacity:0; /* 老版Safari */
  opacity: 0; /* 支持opacity的浏览器*/
}
.boom_text{
  width:1.81rem;
  height:0.825rem;
  position: absolute;
  left:calc( 50% - 0.905rem);
  top:2.4rem;
  filter:alpha(opacity=0); /* IE */
  -moz-opacity:0; /* 老版Mozilla */
  -khtml-opacity:0; /* 老版Safari */
  opacity: 0; /* 支持opacity的浏览器*/
  transform: scale(0);
}

.show{
  filter:alpha(opacity=1); /* IE */
  -moz-opacity:1; /* 老版Mozilla */
  -khtml-opacity:1; /* 老版Safari */
  opacity: 1; /* 支持opacity的浏览器*/
}
@keyframes show{
  from{
    filter:alpha(opacity=0); /* IE */
    -moz-opacity:0; /* 老版Mozilla */
    -khtml-opacity:0; /* 老版Safari */
    opacity: 0; /* 支持opacity的浏览器*/
    -ms-transform:scale(0);   /* IE 9 */
    -moz-transform:scale(0);  /* Firefox */
    -webkit-transform:scale(0); /* Safari 和 Chrome */
    -o-transform:scale(0);  /* Opera */
    transform:scale(0);
  }
  to{
    filter:alpha(opacity=1); /* IE */
    -moz-opacity:1; /* 老版Mozilla */
    -khtml-opacity:1; /* 老版Safari */
    opacity: 1; /* 支持opacity的浏览器*/
    -ms-transform:scale(1);   /* IE 9 */
    -moz-transform:scale(1);  /* Firefox */
    -webkit-transform:scale(1); /* Safari 和 Chrome */
    -o-transform:scale(1);  /* Opera */
    transform:scale(1);
  }
}
@-moz-keyframes show{
  from{
    filter:alpha(opacity=0); /* IE */
    -moz-opacity:0; /* 老版Mozilla */
    -khtml-opacity:0; /* 老版Safari */
    opacity: 0; /* 支持opacity的浏览器*/
    -ms-transform:scale(0);   /* IE 9 */
    -moz-transform:scale(0);  /* Firefox */
    -webkit-transform:scale(0); /* Safari 和 Chrome */
    -o-transform:scale(0);  /* Opera */
    transform:scale(0);
  }
  to{
    filter:alpha(opacity=1); /* IE */
    -moz-opacity:1; /* 老版Mozilla */
    -khtml-opacity:1; /* 老版Safari */
    opacity: 1; /* 支持opacity的浏览器*/
    -ms-transform:scale(1);   /* IE 9 */
    -moz-transform:scale(1);  /* Firefox */
    -webkit-transform:scale(1); /* Safari 和 Chrome */
    -o-transform:scale(1);  /* Opera */
    transform:scale(1);
  }
}
@-o-keyframes show{
  from{
    filter:alpha(opacity=0); /* IE */
    -moz-opacity:0; /* 老版Mozilla */
    -khtml-opacity:0; /* 老版Safari */
    opacity: 0; /* 支持opacity的浏览器*/
    -ms-transform:scale(0);   /* IE 9 */
    -moz-transform:scale(0);  /* Firefox */
    -webkit-transform:scale(0); /* Safari 和 Chrome */
    -o-transform:scale(0);  /* Opera */
    transform:scale(0);
  }
  to{
    filter:alpha(opacity=1); /* IE */
    -moz-opacity:1; /* 老版Mozilla */
    -khtml-opacity:1; /* 老版Safari */
    opacity: 1; /* 支持opacity的浏览器*/
    -ms-transform:scale(1);   /* IE 9 */
    -moz-transform:scale(1);  /* Firefox */
    -webkit-transform:scale(1); /* Safari 和 Chrome */
    -o-transform:scale(1);  /* Opera */
    transform:scale(1);
  }
}
@-webkit-keyframes show{
  from{
    filter:alpha(opacity=0); /* IE */
    -moz-opacity:0; /* 老版Mozilla */
    -khtml-opacity:0; /* 老版Safari */
    opacity: 0; /* 支持opacity的浏览器*/
    -ms-transform:scale(0);   /* IE 9 */
    -moz-transform:scale(0);  /* Firefox */
    -webkit-transform:scale(0); /* Safari 和 Chrome */
    -o-transform:scale(0);  /* Opera */
    transform:scale(0);
  }
  to{
    filter:alpha(opacity=1); /* IE */
    -moz-opacity:1; /* 老版Mozilla */
    -khtml-opacity:1; /* 老版Safari */
    opacity: 1; /* 支持opacity的浏览器*/
    -ms-transform:scale(1);   /* IE 9 */
    -moz-transform:scale(1);  /* Firefox */
    -webkit-transform:scale(1); /* Safari 和 Chrome */
    -o-transform:scale(1);  /* Opera */
    transform:scale(1);
  }
}
.boom a{
  width:1.24rem;
  height:0.4rem;
  position: absolute;
  bottom:0.58rem;
  filter:alpha(opacity=0); /* IE */
  -moz-opacity:0; /* 老版Mozilla */
  -khtml-opacity:0; /* 老版Safari */
  opacity: 0; /* 支持opacity的浏览器*/
}
.btn_text{
  display: block;
  background: url(../../static/images/btn_send.png);
  background-size: cover;
  right:0.245rem;
}
.btn_voice{
  display: block;
  background: url(../../static/images/btn_voice.png);
  background-size: cover;
  left:0.245rem;
}
</style>
