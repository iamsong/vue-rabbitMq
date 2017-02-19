<template>
  <div class="sample-turtorial">
    <div id="ss" style="width:100%; height:580px;border: 1px solid gray;"></div>
  </div>
</template>

<script>
  import $ from 'jquery'
  $(document).ready(function () {
          var spread = new GC.Spread.Sheets.Workbook($('#ss')[0], { sheetCount: 1 })
        })
  export default{

    // mounted: function () {
    //   this.$nextTick(function () {
    //   })
    // }
  }
</script>
