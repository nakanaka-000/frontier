<script>

const zeroPadding = (num, digit) => {
  return (Array(digit).join('0') + num).slice(-digit)
}
export default {
  data() {
    return {
      count: 0, 
      clickDates: [],
      date: new Date(),
    }
  },
  methods: {
    increment() {
      this.count++
      this.clickDates.push(new Date())
    },
    formatDate(date) {
      return `${zeroPadding(date.getHours(), 2)}:${zeroPadding(date.getMinutes(), 2)}`
    },
  },
  computed: {
    year() {
      return this.date.getFullYear()
    },
    month() {
      return zeroPadding(this.date.getMonth() + 1, 2)
    },
    day() {
      return zeroPadding(this.date.getDate(), 2)
    },
    days() {
      const d = this.date.getDay()
      const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][d];
      return dayOfWeekStr
    },
  },
  mounted() {
    this.date(new Date())
    },
}

</script>

<template>
  <div>
    <header>
      <h1 class="app_name">ごはんカウンター</h1>
    </header>

    <section class="view_area">
      <div class="name_area">
        <!-- <p class="pet_name">{{ petname }}</p> -->
        <p class="today">は今日</p>
      </div>
      <div class="counter_view">
          <p class="counter_num">{{ count }}</p>
      </div>
      <p class="eat">杯食べました</p>
    </section>

    <section class="detail_area">
      <div class="date">
        {{ year }}/{{ month }}/{{ day }}({{ days }})
      </div>
      <div class="feed_time">
          <div v-for="date in clickDates">
            <span>{{ formatDate(date) }}</span>
          </div>
      </div>
    </section>


    <section class="button_area">
      <button class="count_btn" @click="increment">ごはんをあげた！</button>
      <button class="name_btn">名前を設定する</button>
    </section>
  </div>
</template>

<style scoped>
header {
  height: 50px;
  font-size: 0.5rem;
  text-align: center;
}
.view_area {
  background-color: #A5D8CA;
  padding: 30px;
}
.view_area .name_area .today {
  text-align: center;
}
.view_area .counter_view {
  background-color: #fff;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 30px auto;
  position: relative;

}
.view_area .counter_view .counter_num {
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  top: 25px;
  left: 43px;
}
.view_area .eat {
  text-align: center;
}

.detail_area {
  margin: 20px 80px;
  font-size: 0.875rem;
}
.detail_area .date {
  text-align: center;
}
.detail_area .feed_time {
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto 10px;
  text-align: center;
}
.detail_area .feed_time > div {
  margin: 10px 13px;
}

.button_area {

}
.button_area .count_btn {
  display: block;
  width: 280px;
  height: 60px;
  margin: 60px auto 10px;
  background-color: #A5D8CA;
  border: none;
  border-radius: 30px;
}
.button_area .name_btn {
  display: block;
  margin: 0 auto;
  border: none;
  background-color: #F4F8F7;
  font-size: 0.75rem;
}
</style>