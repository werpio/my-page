<style>
  .road {
    background: gray;
    height: 100px;
    display: flex;
    border-bottom: 2px dashed white;
  }
  .road:last-of-type {
    border-bottom: 0;
  }

  .car {
    background: green;
    height: 40px;
    width: 60px;
    align-self: flex-end;
    margin-left: 0;
  }

  .car2 {
    background: pink;
    height: 40px;
    width: 60px;
    align-self: flex-end;
    margin-left: 0;
  }

  .car-with-max-speed {
    background-color: red;
  }
</style>

<div class="road">
  <div class="car"></div>
</div>

<div class="road">
  <div class="car2"></div>
</div>

<div class="road">
    <div class="car2"></div>
</div>

<script>
  var car = document.querySelector('.car');
  var carPosition = 0;
  var gasPressed = false;
  var velocity = 1;

  window.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
      gasPressed = true
    }
  })

  window.addEventListener('keyup', function (event) {
    if (event.code === 'Space') {
      gasPressed = false
    }
  })

  setInterval(function () {
    update()
    render()
  }, 16)

  function update() {
    if (gasPressed) {
      velocity = Math.min(velocity + 0.09, 3);
    } else {
      velocity = Math.max(velocity - 0.09, 0);
    }
    carPosition = carPosition + velocity;
    if (carPosition >= 200) {
      alert('Finish');
      carPosition = 0;
      gasPressed = false;
      velocity = 0;
    }
  }

  function render() {
    if (velocity === 3) {
      car.classList.add('car-with-max-speed')
    } else {
      car.classList.remove('car-with-max-speed')
    }
    car.style.marginLeft = carPosition + 'px'
  }
  var car = document.querySelector('.car');
  var otherCars = document.querySelectorAll('.car2');
  var otherCarsPosition = 0;

  var carPosition = 0;
  var gasPressed = false;
  var velocity = 1;

  window.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
      gasPressed = true
    }
  })

  window.addEventListener('keyup', function (event) {
    if (event.code === 'Space') {
      gasPressed = false
    }
  })

  setInterval(function () {
    otherCarsPosition = otherCarsPosition + 1;
    otherCars.forEach(function (element) {
      element.style.marginLeft = otherCarsPosition + 'px';
    })

    update()
    render()
  }, 16)

  function update() {
    if (gasPressed) {
      velocity = Math.min(velocity + 0.09, 3);
    } else {
      velocity = Math.max(velocity - 0.09, 0);
    }
    carPosition = carPosition + velocity;
    if (carPosition >= 200) {
      alert('Finish');
      carPosition = 0;
      gasPressed = false;
      velocity = 0;
    }
  }

  function render() {
    if (velocity === 3) {
      car.classList.add('car-with-max-speed')
    } else {
      car.classList.remove('car-with-max-speed')
    }
    car.style.marginLeft = carPosition + 'px'
  }
</script>
