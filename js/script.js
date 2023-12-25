// Sticky header
try {
	const header = document.querySelector('header')
	const main = document.querySelector('.main')

	if (main.classList.contains('homepage')) {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				header.classList.add('sticky')
			} else {
				header.classList.remove('sticky')
			}
		})
	} else {
		header.classList.add('sticky')
	}
} catch (e) {}

// Hamburger menu
try {
	const hamburger = document.querySelector('.hamburger')
	const headerMenu = document.querySelector('.nav')

	hamburger.addEventListener('click', () => {
		if (!headerMenu.classList.contains('nav--active')) {
			hamburger.classList.add('hamburger--active')
			headerMenu.classList.add('nav--active')
			document.body.classList.add('no-scroll')
		} else {
			hamburger.classList.remove('hamburger--active')
			headerMenu.classList.remove('nav--active')
			document.body.classList.remove('no-scroll')
		}
	})
} catch (e) {}

// Posts slider
try {
	const postsSlider = new Swiper('.useful__slider', {
		breakpoints: {
			320: {
				slidesPerView: 'auto',
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1300: {
				slidesPerView: 3,
				spaceBetween: 42,
			},
		},
	})
} catch (e) {}

// Article Interested slider
try {
	const interestedSlider = new Swiper('.interested__slider', {
		breakpoints: {
			320: {
				slidesPerView: 'auto',
				spaceBetween: 15,
			},
			576: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
		},
	})
} catch (e) {}

// Reviews slider
try {
	const reviewsSlider = new Swiper('.reviews__slider', {
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.reviews__slider-next',
			prevEl: '.reviews__slider-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
	})
} catch (e) {}

// Accordion Calculate
try {
	const calc = document.querySelector('.selection__calc')
	const calcTop = calc.querySelector('.calc__top')
	const calcContent = calc.querySelector('.calc__content')

	calcTop.addEventListener('click', () => {
		calcTop.classList.toggle('calc__top--active')
		calcContent.classList.toggle('calc__content--active')

		if (calcTop.classList.contains('calc__top--active')) {
			calcContent.style.height = `${calcContent.scrollHeight}px`
			calcContent.style.marginTop = `11px`
		} else {
			calcContent.style.height = `0px`
			calcContent.style.marginTop = `0`
		}
	})
} catch (e) {}

// Yandex map
try {
	function init() {
		let map = new ymaps.Map('geography__map', {
			center: [40.46309593119886, 65.73796878124996],
			zoom: 5.5,
		})

		let tashkent = new ymaps.Placemark(
			[41.31130457688333, 69.27981401361907],
			{},
			{}
		)

		let nukus = new ymaps.Placemark(
			[42.465024792604794, 59.61262295151407],
			{},
			{}
		)

		let urgench = new ymaps.Placemark(
			[41.55675425205604, 60.631246500000024],
			{},
			{}
		)

		let buxara = new ymaps.Placemark(
			[39.77358815587073, 64.41988319561759],
			{},
			{}
		)

		let navoi = new ymaps.Placemark(
			[40.09959904091245, 65.37858249999998],
			{},
			{}
		)

		let karshi = new ymaps.Placemark(
			[38.84451424217624, 65.79595350000002],
			{},
			{}
		)

		let termez = new ymaps.Placemark(
			[37.225272599724235, 67.28161849999996],
			{},
			{}
		)

		let samarkand = new ymaps.Placemark(
			[39.67113633968636, 66.96891949999997],
			{},
			{}
		)

		let jizakh = new ymaps.Placemark(
			[40.119078816951905, 67.82987055273435],
			{},
			{}
		)

		let gulistan = new ymaps.Placemark(
			[40.50081203200777, 68.78573099999994],
			{},
			{}
		)

		let nurafshon = new ymaps.Placemark(
			[41.02793109634531, 69.35471000000001],
			{},
			{}
		)

		let namangan = new ymaps.Placemark(
			[41.054895218275895, 71.63607150000003],
			{},
			{}
		)

		let fergana = new ymaps.Placemark(
			[40.39356909320465, 71.79390099999995],
			{},
			{}
		)

		let andijan = new ymaps.Placemark(
			[40.7672101174422, 72.35248699999991],
			{},
			{}
		)

		map.behaviors.disable(['scrollZoom'])
		map.geoObjects.add(tashkent)
		map.geoObjects.add(nukus)
		map.geoObjects.add(urgench)
		map.geoObjects.add(buxara)
		map.geoObjects.add(navoi)
		map.geoObjects.add(karshi)
		map.geoObjects.add(termez)
		map.geoObjects.add(samarkand)
		map.geoObjects.add(jizakh)
		map.geoObjects.add(gulistan)
		map.geoObjects.add(nurafshon)
		map.geoObjects.add(namangan)
		map.geoObjects.add(fergana)
		map.geoObjects.add(andijan)

		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
		) {
			map.behaviors.disable(['drag'])
		}
	}

	ymaps.ready(init)
} catch (e) {}

// Modal
try {
	const modalBtns = document.querySelectorAll('.modal__btn')
	const modal = document.querySelector('.modal')
	const modalClose = document.querySelector('.modal__close')

	function openModal() {
		modal.classList.add('modal--active')
		document.body.classList.add('no-scroll')
	}

	function closeModal() {
		modal.classList.remove('modal--active')
		document.body.classList.remove('no-scroll')
	}

	modalBtns.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault()
			openModal()
		})
	})

	modalClose.addEventListener('click', closeModal)
} catch (e) {}

// Input mask
try {
	const sum = document.querySelectorAll('.sum')

	sum.forEach(item => {
		let sum1 = new IMask(item, {
			mask: Number,
			min: 500000,
			max: 500000000,
			thousandsSeparator: ' ',
		})
	})
} catch (e) {}

// Input mask tel
try {
	$(document).ready(function () {
		$('input[id^="phone"]').mask('+998 (XX) XXX-XX-XX')
	})
} catch (e) {}

// Calculator
try {
	const calc = document.querySelector('.selection__calc')
	const sum = calc.querySelector('.calc__form-sum')
	const period = calc.querySelector('.calc__form-period')
	const select = calc.querySelector('.calc__form-select')
	const percent = calc.querySelector('.calc__form-percent')
	const btn = calc.querySelector('.calc__form-btn')
	const result = calc.querySelector('.calc__result')
	const resultSpan = result.querySelector('span')

	btn.addEventListener('click', () => {
		let sumValue = sum.value.split(' ').join('')
		let periodValue

		if (sumValue >= 400000 && period.value !== '' && percent.value > 0) {
			if (select.value == 'days') {
				periodValue = period.value
			} else if (select.value == 'weeks') {
				periodValue = period.value * 7
			} else if (select.value == 'months') {
				periodValue = period.value * 30
			}

			let resultValue = Math.ceil(
				(percent.value / 100 / 365) * sumValue * periodValue
			).toLocaleString('ru')

			resultSpan.textContent = resultValue
			result.classList.add('calc__result--active')
		}
	})
} catch (e) {}

// Count animation
try {
	const valueDisplays = document.querySelectorAll('.num')
	const interval = 3000

	valueDisplays.forEach(valueDisplay => {
		let startValue = 0
		let endValue = parseInt(valueDisplay.getAttribute('data-val'))

		let duration = Math.floor(interval / endValue)
		let counter = setInterval(() => {
			startValue += 1
			valueDisplay.textContent = startValue
			if (startValue == endValue) {
				clearInterval(counter)
			}
		}, duration)
	})
} catch (e) {}
