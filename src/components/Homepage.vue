<template>
  <div class="homepage">
    <div class="homepage__content">
      <p>פרוייקט ישר מהשדה עוזר לחבר את החקלאים ישירות אליכם - הלקוחות.</p>
      <p>הפרוייקט נמצא בשלב איסוף הנתונים - אתם מוזמנים <router-link to="/add-farm">להוסיף משקים</router-link>, לעקוב בעמוד הפייסבוק, או להרשם לעדכונים במייל:</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/mixins";

  .homepage {
    margin: -15px -20px 0; // Reset container margins
    height: calc(100vh - 55px);
    background: url('/static/images/homepage/hero-image-768px@2x.jpg') no-repeat center center;
    background-size: cover;

    @include respond-at(1000px) {
      margin: -15px -40px 0;
    };

    @supports (background-image: -webkit-image-set(url('') 1x)) {
      @include respond-at(1280px) {
        background-image: -webkit-image-set(url('/static/images/homepage/hero-image-1440px@1x.jpg') 1x,
            url('/static/images/homepage/hero-image-1440px@2x.jpg') 2x);
      };

      @include respond-at(1920px) {
        background-image: -webkit-image-set(url('/static/images/homepage/hero-image-1920px@1x.jpg') 1x,
            url('/static/images/homepage/hero-image-1920px@2x.jpg') 2x);
      };
    }
  }

  .homepage__content {
    display: flex;
    height: 100%;
    max-width: 550px;
    margin: 0 auto;
    padding: 25px 20px;
    flex-direction: column;
    align-items: center;
    font-size: 5vw;
    font-weight: bold;
    text-align: center;

    @include respond-at(600px) {
      font-size: 28px;
    };
  }
</style>
