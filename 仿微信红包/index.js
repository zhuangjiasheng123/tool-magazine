new Vue({
  el: '#lottery',
  data: {
    prize: {
      name: '',
      desc: '',
      imgUrl:'',
    },
    isOpen: false,
    success: true,
    list: [],
    isClick:false,
  },
  methods: {
    whenClickPack(){
      this.isClick=true;
      let _this =this;
      setTimeout(() => {
        _this.openLottery()
      }, 2600);
    },
    getRandomNumber(min, max) {
      var range = max - min
      var rand = Math.random()
      var num = min + parseInt(rand * range)
      return num
    },
    getRandom() {
      // debugger
      var num = this.getRandomNumber(0, this.list.length);
      return this.list.splice(num, 1);
    },
    shuffle(arr) {
      var length = arr.length,
        r = length,
        rand = 0;

      while (r) {
        rand = Math.floor(Math.random() * r--);
        [arr[r], arr[rand]] = [arr[rand], arr[r]];
        
      }
      return arr;
    },

    openLottery() {
      // debugger
      this.isOpen = true;
      var arr = this.getRandom();
      var item = arr[0];
      if (item) {
        this.$set(this.prize, 'name', item.name);
        this.$set(this.prize, 'desc', item.desc);
        this.$set(this.prize, 'imgUrl', item.imgUrl);
        this.success = true;
      } else {
        this.success = false;
      }
      // console.log(this.list);
    },
    reset() {
      this.prize.name = '';
      this.prize.desc = '';
      this.prize.imgUrl = '';
      this.isOpen = false;
      this.isClick=false;
    }
  },
  mounted() {
    // console.log(prize);
    
    for (var i = 0; i < prize.prize.length; i++) {
      var item = prize.prize[i];
      for (var k = 0; k < item.count; k++) {
        this.list.push(item);
      }
    }
    for (var i = 0; i < prize.empty; i++) {
      this.list.push(null);
    }
    this.shuffle(this.list);
  }
});