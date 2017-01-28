<template>
  <div class="textwish">
    <div class="content-wz-img">
      <div class="conen-wish">
        <textarea>漫漫江湖路，一世英豪皆兄弟，愿你宝刀出鞘，财源滚滚，兵强马壮，气势如虹，快意江湖路，只因有你才精彩！</textarea>
      </div>
      <div class="content-btn">
        <div class="share-btn-L FL">
          <router-link to="/"><img src="/static/images/shy.png" width="100%"></router-link>
        </div>
        <div class="share-btn-R FR">
          <router-link to="/" id="share"><img src="/static/images/fxjhq.png" width="100%"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  name: 'textwish',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textwish{
  width:100%;
  height:100%;
}

.conen-wish{
  position: relative;
  top: 18.5%;
  height:55%;
  width:84%;
  margin:0 auto;
  background: #fffdd3;
  }

.conen-wish textarea{
  font-size: 20px;
  color:#AE0000;
  padding:10px;
  font-weight: 500;
  border:none;
  background:transparent;
  width:100%;
  height:100%;
  outline: none;
  box-sizing: border-box;
  line-height: 1;
  resize:none;
  }

/*.conen-input{
  top:18.5%;
  height:55%;
  width:84%;
  margin:0 auto;
}*/
.content-wz-img{
  width: 100%;
  height: 100%;
}

.content-img{
  background:url(../../static/images/jsbg.png) no-repeat;
    background-size: 100% 100%;
}

.content-btn{
  position: relative;
  top:25%;
  font-size: 0px;
  float:none;
}

.share-btn-L{
  width:38%;
  margin-left:8%;
}

.share-btn-R{
  width:38%;
  margin-right:8%;
}

.content-share{
  position: relative;
  top:80%;
  float:none;
}

</style>
