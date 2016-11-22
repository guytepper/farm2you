<template >
  <div class="farm-card" :farm-id="farm._id">
    <img src="/static/images/farm-img-placeholder.jpg" alt="" class="farm-card__img"
        srcset="/static/images/farm-img-placeholder@2x.jpg 2x" />
    <div class="farm-card__info">
      <h2 class="farm-card__name">
        <router-link :to="{ name: 'farm', params: { id: farm.id }}">{{ farm.properties.name }}</router-link>
      </h2>
      <div class="farm-card__props">
        אורגני, משלוחים
      </div>
      <div class="farm-card__location">
        16 ק״מ ממיקומך
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'farm-card',
  props: ['farm']
}
</script>

<style lang="css">
  .farm-card {
    display: flex;
    margin-bottom: 10px;
  }

  .farm-card__name {
    margin: 0;
  }

  .farm-card__img {
    width: 80px;
    height: 80px;
    margin-left: 10px;
  }
</style>
