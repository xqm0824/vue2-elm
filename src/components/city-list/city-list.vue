<template>
  <div class="city-list">
    <div class="select-city">
      <div class="title border-bottom-1px">当前选择城市:</div>
      <div class="city">
        北京
      </div>
    </div>
    <split></split>
    <div class="row-city">
      <div class="title border-bottom-1px">热门城市</div>
      <div class="row-list">
        <div class="row">北京</div>
        <div class="row">北京</div>
        <div class="row">北京</div>
        <div class="row">北京</div>
        <div class="row">北京</div>
        <div class="row">北京</div>
        <div class="row">北京</div>
        <div class="row">北京</div>
      </div>
    </div>
    <split></split>
    <div 
    class="area"
    v-for="(city, index) in citylist"
    :key="index"
    >
      <div class="title border-bottom-1px ">a</div>
      <div 
        class="item-list"
        v-for="(item, index) in city"
        :key="index"
      >
        <div class="item border-bottom">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Split from 'components/split/split'

  export default {
    name: 'city-list',
    props: {
      citylist: Object
    },
    data() {
      return {
 
      }
    },
    methods: {

    },
    components: {
      Split
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .city-list
    overflow: hidden
    position: absolute
    top: 40px
    left: 0
    right: 0
    bottom: 0
    .select-city
      .title
        line-height: 27px
        padding-left: 10px
        color: #666
        font-size: 13px
      .city
          padding: 10px
          color: $color-blue
    .row-city
      .title
        line-height: 27px
        padding-left: 10px
        color: #666
        font-size: 13px
      .row-list
        overflow: hidden 
        text-align: center
        .row
          width: 25%
          box-sizing:border-box
          float: left
          padding: 10px
          box-sizing: border-box
          color: $color-blue
          border-right: 1px solid #e4e4e4
          border-bottom: 1px solid #e4e4e4
          &:nth-child(4n)
            border-right: 0px
    .area
      .title
        line-height: 27px
        padding-left: 10px
        color: #666
        font-size: 13px
      .item-list
        overflow: hidden 
        text-align: center
        .item
          width: 25%
          box-sizing: border-box
          float: left
          padding: 10px
          color: $color-dark-grey
          border-right: 1px solid #e4e4e4
          border-bottom: 1px solid #e4e4e4
          &:nth-child(4n)
            border-right: 0px
</style>
