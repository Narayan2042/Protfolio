const leftData = {
  profile: {
    imgPath: "/Image/main website/Profile.png",
    name: "Narayan Tiwari",
    role: "Front-end Developer",
    media: [
      { link: "https://facebook.com/", path: "/Image/main website/f.png" },
      { link: "https://instagram.com", path: "/Image/main website/oo.png" },
      { link: "https://twitter.com", path: "/Image/main website/twiter.png" },
      { link: "https://linkedin.com", path: "/Image/main website/in.png" },
      { link: "https://youtube.com", path: "/Image/main website/youtube.png" },
      { link: "https://youtube.com", path: "/Image/main website/ball.png" },
    ],
  },
  about: {
    age: "24",
    residennce: "BD",
    freelance: "Available",
    Address: "Dhaka,Bangladesh",
  },
  languages: [
    { name: "Nepali", skill: "100%" },
    { name: "English", skill: "80%" },
    { name: "Hindi", skill: "60%" },
  ],
  skills: [
    { name: "HTML", skill: "90%" },
    { name: "CSS", skill: "85%" },
    { name: "Js", skill: "80%" },
    { name: "PHP", skill: "75%" },
    { name: "WordPress", skill: "85%" },
  ],
  extraSkills: ["Bootstrap", "stylus", "Gulp", "GIT"],
  download: {
    name: "Download CV",
    imgpath: "/Image/download1.png",
    link: "https://google.com",
  },
};

console.log(leftData.skills[0].skill);
