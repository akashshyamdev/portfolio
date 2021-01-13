// Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

// Home
const homeTimline = gsap.timeline();

document.querySelector('#home-mini-heading').style.transform =
	'translateX(-500px)';

document.querySelector('#home-main-heading').style.transform =
	'translateX(-1200px)';

document.querySelector('#home-seconday-heading').style.transform =
	'translateX(-1200px)';

document
	.querySelectorAll('.btn--cta')
	.forEach((el) => (el.style.transform = 'translateX(-1200px)'));

homeTimline.to('#home-mini-heading', {
	x: 0,
	duration: 1,
});

homeTimline.to('#home-main-heading', {
	x: 0,
	duration: 1,
});

homeTimline.to('#home-seconday-heading', {
	x: 0,
	duration: 1,
});

homeTimline.to('.btn--cta', {
	x: 0,
	duration: 1,
	stagger: 1,
});

// Card Animation
gsap.to('.card', {
	scrollTrigger: {
		trigger: '.card',
		scrub: true,
		toggleActions: 'restart pause resume restart',
	},
	x: 40,
	duration: 1,
	stagger: 0.25,
});

// Projects Animation
document
	.querySelectorAll('.card-large')
	.forEach((el) => (el.style.transform = 'translateX(-1500px)'));

gsap.to('.card-large', {
	scrollTrigger: {
		trigger: '.card-large',
		toggleActions: 'restart pause resume restart',
	},
	x: 50,
	duration: 1,
	stagger: 0.25,
});

// Contacts Animation

const contactTimline = gsap.timeline();

document
	.querySelectorAll('.form__group--slide-in')
	.forEach((el) => (el.style.transform = 'translateX(-1000px)'));

gsap.to('.form__group--slide-in', {
	scrollTrigger: {
		trigger: '.form__group--slide-in',
		toggleActions: 'restart pause resume restart',
	},
	x: 0,
	duration: 1,
	stagger: 0.25,
});

document.querySelector('.form__message').style.transform =
	'translateX(1000px)';

gsap.to('.form__message', {
	scrollTrigger: {
		trigger: '.form__message',
		toggleActions: 'restart pause resume restart',
	},
	x: 0,
	duration: 1,
	stagger: 0.25,
});

document
	.querySelectorAll('.form__radio-label')
	.forEach((el) => (el.style.transform = 'translateX(-1400px)'));

gsap.to('.form__radio-label', {
	scrollTrigger: {
		trigger: '.form__radio-label',
		toggleActions: 'restart pause resume restart',
	},
	x: 0,
	duration: 1,
	stagger: 0.5,
});

document.querySelector('.form__services-label').style.transform =
	'translateX(-1000px)';

gsap.to('.form__services-label', {
	scrollTrigger: {
		trigger: '.form__services-label',
		toggleActions: 'restart pause resume restart',
	},
	x: 0,
	duration: 1,
	stagger: 0.5,
});

document.querySelector('.form__submit').style.opacity = '0';

gsap.to('.form__submit', {
	scrollTrigger: {
		trigger: '.form__submit',
		toggleActions: 'restart pause resume restart',
	},
	opacity: 1,
	duration: 0.75,
});

// Navigation
const nav = $('.nav');
const sectionSkills = $('.section-skills');
const hh = sectionSkills.height();

$(document).scroll(function () {
	if ($(this).scrollTop() > hh) {
		nav.addClass('scrolled');
	} else {
		nav.removeClass('scrolled');
	}
});
