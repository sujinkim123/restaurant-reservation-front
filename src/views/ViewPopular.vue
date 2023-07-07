<template>
  <div id="app">

    <div id="list-container">
      <div id="list-text">믿고 보는 맛집 리스트</div>
      <div class="store-container">
        <div v-for="(stores, key) in stores" :key="key" class="store-item">
          <div class="store-info">
            <button>
              <div class="image-container">
                <img class="room-img" :src="stores.imgSrc" alt="image"/>
              </div>
              <div class="title-overlay">{{ stores.title }}</div>
              <div class="description-overlay">{{ stores.description }}</div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <br><br>
    <div id="list-container">
      <div id="list-text">지역별 인기 맛집</div>
      <div class="store-container">
        <div v-for="(stores, key) in stores" :key="key" class="store-item">
          <div class="store-info">
            <button>
              <div class="image-container">
                <img class="room-img" :src="stores.imgSrc" alt="image"/>
              </div>
              <div class="title-overlay">{{ stores.title }}</div>
              <div class="description-overlay">{{ stores.description }}</div>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ViewPopular',
  data() {
    return {
      menus: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'],
      stores : [
        {title: '수육 맛집 베스트 3곳', description: '촉촉하고 야들야들한 수육 한점의 행복~', imgSrc: require('../assets/img/popularStore/soyook.jpg')},
        {title: '덮밥 맛집 베스트 50곳', description: '하얀 밥 위에 맛있는 요리를 덮으면?', imgSrc: require('../assets/img/popularStore/deopbap.jpg')},
        {title: '로제 파스타 맛집 베스트 20곳', description: '토마토? 크림? 난 로제!', imgSrc: require('../assets/img/popularStore/rosepasta.jpg')},
        {title: '제주 서귀포 맛집 베스트 50곳', description: '많고 많은 서귀포의 맛집들 중 엄선해봤어~', imgSrc: require('../assets/img/popularStore/seogyipo.jpg')},
        {title: '갈치 맛집 베스트 40곳', description: '길어서 살도 많은 갈치 먹어볼까?', imgSrc: require('../assets/img/popularStore/galchi.jpg')},
        {title: '보양식 맛집 베스트 45곳', description: '본격 더위 오기 전 지금이 보양 타임!', imgSrc: require('../assets/img/popularStore/boyangsik.jpg')},
      ]
    }
  },
  methods: {
    reportPopularStore(num) {
      this.stores[num].popularStore = this.stores[num].popularStore + 1;
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'imcreSoojin';
  src:url('../assets/font/ImcreSoojin.ttf')
}
@font-face {
  font-family: 'korta-hope';
  src: url('../assets/font/KOTRA HOPE.ttf');
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.list-container {
  width: 500px;
  height: 1000px;
}
#list-text {
  color: darkgreen;
  text-align: left;
  padding-left: 150px;
  font-family: 'imcreSoojin';
  font-size: 25px;
}
.room-img {
  width:400px;
  height: 300px;
  filter: brightness(50%);
}
.store-container {
  display: flex;
  flex-wrap: wrap;
  padding-left: 100px;
}
.store-item {
  width: 30%;
  padding: 10px;
}
.store-info {
  position: relative;
}
.image-button {
  border: none;
  background-color: none;
  padding: 0;
  cursor: pointer;
  position: relative;
}
.title-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: none;
  color: seashell;
  font-size: 20pt;
  font-family: 'imcreSoojin';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 130px;
  margin: 0;
  box-sizing: border-box;
}
.description-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: none;
  color: 		seashell	;
  font-size: 20pt;
  font-family: 'korta-hope';
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 170px;
  margin: 0;
  box-sizing: border-box;
}
</style>