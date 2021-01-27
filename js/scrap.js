gsap.to(".info_0", {
    scrollTrigger: '.info_0',
    y: 0,
    duration: .75
})

let ill0 = gsap.timeline({
    scrollTrigger: {
        trigger: ".info_0"
    }
});

ill0.from(".info_0", { y: 75, opacity: 0, duration: 1})

gsap.to(".info_1", {
    scrollTrigger: '.info_1',
    y: 0,
    duration: .75
})

let ill = gsap.timeline({
    scrollTrigger: {
        trigger: ".info_1"
    }
});

ill.from(".info_1", { y: 75, opacity: 0, duration: 1})


gsap.to(".aboutme", {
    scrollTrigger: {
        trigger: ".aboutme",
        duration: .75,
    },
    y: 0,
})

let al = gsap.timeline({
    scrollTrigger: {
        trigger: ".aboutme"
    }
});

al.from(".aboutme", { y: 75, opacity: 0, duration: 1})


gsap.to("footer", {
    scrollTrigger: {
        trigger: ".footer",
        duration: .75,
    },
    y: 0,
})

let fl = gsap.timeline({
    scrollTrigger: {
        trigger: "footer"
    }
});

fl.from("footer", { y: 75, opacity: 0, duration: 1})


gsap.to(".hero_inner", {
    scrollTrigger: {
        trigger: ".hero_inner",
        duration: .75,
    },
    y: 0,
})

let hl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero_inner"
    }
});

hl.from(".hero_inner", { y: 75, opacity: 0, duration: 1})

///////

gsap.to(".info_box-0", {
    scrollTrigger: {
        trigger: ".info_box-0",
        duration: .75,
    },
    y: 0,
})

let info0 = gsap.timeline({
    scrollTrigger: {
        trigger: ".info_box-0"
    }
});

info0.from(".info_box-0", { y: 75, opacity: 0, duration: 1})


gsap.to(".info_box-1", {
    scrollTrigger: {
        trigger: ".info_box-1",
        duration: .75,
    },
    y: 0,
})

let info1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".info_box-1"
    }
});

info1.from(".info_box-1", { y: 75, opacity: 0, duration: 1})


gsap.to(".info_box-2", {
    scrollTrigger: {
        trigger: ".info_box-2",
        duration: .75,
    },
    y: 0,
})

let info2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".info_box-2"
    }
});

info2.from(".info_box-2", { y: 75, opacity: 0, duration: 1})

////////

gsap.to(".work_box-0", {
    scrollTrigger: {
        trigger: ".work_box-0",
        duration: .75,
    },
    y: 0,
})

let work0 = gsap.timeline({
    scrollTrigger: {
        trigger: ".work_box-0"
    }
});

work0.from(".work_box-0", { y: 75, opacity: 0, duration: 1})


gsap.to(".work_box-1", {
    scrollTrigger: {
        trigger: ".work_box-1",
        duration: .75,
    },
    y: 0,
})

let work1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".work_box-1"
    }
});

work1.from(".work_box-1", { y: 75, opacity: 0, duration: 1})