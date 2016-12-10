<template>
  <div class="homepage">
    <div class="homepage__content">
      <p>פרוייקט ישר מהשדה עוזר לחבר את החקלאים ישירות אליכם - הלקוחות.</p>
      <p>הפרוייקט נמצא בשלב איסוף הנתונים - אתם מוזמנים <router-link to="/add-farm">להוסיף משקים</router-link>, לעקוב בעמוד הפייסבוק, או להרשם לעדכונים במייל:</p>
      <form action="//farm2you.us14.list-manage.com/subscribe/post?u=3569206df0c1612c954a1c699&amp;id=52d172b033" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate subscribe-form" target="_blank" novalidate>
        <div style="display: none;" aria-hidden="true"><input type="text" name="b_3569206df0c1612c954a1c699_52d172b033" tabindex="-1" value=""></div>
        <div class="subscribe-form-groups">
          <div class="subscribe-form-group">
            <label for="mce-EMAIL">אימייל</label>
            <input type="email" value="" name="EMAIL" class="subscribe-input" id="mce-EMAIL" placeholder="כתובת אימייל" required>
          </div>
          <div class="subscribe-form-group">
            <label for="mce-FNAME">שם פרטי</label>
            <input type="text" value="" name="FNAME" class="subscribe-input" id="mce-FNAME" placeholder="שם פרטי">
          </div>
          <div class="subscribe-form-group">
            <label for="mce-LNAME">שם משפחה</label>
            <input type="text" value="" name="LNAME" class="subscribe-input" id="mce-LNAME" placeholder="שם משפחה">
          </div>
        </div>
        <div class="clear"><input type="submit" value="הרשמה" name="subscribe" id="mc-embedded-subscribe" class="subscribe-button"></div>
      </form>
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

  .subscribe-form {
    width: 70%;

    @include respond-at(768px) {
      width: 60%;
    };
  }

  .subscribe-form-groups {
    padding: 5px 0;
    background-color: rgba(255,255,255,0.9);
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 5px;

    @supports (-webkit-backdrop-filter: blur(5px)) {
      background-color: rgba(255, 247, 237, 0.23);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
    };

    @include respond-at(768px) {
      padding-bottom: 10px;
    };
  }

  .subscribe-form-group {
    margin-bottom: 5px;
  }

  .subscribe-input {
    display: block;
    max-width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  .subscribe-button {
    appearance: none;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #e67e22;
    box-sizing: border-box;
    height: 40px;
    line-height: 32px;
    padding: 0 18px;
    margin-top: 5px;
    transition: all 0.23s ease-in-out 0s;
    width: 100%;

    &:hover {
      background-color: #d35400;
      cursor: pointer;
    }
  }
</style>
